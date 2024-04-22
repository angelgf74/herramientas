export class pass
{
    static Inicializa()
    {
        console.log("pass.Inicializa()");
        pass.candidatos = "";
        pass. letrasMayus = "";
        pass. letrasMinus = "";
        pass. numeros = "0123456789";
        pass. simbolos = "!|@#$%&/()=?[]*+{}<>,;.:-_";
        pass. NCand = 0;
        pass. n=0;
        pass. generadorQR=null;


        for(let i='A'.charCodeAt(0); i<= 'Z'.charCodeAt(0);i++)         
            pass. letrasMayus+=String.fromCharCode(i);
        
        for(let i='a'.charCodeAt(0);i<='z'.charCodeAt(0);i++)             
            pass. letrasMinus+=String.fromCharCode(i);
        
        $("#btn-calcular").on('click', ()=>
        {
            let passw = pass.Gen();
            console.log ("passw", passw);
            $("#lbl-resultado").val(passw);

            // $("#lbl-resultado").select();
            // document.execCommand("copy");
            navigator.clipboard.writeText(passw).then(a=>console.log('clipboard', a));
        });
        $("input").on('change', pass.Preparar);
        pass. Preparar();


    }
    static Gen()
    {
        pass.NCand = pass.candidatos.length;

        let res = "";
        console.log("candidatos", pass.candidatos,pass.NCand, pass.n);
        if(pass.candidatos.length > 0)
            for(let i=0;i<pass.n;i++)
                res += pass.candidatos[Math.floor(Math.random() * pass.NCand)];
        return res;
    }
    static Preparar()
    {
        console.log("preparar")
        pass.candidatos = "";
        let mayus = $("#cb-may").prop('checked');
        let minus = $("#cb-min").prop('checked');
        let numer = $("#cb-num").prop('checked');
        let simbo = $("#cb-sim").prop('checked');
        pass.n = $("#txt-long").val();
        if(pass.n<1 )
        {
            pass.n=1;
            $("#txt-long").val(pass.n);
        }
        if(pass.n>100)
        {
            pass.n=100;
            $("#txt-long").val(app.n);
        }
        if(mayus)
            pass.candidatos+=pass.letrasMayus;
        if(minus)
            pass.candidatos+=pass.letrasMinus;
        if(numer)
            pass.candidatos+=pass.numeros;
        if(simbo)
            pass.candidatos+=pass.simbolos;
        pass.NCand = pass.candidatos.length;
        let combinaciones = pass.NCand ** pass.n;

        $("#lbl-info").text(`Caracteres: ${pass.NCand.toLocaleString()}, Combinaciones: ${(pass.Formatear(combinaciones)).toLocaleString()}`);
    }
    static Formatear(n)
    {
        let res = "";
        if(n < 1000000)
        {
            res=n.toLocaleString()
        }
        else
        {
            let log = Math.trunc( Math.log10(n));
            log = Math.trunc(log / 3) * 3;

            let aux = n / (10 ** log);
            aux = Math.trunc(aux * 100) / 100;
            res = `${aux.toLocaleString()} * 10 ^ ${log}`;
        }
        return res;
    }
}