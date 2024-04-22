// import { callbackify } from "util";
// import { connect } from "http2";

export class Plantilla 
{
    static staticConstructor()
    {
        Plantilla.FormatosTipos = {
            "string": "",
            "number": "2",
            "datetime": "F",
            "object": "F",
            "boolean": "No|Si"
        };
        Plantilla.FormatosDatetime =
            {
                f: { year: '2-digit', month: '2-digit', day: '2-digit' },
                F: { year: 'numeric', month: '2-digit', day: '2-digit' },
                h: { hour: '2-digit', minute: '2-digit' },
                H: { hour: '2-digit', minute: '2-digit', second: '2-digit' },
            };

    }

    static AplicaItem(plantilla, Obj, idx, Formato, PrototipoOFTransforacion)
    {
        //console.log("idx", idx, Formato);
        let res = "";
        let aux = plantilla;
        let props = null;
        //console.log("typeof (PrototipoOFTransforacion)", typeof (PrototipoOFTransforacion));
        if (typeof (PrototipoOFTransforacion) == "function")
        {
            //console.log("PrototipoOFTransforacion function 1", Obj);
            Obj = PrototipoOFTransforacion(Obj);
            props = Object.keys(Obj);
            //console.log("PrototipoOFTransforacion function 2", Obj, props);
        }
        else       
        {
            props = typeof (PrototipoOFTransforacion || Obj) == "string" ?
                [""]
                : Object.keys(PrototipoOFTransforacion || Obj);

        }

        //console.log("props", idx, props, Obj, typeof (Prototipo || Obj));
        //aux = aux.replace("{{__idx__}}", Plantilla.DarFormato(idx, "number", formato));

        aux = Plantilla.ReplaceAll(aux, "{{__idx__}}", idx);

        for (let i = 0; i < props.length; i++)
        {
            let prop = props[i];
            let propTrozos = prop.split('.');
            let valor = Obj;

            for (let index = 0; index < propTrozos.length; index++) 
            {

                let prop2 = propTrozos[index];
                valor = valor[prop2];
            }
            //valor = prop == "" ? Obj : Obj[prop];
            let tpo = typeof (valor);
            let formato = Formato[prop];
            if (tpo == "string")
            {
                valor = valor.trim();
                if (valor.substr(0, 6) == "/Date(" && valor.substr(-2, 2) == ")/")
                {
                    valor = new Date(parseInt(valor.substr(6)));
                    if (formato == null || formato == "")
                        formato = "F";
                }
            }
            //console.log("prop", prop, valor, tpo);

            if (formato === null || formato === undefined)
                formato = Plantilla.FormatosTipos[tpo];
            //console.log("AF1", valor);
            let valor2 = Plantilla.DarFormato(valor, tpo, formato);
            //console.log("AF2", valor, valor2);
            aux = Plantilla.ReplaceAll(aux, "{{" + prop + "}}", valor2);
        }
        res += aux;
        return res;
    }
    static AplicaLista(etiqueta, plantilla, Lista, Formato, Prototipo, FTransforacion)
    {
        let res = "";
        for (let i = 0; i < Lista.length; i++)
        {
            if (Lista[i] === undefined)
                continue;
            res += Plantilla.AplicaItem(plantilla, Lista[i], i, Formato || {}, Prototipo);
        }
        //console.log("ap", etiqueta, res);
        if (etiqueta === null || etiqueta === "")
            return res;
        else
            $(etiqueta).html(res);
    }
    static TablaCruzada(etiqueta, ptlComun, ptlRows, ListaRows, ptlCols, ListaCols, ptlDatos, ListaDatos, callback)
    {
        let anchoCol = "24rem";
        let altoRow = "4rem";
        let anchoCab = "25rem";
        //let altoCab = "6rem";

        let html = `<style>
  div.wrap{position:relative;width:100%;overflow:scroll;max-height: 40rem;}
  table{ width:auto;min-height:20rem;background:#EEE;}
  tr{width:100%; min-height: 4rem;}
  .colizquierda{width:${anchoCab};min-width: ${anchoCab}; max-width: ${anchoCab}; min-height: ${altoRow}; height: ${altoRow};overflow-x: scroll;overflow-y: hidden;}
  .colderecha{width:100%; min-height: ${altoRow}; height: ${altoRow}; white-space: nowrap; overflow-x: scroll;overflow-y: hidden; max-width: 5px}
  .fila{display:inline-block;width:auto;width:${anchoCol}; min-height: ${altoRow}; height: ${altoRow}; border-right: solid 1px black;}
  .colizquierda .fila{width:${anchoCab}; }
  .colderecha .fila{width:${anchoCol}; }
  .wrap * {margin:0; padding: 0}
  .fila2{min-height: ${altoRow}; height: ${altoRow};}
  .fila2.par{ background-color: #eeeeff }
  .fila2.impar{background-color: #eeffee }
  #tc_cols,#tc_comun {overflow: hidden}
</style>
<section class="wrap">
<table><tbody><tr><td class="colizquierda" id="tc_comun"></td><td class="colderecha" id="tc_cols"></td></tr>  
<tr><td class="colizquierda" id="tc_rows"></td><td class="colderecha" id="tc_datos"></td></tr>
</tbody></table></section>`;
        $(etiqueta).html(html);

        $.get(ptlComun, html =>
        {
            $("#tc_comun").html(html);
            $.get(ptlCols, (html) =>
            {
                this.AplicaLista("#tc_cols", html, ListaCols);
                $.get(ptlRows, (html) =>
                {
                    this.AplicaLista("#tc_rows", html, ListaRows);
                    let tipofila = "par";
                    // $.each($(".colizquierda.fila2"), (it, e) =>
                    // {
                    //     console.log("each", tipofila);
                    //     it.addClass(tipofila);
                    //     tipofila = tipofila == "par" ? "impar" : "par";
                    // });
                    $(".colizquierda>.fila2:odd").addClass("impar");
                    $(".colizquierda>.fila2:even").addClass("par");
                    $.get(ptlDatos, html =>
                    {

                        let cad = "";
                        let tipofila = "par";
                        for (let f in ListaRows)
                        {
                            let cad1 = "<div class='fila2 " + tipofila + "'>";
                            tipofila = tipofila == "par" ? "impar" : "par";
                            for (let c in ListaCols)
                            {
                                let d = ListaDatos[f][c];
                                //console.log("TC D", f, c, d)
                                let aux = this.AplicaItem(html, d, 0, {}, null);
                                cad1 += aux;
                            }
                            cad1 += "</div>";
                            cad += cad1;
                        }
                        $("#tc_datos").html(cad);

                        $("#tc_datos").scroll(
                            () =>
                            {
                                let v = $("#tc_datos").scrollLeft();
                                //console.log("scroll", v);
                                $("#tc_cols").scrollLeft(v);
                            });
                        callback();
                    });
                });
            });
        });
    }
    static DarFormato(valor, tipo, formato)
    {
        //console.log("DarFormato1", valor, tipo, "*" + formato + "*");

        let res = "";
        if (valor == null || valor == undefined)
            res = "";
        else
        {
            if (valor instanceof Date)
            {
                let options = {};
                for (let i = 0; i < formato.length; i++)
                {
                    let temp = Plantilla.FormatosDatetime[formato[i]] || {};
                    let keys = Object.keys(temp);
                    for (let j = 0; j < keys.length; j++)
                        options[keys[j]] = temp[keys[j]];
                }
                if (typeof (formato) != "string")
                    formato = "F";
                if (options === null || options === undefined)
                    options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                //console.log("DarFormato Date", valor, tipo, formato, options);
                let resF = "";
                let resH = "";
                let optionsF = jQuery.extend({}, options);
                let optionsH = jQuery.extend({}, options);

                if (formato.indexOf("f") >= 0 || formato.indexOf("F") >= 0)
                {
                    optionsF.hour = undefined;
                    optionsF.minute = undefined;
                    optionsF.second = undefined;
                    resF = valor.toLocaleDateString("es-ES", optionsF);
                }
                if (formato.indexOf("h") >= 0 || formato.indexOf("H") >= 0)
                {
                    optionsH.year = undefined;
                    optionsH.month = undefined;
                    optionsH.day = undefined;
                    optionsH.hour12 = false;
                    //console.log("HORA: ", optionsH);
                    resH = valor.toLocaleTimeString("es-ES", optionsH);
                    let h = resH.split(":")[0];

                    if (h.length < 2)
                        resH = `0${resH}`;
                }
				if (formato.startsWith("IF"))
                {
                    resF = `${valor.getFullYear()}-${(valor.getMonth() + 1).toString().padStart(2, '0')}-${valor.getDate().toString().padStart(2, '0')} `;
                }
                res = (resF + " " + resH).trim();
                //console.log("F", resF, "H", resH);
                // res = (formato.indexOf("f") < 0 && formato.indexOf("F") < 0)
                //     ? valor.toLocaleTimeString("es-ES", options)
                //     : valor.toLocaleDateString("es-ES", options);
            }
            else
            {
                switch (tipo)
                {
                    case "number":
                        let d = parseInt(formato);
                        res = valor.toFixed(d);
                        //console.log("number", formato, d);
                        break;
                    case "datetime":
                    case "object":
                        break;
                    case "boolean":
                        let t = formato.split('|');
                        let idx = valor ? 1 : 0;
                        res = t[idx];
                        //console.log("formato boolean", valor, formato, t, t[idx], res);
                        break;
                    case "string":
                        res = valor;
                    default:
                        res = valor;
                        break;
                }
            }
        }

        let quitarNulos = (typeof (formato) !== "string") || (formato.indexOf("*") < 0);
        if (quitarNulos)
            res = this.SinNulo(res);

        //console.log("DarFormato2", valor, tipo, formato, res, quitarNulos);
        return res;
    }
    static ReplaceAll1(origen, patron, valor)
    {
        let aux = origen;
        let temp = "";
        do
        {
            temp = aux;
            aux = aux.replace(patron, valor);

        } while (aux !== temp)
        return aux;

    }
    static ReplaceAll(origen, patron, valorX)
    {
        let res = origen.replace(new RegExp(patron, 'g'), valorX || "");
        return res;
    }

    static SinNulo(valor)
    {
        //return valor === null || valor === undefined || valor === "" ? "BBBBBBBBBB" : valor;
        return valor === null || valor === undefined || valor === "" ? "&nbsp;" : valor;
    }
}
Plantilla.staticConstructor();