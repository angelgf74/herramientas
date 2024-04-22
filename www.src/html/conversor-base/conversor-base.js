export class ConversorBase
{
    static Inicializa()
    {
        ConversorBase.Digitos = [];
        for(let d=0;d<=9;d++)
            ConversorBase.Digitos.push( d.toString());
        for(let d=0;d<=25;d++)
            ConversorBase.Digitos.push( String.fromCharCode('A'.charCodeAt() + d) );


        // $("#txt-decimal").on('change', ConversorBase.DecimalChange);

        $("#txt-decimal").on('keydown', e=>ConversorBase.txt_keydown(e,10));
        $("#txt-hexadecimal").on('keydown', e=>ConversorBase.txt_keydown(e,16));
        $("#txt-octal").on('keydown', e=>ConversorBase.txt_keydown(e,8));
        $("#txt-binario").on('keydown', e=>ConversorBase.txt_keydown(e,2));

        $("#txt-decimal").on('keyup', ConversorBase.DecimalChange);
        $("#txt-hexadecimal").on('keyup', ConversorBase.HexadecimalChange);
        $("#txt-octal").on('keyup', ConversorBase.OctalChange);
         $("#txt-binario").on('keyup', ConversorBase.BinarioChange);


    }

    static DecimalChange(e)
    {
        console.log("DecimalChnage", e);

        let num = $("#txt-decimal").val();
        let n = parseInt(num);
        let hex = ConversorBase.Decimal2Base(n,16);
        $("#txt-hexadecimal").val(hex);

        let bin = ConversorBase.Decimal2Base(n,2);
        $("#txt-binario").val(bin);
        
        let oct = ConversorBase.Decimal2Base(n,8);
        $("#txt-octal").val(oct);   



  
    }
    static HexadecimalChange(e)
    {
        console.log("HexadecimalChange", e);

        let num = $("#txt-hexadecimal").val();
        let n = ConversorBase.Base2Decimal(num, 16);

        $("#txt-decimal").val(n);

        let bin = ConversorBase.Decimal2Base(n,2);
        $("#txt-binario").val(bin);
        
        let oct = ConversorBase.Decimal2Base(n,8);
        $("#txt-octal").val(oct);   
    }

    static BinarioChange(e)
    {
        console.log("BinarioChange", e);

        let num = $("#txt-binario").val();
        let n = ConversorBase.Base2Decimal(num, 2);

        $("#txt-decimal").val(n);

        let hex = ConversorBase.Decimal2Base(n,16);
        $("#txt-hexadecimal").val(hex);
        
        let oct = ConversorBase.Decimal2Base(n,8);
        $("#txt-octal").val(oct);   
    }

    static OctalChange(e)
    {
        console.log("OctalChange", e);

        let num = $("#txt-octal").val();
        let n = ConversorBase.Base2Decimal(num, 8);

        $("#txt-decimal").val(n);

        let hex = ConversorBase.Decimal2Base(n,16);
        $("#txt-hexadecimal").val(hex);
        
        let bin = ConversorBase.Decimal2Base(n,2);
        $("#txt-binario").val(bin);   
    }



    static txt_keydown(e, base)
    {
        console.log("txt_keydown", e);
        console.log(ConversorBase.Digitos,ConversorBase.Digitos.slice(base));
        if(!ConversorBase.Digitos.slice(0,base).includes(e.key.toUpperCase() ) && e.code != 'Backspace')
        // if(! (e.key >= '0' && e.key <= '9') && e.code != 'Backspace' )
        {
            e.preventDefault();  
            e.returnValue = false;
            e.cancelBubble = true;
            return;
        }
    }

    static CambioBase(numero, baseOrigen, baseDestino)
    {
        let n = ConversorBase.Base2Decimal(numero, baseOrigen);
        let res = ConversorBase.Decimal2Base(n, baseDestino);
        return res;
    }
    static Decimal2Base(numero, base)
    {
        console.log("Decimal2Base",numero,base);
        let n = numero;
        let digitos = [];

        while(n > 0)
        {
            let digito = n % base;
            n = Math.floor(n / base);
            console.log("digito", digito);
            digito = digito <= 9 ? digito.toString() : String.fromCharCode(digito - 10 + 'A'.charCodeAt())
            digitos.push(digito);
            console.log(numero, digito, digitos);
        }
        let res = digitos.reverse().join('');
        console.log("Decimal2Base",numero,base, res)

        return res;
    }

    static Base2Decimal(numero, base)
    {
        numero = numero.toLowerCase();
        let res = 0;

        for (const d of numero)
        {
            let x = d >= '0' && d <= '9'
                ? parseInt(d)
                : d.charCodeAt() - 'a'.charCodeAt() + 10
                 console.log('d', d,'x', x);
                res = res*base + x;
        }
        console.log('Base2Decimal', numero, base, res);
        return res;
    }
}