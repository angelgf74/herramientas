export class qrs
{
    static Inicializa()
    {
        console.log("qrs.Inicializa()");
        // if( qrs. generadorQR == null)
        qrs. generadorQR = new QRCode(document.getElementById("qr"), {
                text: 'QRs',
                // width: 128,
                // height: 128,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        
            qrs. generadorQR.clear(); // clear the code.
            qrs. generadorQR.makeCode('QRs'); // make another code.
            $("#btn-generar").on("click",qrs.GenerarQR);
            qrs.GenerarQR();
    }

    static GenerarQR()
    {
        let texto = $("#txt-texto").val();
        let nivel = $("#redundancia option:selected").val();
        
        console.log("nivel", nivel, QRCode.CorrectLevel[nivel]);
        console.log( qrs. generadorQR);
        
        let colorFondo = $("#color-fondo").val();
        let colorTexto = $("#color-texto").val();
        console.log("colores", colorFondo, colorTexto);
        
        qrs.generadorQR._htOption.colorDark = colorTexto;
        qrs.generadorQR._htOption.colorLight = colorFondo;

        qrs.generadorQR._htOption.correctLevel = QRCode.CorrectLevel[nivel];

        qrs. generadorQR.clear(); // clear the code.
        qrs. generadorQR.makeCode(texto); // make another code.

    }

}