import { Cargador } from "./cargador"
// import {Modal} from './Modal'


export class WebService {
    constructor(url) {
        this.urlWS = url;
    }
   

    LlamarWS(verbo, metodo, parametros, token, timeout = 20000, ConParse) {
        let url = this.urlWS + "/" + metodo;
        let Cabecera=null
        return new Promise(function (resolve, rejects) {
            let req = new XMLHttpRequest();
            req.onloadstart = res => {
               // Modal.Show("","<i class='fas fa-spinner fa-spin fa-4x fa-pull-left'></i>")
                Cargador.Mostrar();
            }
            req.open(verbo, url);
            req.timeout = timeout
            req.setRequestHeader("Content-type", 'application/json; utf-8');
            //req.setRequestHeader("Content-type", 'multipart/form-data');
            
            req.setRequestHeader("Access-Control-Allow-Origin", '*');
            req.setRequestHeader("Access-Control-Allow-Headers", 'Content-Type');
            if (token != "") {
                req.setRequestHeader("Authorization", `Bearer ${token}`);
            }

            req.onreadystatechange = function() {
                if(this.readyState == this.HEADERS_RECEIVED) {
              
                  // Get the raw header string
                  var headers = req.getAllResponseHeaders();
              
                  // Convert the header string into an array
                  // of individual headers
                  var arr = headers.trim().split(/[\r\n]+/);
              
                  // Create a map of header names to values
                  var headerMap = {};
                  arr.forEach(function (line) {
                    var parts = line.split(': ');
                    var header = parts.shift();
                    var value = parts.join(': ');
                    headerMap[header] = value;
                  });
                  req.responseHeaders=headerMap
                }
              }

            req.onload = function () {
               Cargador.Ocultar();
               
                if (req.status >=200 && req.status<=299) {
                    
                    if(req.response!==null && req.response!==undefined && req.response!=="undefined" && req.response!=="") 
                    {
                        //console.log("CONPARSE",ConParse,req.responseHeaders)
                        let salida;
                        if(ConParse===true)
                        {
                             salida=JSON.parse(req.response)
                            //console.log("SALIDA",typeof salida  )   
                            if(typeof salida==="object")
                            {
                                salida.Cabeceras=req.responseHeaders;
                            }
                             
                        }
                        else{
                             salida=req.response
                        }
                        

                        if(salida.Ok===true){
                            resolve(salida)
                            
                        }
                        else{
                            rejects(salida)
                        }
                        
                    }
                    else{
                        
                        //console.log(myHeaders)
                        resolve(req.response);
                        
                    }
                    
                } else {
                    console.log(req.statusText)
                    rejects(req.statusText);
                }
            };

            req.ontimeout = function () {
                Cargador.Ocultar();
                //Modal.Hide()
                console.log("TIEMPO", req)
                rejects("TimeOut Error")

            }

            req.onerror = function () {
                Cargador.Ocultar();
                //Modal.Hide()
                console.log("ERROR", req)
                rejects(req.statusText);
            };
            //console.log("LLAMADA STRINGGFY",JSON.stringify(parametros))
            req.send(JSON.stringify(parametros));
        });
    }

