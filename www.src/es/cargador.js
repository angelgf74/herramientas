export class Cargador
{
  static staticConstructor()
  {
    Cargador.clase = "fas fa-sync fa-spin fa-5x";

    console.log("CONSTRUCTOR ESTATICO");
    Cargador.NInstancias = 0;
    // let HtmlCargador =
    //   `<div id="cargador" class="ContentLoader"><div class="Loader"><i class="${Cargador.clase}"></i></div></div>`;
    // $("body").append(HtmlCargador);
  }
  static Mostrar()
  {
    Cargador.NInstancias++;
    // MOSTRAR CARGADOR
    //$("#cargador").show();
    if (Cargador.dialogo == null)
      Cargador.dialogo = $.confirm(
        {
          icon: "",
          title: "",
          content: `<div class='text-center'>Cargando ...</div>`,
          columnClass:"col-sm",
          lazyOpen: true,
          closeIcon: false,
          buttons: false
        }
      );
    Cargador.dialogo.open();

  }
  static Ocultar()
  {
    Cargador.NInstancias--;
    if (Cargador.NInstancias <= 0)
    {
      // OCULTAR CARGADOR
      //$("#cargador").hide();
      // for (let d of Cargador.dialogos)
      //   d.close();
      Cargador.dialogo.close();
    }
  }
}
Cargador.staticConstructor();

