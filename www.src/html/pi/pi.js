import {Msg} from "../../es/Msg.js";

export class Pi
{

    static Inicializa()
    {
        console.log("Pi.inicializa()")
        $("#btn-calcular").on("click",Pi.CalcularPi);

    }
    static Calcular(n)
    {
        console.log(`Pi.Calcular(${n})`)
        let num = 4;
        let den = 1;
        let pi=0;
        for( let i=0;i<n; i++ ) // x in range(1000000):
        {
            pi = pi + num / den;
            num = num * -1;
            den = den + 2;
            // console.log("Pasada",i,num,den,pi );
        }
        console.log("fuera",num,den,pi );
        console.log("Msg", Msg);
        return pi;
    }
    static CalcularPi()
    {
        let n = $("#txt-n").val();
        let pi = Pi.Calcular(n);
        $("#txt-pi").val(pi);
        let error = Math.abs( Math.PI - pi);

        Msg.show(`Valor Pi  ${pi}`, "Calculo Pi", "success", {Aceptar:{Value: "Aceptar"}, Cancelar:{Value: "Cancelar"}}, error > 0.001)
        .then((v) =>
            {
                console.log(v);
                if( v == "Aceptar")  
                {
                    console.log("Aceptar");
                }
                else if( v == "Cancelar")
                {
                    console.log("cancelar");

                }
                else
                {
                    console.log("Sin respuesta");
                }


            });
        

        $("#txt-error").val(error);
    }
}