    LlamarWsPOSTFile(verbo, metodo, parametros, token, timeout = 20000, ConParse) {
        let url = this.urlWS + "/" + metodo;
        let Cabecera=null
        return new Promise(function (resolve, rejects) {
            let req = new XMLHttpRequest();

            req.onloadstart = res => {
               // Modal.Show("","<i class='fas fa-spinner fa-spin fa-4x fa-pull-left'></i>")
                Cargador.Mostrar();
            }
           
            req.open(verbo, url);
            req.timeout = timeout
            
           // req.setRequestHeader('Content-Type', 'multipart/form-data');
            
            
            req.setRequestHeader("Access-Control-Allow-Origin", '*');
            req.setRequestHeader("Access-Control-Allow-Headers", 'Content-Type');
            if (token != "")
            {
                req.setRequestHeader("Authorization", `Bearer ${token}`);
            }

            req.onreadystatechange = function()
            {
                if(this.readyState == this.HEADERS_RECEIVED)
                {
              
                  // Get the raw header string
                  var headers = req.getAllResponseHeaders();
              
                  // Convert the header string into an array
                  // of individual headers
                  var arr = headers.trim().split(/[\r\n]+/);
              
                  // Create a map of header names to values
                  var headerMap = {};
                  arr.forEach(function (line) {
                    var parts = line.split(': ');
                    var header = parts.shift();
                    var value = parts.join(': ');
                    headerMap[header] = value;
                  });
                  req.responseHeaders=headerMap
                }
            }

            req.onload = function () {
               Cargador.Ocultar();
               
                if (req.status >=200 && req.status<=299) {
                    if(req.response!==null && req.response!==undefined && req.response!=="undefined" && req.response!=="") 
                    {
                        //console.log("CONPARSE",ConParse,req.responseHeaders)
                        let salida;
                        if(ConParse===true)
                        {
                             salida=JSON.parse(req.response)
                            //console.log("SALIDA",typeof salida  )   
                            if(typeof salida!=="boolean")
                            {
                                salida.Cabeceras=req.responseHeaders;
                            }
                        }
                        else
                        {
                             salida=req.response
                        }
                        resolve(salida)
                    }
                    else
                    {
                        resolve(req.response);
                    }
                }
                else
                {
                    console.log(req.statusText)
                    rejects(req.statusText);
                }
            };

            req.ontimeout = function () {
                Cargador.Ocultar();
                console.log("TIEMPO", req)
                rejects("TimeOut Error")

            }

            req.onerror = function () {
                Cargador.Ocultar();
                console.log("ERROR", req)
                rejects(req.statusText);
            };
            
            req.send(parametros);
        });
    }
    /*
    LlamarWsPOSTFile(verbo, metodo, parametros, token, timeout = 10000, ConParse) {
        let url = this.urlWS + "/" + metodo;
        let Cabecera=null
        console.log("PARAMETROSSS",parametros)
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method: verbo,
                body: parametros,
                headers: {
                  'Authorization': 'Bearer ' + token,
                 'Content-Type': 'application/x-www-form-urlencoded',
                  'content-type': 'multipart/form-data'
                }
              })
              .then(res => resolve(res))
              .then(data => {
                console.log("ESTE ES EL OTRO THEN",data)
              })
              .catch(error=>reject(error))
        }) 
    }*/
    GETSinParse(metodo, parametros, token = "", timeout = 10000, ConParse=false ) {
        return this.LlamarWS('GET', metodo, parametros, token, timeout, ConParse);
    }

    GET(metodo, parametros, token = "", timeout = 60000, ConParse=true ) {
        return this.LlamarWS('GET', metodo, parametros, token, timeout, ConParse);
    }

    POST(metodo, parametros, token = "", timeout = 10000, ConParse=true) {
        return this.LlamarWS('POST', metodo, parametros, token, timeout,ConParse);
    }

    POSTFILE(metodo, parametros, token, timeout = 10000, ConParse=true){
        return this.LlamarWsPOSTFile('POST', metodo, parametros, token, timeout,ConParse)
    }

    PUT(metodo, parametros, token = "", timeout = 10000, ConParse=true) {
        return this.LlamarWS('PUT', metodo, parametros, token, timeout,ConParse);
    }

    PATCH(metodo, parametros, token = "", timeout = 10000, ConParse=true) {
        return this.LlamarWS('PATCH', metodo, parametros, token, timeout,ConParse);
    }

    DELETE(metodo, parametros, token = "", timeout = 10000, ConParse=true) {
        return this.LlamarWS('DELETE', metodo, parametros, token, timeout,ConParse);
    }

    LlamarWSjQuery(verbo, metodo, parametros, token, timeout = 10000) {

        let url = this.urlWS + "/" + metodo;
        console.log("LlamarWS", url, parametros);

        return new Promise((resolve, rejects) => {
            $.ajax({
                type: verbo,
                contentType: 'application/json; utf-8',
                headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', },
                dataType: 'json',
                url: url,
                data: JSON.stringify(parametros),
                beforeSend: xhr => {
                    Cargador.Mostrar();
                    if (token != "") {
                        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
                    }
                },
                complete: Cargador.Ocultar,
                timeout: timeout,
                success: function (data) {
                    //console.log("OK", metodo, data);
                    //resolve(data.d);
                    resolve(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    //console.log("error", metodo, "jqXHR", jqXHR, "textStatus", textStatus, "errorThrown", errorThrown);
                    rejects(jqXHR);
                }
            });
        });
    }

   
}

