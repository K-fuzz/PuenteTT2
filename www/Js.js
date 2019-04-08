 document.addEventListener('deviceready', ready)


 function ready() {console.log(cordova.file)

  
};
  var filename


	function crear(){
		filename = document.getElementById('nombre').value

        window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, resolveok, function e (){alert("Error")}) };

    function resolveok(directorio){
    	alert(directorio);
    	directorio.getFile('prueba.txt',{create: true, exclusive: true}, 

    	function ok(){alert("El archivo se ha creado correctamente")} , function notok(){alert("Ha ocurrido un error al crear el archivo.")})


    };








		
			


 
