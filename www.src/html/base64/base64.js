export class Base64
{
  static inicializa()
  {
    console.log("Base64.inicializa")
    $("#txt-texto").on("keyup",Base64.calcular)
    $("#btn-copiar").on("click",Base64.copiar)
  }
  static utf8_to_b64( str ) 
  {
    return window.btoa(unescape(encodeURIComponent( str )));
  }

  static b64_to_utf8( str )
  {
    return decodeURIComponent(escape(window.atob( str )));
  }

  static calcular()
  {
    let txt = $("#txt-texto").val();
    let codificar = $("#cb-codificar").prop('checked');
    if(codificar)
    {
      let b64 = Base64.utf8_to_b64(txt);
      let b64Lineas = "";
      let i=0;
      for(let l of b64)
      {
        console.log("caracter", l);
        if(i%64 == 0 && i!=0)
        {

          b64Lineas+="\n";
          console.log("Salto de linea");
        }
        b64Lineas+=l;
        i++;
      }

      $("#txt-base64").val(b64Lineas);

    }
    else
    {
      let b64 = Base64.b64_to_utf8(txt);

      $("#txt-base64").val(b64);
    }


    if(txt.startsWith("data:image"))
    {
      // Imagen

    }
  }
  static copiar()
  {
    let b64 =  $("#txt-base64").val();
    navigator.clipboard.writeText(b64).then(a=>console.log('clipboard', a));
  }
}