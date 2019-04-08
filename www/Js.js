 document.addEventListener('deviceready', ready)


 function ready() {console.log(cordova.file)

  
};
  var selector
  var ruta
  var fileName

 	function directorios(){

         selector = document.getElementById('selected')
         ruta = selector[selector.selectedIndex].value;
         fileName = document.getElementById('nombre').value


        if (ruta == "cordova.file.cacheDirectory"){ruta = cordova.file.cacheDirectory}
        else if (ruta == "cordova.file.dataDirectory"){ruta = cordova.file.dataDirectory}
        else if (ruta == "cordova.file.externalRootDirectory"){ ruta = cordova.file.externalRootDirectory}
        else if (ruta == "cordova.file.externalCacheDirectory"){ ruta = cordova.file.externalCacheDirectory}
        else if (ruta == "cordova.file.externalDataDirectory"){ ruta = cordova.file.externalDataDirectory}

 		};


	function crear(){
		alert("PRUEBA")

        directorios();

        window.resolveLocalFileSystemURL(ruta, function (dirEntry){alert('fichero creado: '+ dirEntry.name);

        dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry){alert("Creado");}
        ,function onErrorLoadFs(){alert("Error fs")})}  )};

		
			


 
