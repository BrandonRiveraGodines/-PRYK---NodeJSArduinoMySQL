# -PRYK-NodeJSArduinoMySQL
Proyecto para Villanueva actualizando un campo de una base de datos automáticamente desde Arduino hasta MySQL haciendo uso de NodeJS.

### Es necesario ejecutar los siguientes pasos para que funcione correctamente el programa

* Instalar Node JS (realizado en Node JS Versión: 10.9.0)
* Borrar la Carpeta llamada: __node_modules__ **(img1)**
* Ejecutar el comando __npm init__ situado en la carpeta __NodeJSArduiino__ **(img2)** (esto volvera a crear la carpeta llamada __node_modules__, es normal, ese es el plan)
* Situarse en la carpeta __node__ y ejecutar el comando __node__ sobre el archivo __node.js__ **(img3)**
* En el archivo del código de __Arduino__ no tener ningún _Serial.println_ **A EXCEPCIÓN** de donde se muestra en el puerto Serial **EL VALOR DE LA TEMPERATURA** **(img4)**
* Se deberá cambiar en la variable __mysql__ dentro del archivo *node.js* según las especificaciones de tu proyecto, tales cómo: __HOST (localhost), USER, PASSWORD y DATABASE__ **(img5)**
* Se deberá cambiar en la parte del query de la base de datos el nombre de la __TABLA__, __COLUMNA__ y __id__ según como lo tenga en su proyecto **(img6)** 