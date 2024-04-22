export class hash
{
    static Inicializa()
    {
        console.log("hash.Inicializa()");
        $("#txt-texto").on('keyup', hash.GeneraMD5);
        hash.md5 = require("blueimp-md5");
        hash.sha512 = require('js-sha512');
        hash.sha256 = require('js-sha256');

        hash.GeneraMD5();
    }
    static GeneraMD5()
    {
        let texto=$("#txt-texto").val();
        // contiene: "dc599a9972fde3045dab59dbd1ae170b"
        let hashMd5 = hash.md5(texto);
        $("#txt-md5").val(hashMd5);

        
        let hashSha512 = hash.sha512(texto);
        $("#txt-sha512").val(hashSha512);

        let hashSha256 = hash.sha256(texto);
        $("#txt-sha256").val(hashSha256);



    }

}