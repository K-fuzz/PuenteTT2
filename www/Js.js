 document.addEventListener('deviceready', ready)


 function ready() {console.log(cordova.file)

  
};
  


	function crear(){
		alert("PRUEBA")

        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, 

        function (dirEntry){alert('Directorio: '+ dirEntry.name);
        dirEntry.getFile('prueba.txt', {create: true, exclusive: false}, 

        function(fileEntry){alert("Creado");}

        ,function onErrorLoadFs(){alert("Error fs")})}  )};









		
			


 
