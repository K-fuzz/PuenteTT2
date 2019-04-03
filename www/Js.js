 document.addEventListener('deviceready', ready)


 function ready() {
 	document.getElementById('Abrir').addEventListener("click", createFile)
 	document.getElementById('Leer').addEventListener("click", readFile)
 	document.getElementById('Escribir').addEventListener("click", writeFile)
 	document.getElementById('Borrar').addEventListener("click", removeFile)

 	console.log(cordova.file)
    
 }

  var ruta
  var nombre 


 function directorio(){
    var nombre = getElementById('nombre').value

 		var selector = document.getElementById('directorio');
 		var ruta = selector[selector.selectedIndex].value;
        if (ruta == "cordova.file.cacheDirectory"){ruta = cordova.file.cacheDirectory}
        else if (ruta == "cordova.file.dataDirectory"){ruta = cordova.file.dataDirectory}
        else if (ruta == "cordova.file.externalRootDirectory"){ ruta = cordova.file.externalRootDirectory}
        else if (ruta == "cordova.file.externalCacheDirectory"){ ruta = cordova.file.externalCacheDirectory}
        else if (ruta == "cordova.file.externalDataDirectory"){ ruta = cordova.file.externalDataDirectory}
 		};
 	
 var fileName = getElementById('nombre').value;
 var texto 


function createFile(dirEntry, fileName, isAppend) {
    
    dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {

        writeFile(fileEntry, null, isAppend); }, onErrorCreateFile); };


function writeFile(fileEntry, dataObj) {
    
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            readFile(fileEntry);
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        texto = document.getElementById('texto').value

        fileWriter.write(texto);
    });
}

function onErrorLoadFs(){alert("Error fs")}
function onErrorCreateFile(){alert("error Create")}


 function create(){
		window.resolveLocalFileSystemURL(ruta, function (dirEntry){
            console.log('file system create: '+ dirEntry.name);
            createFile(dirEntry, fileName, isAppend);
            }, onErrorLoadFs); }
