 document.addEventListener('deviceready', ready)


 function ready() {console.log(cordova.file)

  
};
  var filename
  var ruta 
  var selector


	function crear(){
		filename = document.getElementById('nombre').value
		selector = document.getElementById('selected')
         ruta = selector[selector.selectedIndex].value;
         fileName = document.getElementById('nombre').value


        if (ruta == "cordova.file.cacheDirectory"){ruta = cordova.file.cacheDirectory}
        else if (ruta == "cordova.file.dataDirectory"){ruta = cordova.file.dataDirectory}
        else if (ruta == "cordova.file.externalRootDirectory"){ ruta = cordova.file.externalRootDirectory}
        else if (ruta == "cordova.file.externalCacheDirectory"){ ruta = cordova.file.externalCacheDirectory}
        else if (ruta == "cordova.file.externalDataDirectory"){ ruta = cordova.file.externalDataDirectory}

        window.resolveLocalFileSystemURL(ruta, resolveok, function e (){alert("Error")}) };

    function resolveok(directorio){
    	alert(directorio);
    	directorio.getFile('prueba.txt',{create: true, exclusive: true}, 

    	function ok(){alert("El archivo se ha creado correctamente")} , function notok(){alert("Ha ocurrido un error al crear el archivo.")})


    };








		
			


 
