import { app } from "../html/app"

var Index = {
    // Application Constructor
    initialize: function ()
    {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('pause', this.onDevicePause.bind(this), false); // eNTRO EN BACKGROUND
        document.addEventListener('resume', this.onDeviceResume.bind(this), false); // sALGO DE BACKGROUND
        document.addEventListener('backbutton', this.onDeviceBackButton.bind(this), false); // sALGO DE BACKGROUND                           
        //document.addEventListener("offline", this.onDeviceOffline.bind(this), false); // SI ESTOY SIN CONEXION
        //ocument.addEventListener("online", this.onDeviceOnline.bind(this), false); // SI ESTOY SIN CONEXION


    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function ()
    {
        this.receivedEvent('deviceready');    
        $.get("html/app.html", (htmlRes) =>
        {
            console.log("2");
            $("#app").html(htmlRes);
            app.Inicializar();
        }); 
    },
    
	receivedEvent: function (id)
    {
        console.log('Received Event: ' + id);
        
    },
    onDeviceBackButton:function()
    {
       
    },
    
    onDeviceResume:function()
    {
        
    },
    onDevicePause:function()
    {
        
    },
	onDeviceOffline:function(id){
        
    },
    onDeviceOnline:function(id){
        
    },
};

Index.initialize();