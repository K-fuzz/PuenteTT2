 document.addEventListener('deviceready', ready)

 function ready() {
 	document.getElementById('Abrir').addEventListener("click", createFile)
 	document.getElementById('Leer').addEventListener("click", readFile)
 	document.getElementById('Escribir').addEventListener("click", writeFile)
 	document.getElementById('Borrar').addEventListener("click", removeFile)

 	console.log(cordova.file)

 }
 var valued
 function directorio(){
 		var selector = document.getElementById('directorio');
 		var valued = selector[selector.selectedIndex].value;
 		alert(valued);}
 	
 var nombre = getElementById('nombre').value

 function createFile(){
		window.resolveLocalFileSystemURL(valued+".PERSISTENT", 0, function (fs) {

    	console.log('file system open: ' + fs.name);
    	fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, 
    	function (fileEntry) {
		console.log("fileEntry is file?" + fileEntry.isFile.toString());
        fileEntry.name == nombre
        fileEntry.fullPath == 'downloads/someFile.txt'
        writeFile(fileEntry, null);

    	}, onErrorCreateFile);

		}, onErrorLoadFs);
		}
