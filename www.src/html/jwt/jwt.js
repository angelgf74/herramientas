export class JWT
{
    static Inicializa()
    {
        $("#txt-token").val("token");
        $("#txt-token").on('change', JWT.Actualiza);
    }
    static parseJwt (token) 
    {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(window.atob(base64).split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2) )
                    .join(''));
        console.log('....',jsonPayload)
    return JSON.parse(jsonPayload);
}
    static Actualiza()
    {
        let token =  $("#txt-token").val();
        let res = JWT.parseJwt(token);
        console.log("JWT", token, res);
        let resJson = JSON.stringify(res,null, 3 );
        $("#txt-contenido").val(resJson);

    }
}
