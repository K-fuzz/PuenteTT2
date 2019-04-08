 document.addEventListener('deviceready', ready)


 function ready() {console.log(cordova.file)

  
};
  


	function crear(){
		alert("PRUEBA")
		

        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, resolveok, function e (){alert("Error")}) };

    function resolveok(directorio){
    	alert(directorio);
    	directorio.getFile('prueba.txt',{create: true, exclusive: true}, 

    	function ok(){alert("Bien")} , function notok(){alert("mal")})


    };








		
			


 
