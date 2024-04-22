import { qrs } from "../html/qrs/qrs"
import { pass } from "../html/pass/pass"
import { hash } from "./hash/hash"
import { Pi } from "./pi/pi"
import { JWT } from "./jwt/jwt"
import { ConversorBase } from "./conversor-base/conversor-base"
import { Base64 } from "./base64/base64"
import { NumerosPerfectos } from "./NumerosPerfectos/NumerosPefectos"

export class  app
    {
        /*
            Conversor Base
            Cron Parser
            Base64
                Texto
                Imagen
            JWT
        */
        static Inicializar ()
        {
            console.log("app.Inicializar()");
            $("#lbl-pass").on("click", app.pass );
            $("#lbl-qrs").on("click", app.qrs);
            $("#lbl-hash").on("click", app.hash);
            $("#lbl-pi").on("click", app.pi);
            $("#lbl-jwt").on("click", app.jwt);
            $("#lbl-cambio-base").on("click", app.cambioBase);
            $("#lbl-base64").on("click", app.base64);
            $("#lbl-num-perf").on("click", app.numperf);
            
            $('li.nav-item div.btn').click(function(e){
                console.log('nav-item click', e.currentTarget);
            if(!$(e.currentTarget).hasClass('dropdown-toggle'))
                $(".navbar-collapse").collapse('hide');
            });            
            // $('.navbar-collapse a').click(function(){
            //     $(".navbar-collapse").collapse('hide');
            // });
            // $("li.nav-item>div.btn").on('click',e=>
            // {
            //     console.log('click',e);
            //     $("li.nav-item>div.btn").removeClass('active');
            //     let target = e.currentTarget;

            //     $(target).addClass('active');
            // })
        }

        static qrs()
        {
            $.get("html/qrs/qrs.html", (htmlRes) =>
            {
                console.log("qrs");
                app.PestañaActiva("lbl-qrs");
               
                $("#main").html(htmlRes);
                qrs.Inicializa();
            }); 
        }

        static pass()
        {
            $.get("html/pass/pass.html", (htmlRes) =>
            {
                console.log("pass");
                app.PestañaActiva("lbl-seguridad");
                // $("li a").removeClass('active'); 
                // $("a#lbl-pass").addClass('active'); 
                $("#main").html(htmlRes);
                pass.Inicializa();
            }); 
        }

        static hash()
        {
            $.get("html/hash/hash.html", (htmlRes) =>
            {
                console.log("hash");
                app.PestañaActiva("lbl-seguridad");
                // $("li a").removeClass('active'); 
                // $("a#lbl-md5").addClass('active'); 
                $("#main").html(htmlRes);
                hash.Inicializa();
            }); 
        }
        static pi()
        {

            $.get("html/pi/pi.html", (htmlRes) =>
            {
                console.log("pi");
                app.PestañaActiva("lbl-pi");
                // $("li a").removeClass('active'); 
                // $("a#lbl-pi").addClass('active'); 
                $("#main").html(htmlRes);
                Pi.Inicializa();
            });  
        }

        static jwt()
        {
            $.get("html/jwt/jwt.html", (htmlRes) =>
            {
                console.log("jwt");
                app.PestañaActiva("lbl-seguridad");
                // $("li a").removeClass('active'); 
                // $("a#lbl-jwt").addClass('active'); 
                $("#main").html(htmlRes);
                JWT.Inicializa();
            });  
        }
        static cambioBase()
        {
            $.get("html/conversor-base/conversor-base.html", (htmlRes) =>
            {
                console.log("Conversor Base");
                app.PestañaActiva("lbl-cambio-base");
                // $("li a").removeClass('active'); 
                // $("a#lbl-cambio-base").addClass('active'); 
                $("#main").html(htmlRes);
                ConversorBase.Inicializa();
            });  
        }
        static base64()
        {
            $.get("html/base64/base64.html", (htmlRes) =>
            {
                console.log("Base 64");
                app.PestañaActiva("lbl-base64");
                // $("li a").removeClass('active'z); 
                // $("a#lbl-base64").addClass('active'); 
                $("#main").html(htmlRes);

                Base64.inicializa();
            });
        }      
        static numperf()
        {
            $.get("html/NumerosPerfectos/NumerosPerfectos.html", (htmlRes) =>
            {
                console.log("NumerosPerfectos");
                app.PestañaActiva("lbl-num-perf");
                // $("li a").removeClass('active'z); 
                // $("a#lbl-base64").addClass('active'); 
                $("#main").html(htmlRes);

                NumerosPerfectos.inicializa();
            });
        }
        static PestañaActiva(tag)
        {
            $("li.nav-item>div.btn").removeClass('active');

            $("#"+tag).addClass('active');

        }
    }
