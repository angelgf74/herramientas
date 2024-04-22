export class NumerosPerfectos
{
    static inicializa()
    {
        console.log("NumerosPerfectos.inicializa");
        $("#btn-sig").on('click', NumerosPerfectos.btnSigClick)

    }

    static btnSigClick()
    {
        console.log("NumerosPerfectos.btnSigClick");
        $("#btn-sig").disabled  = true;

        let nCad = $("#txt-n").val();
        let n = parseInt(nCad);
        let np = NumerosPerfectos.SigNumeroPerfecto(n);
        $("#txt-n").val(np);
        $("#btn-sig").disabled  = false;

    }
    static SigNumeroPerfecto(n)
    {
        let idx = n+1;
        while(! NumerosPerfectos.esPerfecto(idx))
            idx++;
        return idx;
    }
    static esPerfecto(n)
    {
        let divs =NumerosPerfectos. divisores(n)
        let suma = divs.reduce((a,b)=>a+b, 0);
        return suma == n;
    }
    static divisores(n)
    {
        let res =[];
        for(let i=1;i<n;i++)
        {
            if(n % i === 0)
            res.push(i);
        }
        return res;
    }
}