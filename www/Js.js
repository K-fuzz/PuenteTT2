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

        window.resolveLocalFileSystemURL(ruta, resolveok, function(){alert("Error")}) };

    function resolveok(directorio){
    	alert(directorio);
    	directorio.getFile('prueba.txt',{create: true, exclusive: true}, 

    	function ok(){alert("El archivo se ha creado correctamente")} , 
    	function notok(){alert("Ha ocurrido un error al crear el archivo.")})
	};


	function leer(fileEntry){
		alert("vas a leer texto")
		fileEntry.file(LeerOK, LeerError)


	};

	function LeerOK (file){
			var reader = new FileReader();
			reader.onloadend = function(e){alert(this.result);};
			reader.readAsText(file); 
			alert("Lectura de archivo correcta")};
			
		function LeerError(){alert("Error al leer el archivo")};



	var dataObj

	function escribir(fileEntry, dataObj){
		alert("vas a escribir texto")
		dataObj = document.getElementById('texto').value
		alert(dataObj)
		fileEntry.createWriter(funcionEscribir);
		function funcionEscribir(fileWriter){
			fileWriter.onwriteend = function(){
				alert("Escritura correcta")
				readFile(fileEntry);
			};

			fileWriter.onerror= function(e){
				alert("Error de escritura")
			};

		if (!dataObj) { 
			dataObj = new Blob(['No has introducido texto'],{type: 'text/plain'});
		}

		fileWriter.write(dataObj);
		};
	}








		
			


 
