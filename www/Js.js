 document.addEventListener('deviceready', ready)


 function ready() {console.log(cordova.file)

  
};
  


	function crear(){
		alert("PRUEBA")
		var directorio = cordova.file.dataDirectory

        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, resolveok) };

    function resolveok(){
    	directorio.getFile('prueba.txt',{create: true, exclusive: true}, function ok(){alert("Bien")} , function notok(){alert("mal")}


    };








		
			


 
