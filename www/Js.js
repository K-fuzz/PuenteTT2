 document.addEventListener('deviceready', ready)


 function ready() {console.log(cordova.file)

  var selector
  var ruta
  var fileName



 	function directorios(){

        var selector = document.getElementById('selected')
        var ruta = selector[selector.selectedIndex].value;
        var fileName = document.getElementById('nombre').value


        if (ruta == "cordova.file.cacheDirectory"){ruta = cordova.file.cacheDirectory}
        else if (ruta == "cordova.file.dataDirectory"){ruta = cordova.file.dataDirectory}
        else if (ruta == "cordova.file.externalRootDirectory"){ ruta = cordova.file.externalRootDirectory}
        else if (ruta == "cordova.file.externalCacheDirectory"){ ruta = cordova.file.externalCacheDirectory}
        else if (ruta == "cordova.file.externalDataDirectory"){ ruta = cordova.file.externalDataDirectory}

 		};


	function crear(){

        directorios();

        window.resolveLocalFileSystemURL(ruta, function (dirEntry){
        alert('file system create: '+ dirEntry.name);
        dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry){alert("Creado");}
        ,onErrorLoadFs)}  )};

		function onErrorLoadFs(){alert("Error fs")}
		function onErrorCreateFile(){alert("Error Create")}

			};
 
