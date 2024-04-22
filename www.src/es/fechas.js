export class Fechas
{
    static HoraParaInput(fecha)
    {
        //console.log("HoraParaInput", fecha);
        let cad = '';
        if (fecha != null && fecha != undefined && fecha !== '')
        {
            let aux = this.Parse(fecha);
            let h = aux.getHours();
            let m = aux.getMinutes();
            //console.log("hm", h, m)
            if (h < 10) h = '0' + h;
            if (m < 10) m = '0' + m;
            cad = `${h}:${m}`;
        }
        //console.log("FechaParaInput", fecha, cad);
        return cad;
    }
    static FechaParaInput(fecha)
    {
        //console.log("FechaParaInput", fecha);
        let cad = '';
        if (fecha != null && fecha != undefined && fecha !== '')
        {
            let aux = this.Parse(fecha);
            let anio = aux.getFullYear();
            let mes = aux.getMonth() + 1;
            let dia = aux.getDate();
            if (dia < 10) dia = '0' + dia;
            if (mes < 10) mes = '0' + mes;
            cad = `${anio}-${mes}-${dia}`;
        }
        //console.log("FechaParaInput", fecha, cad);
        return cad;
    }
    static toString(fecha)
    {
        console.log("Fecha toString", fecha, typeof (fecha))
        let res = fecha;
        if (res != null && res !== "")
        {
            fecha = this.Parse(fecha);
            if (typeof (fecha) != "string")
            {
                let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                res = fecha.toLocaleDateString("es-ES", options);
            }
            else
            {
                let trozos = fecha.split('-');
                if (trozos[0] > 2)
                {
                    [trozos[0], trozos[2]] = [trozos[2], trozos[0]];
                }
                if (trozos[0].length == 1) trozos[0] = '0' + trozos[0];
                if (trozos[1].length == 1) trozos[1] = '0' + trozos[1];
                res = `${trozos[0]}/${trozos[1]}/${trozos[2]}`;
            }
        }
        return res;


    }
    static Parse(fecha)
    {
        let res = null;
        //console.log("Fechas.Parse", fecha);
        if (fecha != null && fecha !== "" && fecha != NaN)
        {
            let dia = 0;
            let mes = 0;
            let anio = 0;
            let hora = 0;
            let min = 0;
            let seg = 0;

            let tpo = typeof (fecha);
            let esDate = fecha =>
            {
                dia = fecha.getDate();
                mes = (fecha.getMonth());
                if (dia < 10)
                    dia = '0' + dia;

                if (mes < 10)
                    mes = '0' + mes;
                anio = fecha.getFullYear();

                hora = fecha.getHours();
                if (hora < 10)
                    hora = '0' + hora;
                min = fecha.getMinutes();
                if (min < 10)
                    min = '0' + min;
                seg = fecha.getSeconds();
                if (seg < 10)
                    seg = '0' + seg;
            };

            switch (tpo)
            {
                case "string":
                    if (fecha.indexOf('/Date') >= 0)
                    {
                        //console.log("Fechas.Parse string con /Date");
                        let f = new Date(parseInt(fecha.substr(6)));
                        esDate(f);
                    }
                    else
                    {
                        //console.log("Fechas.Parse string sin /Date");
                        let separador = fecha.indexOf('/') >= 0
                            ? '/'
                            : '-';
                        let fh = fecha.split(' ');
                        let f = fh[0];
                        let h = fh[1];
                        let trozos = f.split(separador);
                        mes = parseInt(trozos[1]) - 1;

                        let dma = trozos[0].length <= 2;
                        anio = dma
                            ? trozos[2]
                            : trozos[0];
                        dia = dma
                            ? trozos[0]
                            : trozos[2];
                        if (h != null && h.length > 0)
                        {
                            let trozosh = h.split(':');
                            if (trozosh.length > 0)
                                hora = trozosh[0];
                            if (trozosh.length > 1)
                                min = trozosh[1];
                            if (trozosh.length > 2)
                                seg = trozosh[2];
                        }
                        if (dia.length == 1) dia = '0' + dia;
                        if (mes.length == 1) mes = '0' + mes;

                        if (hora.length == 1) hora = '0' + hora;
                        if (min.length == 1) min = '0' + min;
                        if (seg.length == 1) seg = '0' + seg;

                    }
                    break;
                case "object":
                    //console.log("Fechas.Parse object");
                    esDate(fecha);
                    break;
                default:
                    //console.log("Fechas.Parse default", tpo);
                    break;
            }
            if (isNaN(anio) == false && isNaN(mes) == false && isNaN(dia) == false //&& isNaN(hora) == false && isNaN(min) == false && isNaN(seg) == false
            )
                res = new Date(anio, mes, dia, hora, min, seg);
            //console.log("Fechas.Parse", fecha, dia, mes, anio, hora, min, seg, res);
        }
        return res;
    }
	
	static isDate(myDate) 
	{
		return myDate.constructor === Date;
	}
	
	static FechasParaWS(obj)
    {
        if (obj === null) return null;
        let tpo = typeof (obj);
        switch (tpo)
        {
            case "string":
                if (obj.startsWith("/Date("))
                {
                    return Fechas.Parse(obj);
                }
                return obj;
                break;
            case "object":
                for (let prop in obj)
                {
                    obj[prop] = Fechas.FechasParaWS(obj[prop]);
                }
                return obj;

            case "number":
            case "function":
            case "undefined":
            default:
                return obj;
                break;
        }
    }
}
