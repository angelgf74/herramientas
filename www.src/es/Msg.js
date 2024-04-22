export class Msg
{
    static show(contenido, titulo, icono, botones, error )
    {
        return swal(
            {
                title: titulo,
                text: contenido,
                icon: icono,
                buttons: botones,
                dangerMode: error
               }); //.then(v => console.log(v));
    }

}