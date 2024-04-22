// Importar clases necesarias para aplicacion y configuraciones

export  class Global{
  static Inicializa(){
    
    var pathname = window.location.pathname;
    var origenruta=window.location.origin;
    Global.UrlServer=origenruta;
    
    if(origenruta==="http://localhost" || origenruta==="https://localhost") 
    {
      Global.UrlWs="https://cloud.aitt.es:2443/certificadosAPI/api"
       /*"https://cloud.aitt.es:2339/Back2NomadAPI/api" */
      //Global.UrlWs="https://192.168.7.34:5001/api"       
    }
    else if(origenruta==="http://127.0.0.1")
    {
      Global.UrlWs="https://192.168.7.34:5001/api"
    }
    else
    {
      Global.UrlWs=origenruta + "/certificadosAPI/api"
    }

    if(origenruta==="http://localhost")
    {
     // $("body").append(`<div style="position:fixed; bottom:0; right:0; text-align:center; z-index:999999" align="center" class="bg-danger text-white p-2 me-2 mb-2">APUNTANDO A SERVER DESARROLLO ${ Global.UrlWs}</div>`)
    }
    
    Global.Token=null
    Global.TokenExpiration=null

    Global.UsuarioLogeado=null

    Global.DefaultOptionsDataGrid={
        showBorders: false,
        allowColumnResizing: true,
        columnHidingEnabled: true, // hace responsive del datagrid    
        columnAutoWidth:true, 
        repaintChangesOnly: true,
        rowAlternationEnabled: true,   
        showColumnLines: false, 
        wordWrapEnabled: true,
        columnChooser: {
          enabled: true
        },
        scrolling: {
          mode: "virtual"
        }, 
        loadPanel: {
            enabled: false
        },
        /*        
        paging: {
            enabled: true
        },
        paging: {
          pageSize: 10
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [10, 25, 50, 100]
        },
        */
        searchPanel: {
          visible: true,
          highlightCaseSensitive: true
        },
        selection: {
          mode: "single"
      },
    }

    Global.DefaultOptionsTreeList={
      rowAlternationEnabled: true,
      columnHidingEnabled: true, // hace responsive del datagrid        
      autoExpandAll:true,
      allowColumnResizing: true,
      columnAutoWidth: true,
      columnChooser: {
            enabled: true
      },
      columnFixing: { 
          enabled: true
      },
      loadPanel: {
          enabled: true
      },      
      paging: {
          enabled: false
      }
    }
  
  }

  static DarEstiloABotones(e){
    let botones= e.toolbarOptions.items
    console.log("BOTONES",botones)
    botones.forEach(element => {
      if(element.options!==undefined)
      {
        element.options.stylingMode="contained";
        element.options.type="default"
        //element.showText="always"
      }
      
      
    });
  }
  
  static sortJSON(data, key,keykey, orden) {
    return data.sort(function (a, b) {
      if(key!==null)
      {
        var x = a[key],
        y = b[key];
      }
      if(keykey!==null)
      {
        let key=keykey.split("|")
        var x = a[key[0]][key[1]],
        y = b[key[0]][key[1]];
      }
        

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
  }
    
  static Toast(text,type,tiempo){
    DevExpress.ui.notify(text, type, tiempo);
  }
}

Global.Inicializa();