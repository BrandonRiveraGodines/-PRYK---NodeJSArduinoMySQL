# -PRYK-NodeJSArduinoMySQL
Proyecto para Villanueva actualizando un campo de una base de datos automáticamente desde Arduino hasta MySQL haciendo uso de NodeJS.

### Es necesario ejecutar los siguientes pasos para que funcione correctamente el programa

* Instalar Node JS (realizado en Node JS Versión: 10.9.0)
* Borrar la Carpeta llamada: __node_modules__ **(img1)**
* Ejecutar el comando __npm install__ situado en la carpeta __NodeJSArduiino__ **(img2)** (esto volvera a crear la carpeta llamada __node_modules__, es normal, ese es el plan)
* Situarse en la carpeta __node__ y ejecutar el comando __node__ sobre el archivo __node.js__ **(img3)**
* En el archivo del código de __Arduino__ no tener ningún _Serial.println_ **A EXCEPCIÓN** de donde se muestra en el puerto Serial **EL VALOR DE LA TEMPERATURA** **(img4)**
* Se deberá cambiar en la variable __mysql__ dentro del archivo *node.js* según las especificaciones de tu proyecto, tales cómo: __HOST (localhost), USER, PASSWORD y DATABASE__ **(img5)**
* Se deberá cambiar en la parte del query de la base de datos el nombre de la __TABLA__, __COLUMNA__ y __id__ según como lo tenga en su proyecto **(img6)** 
* Se deberá cambiar el puerto por el cual se hará la comunicación, el puerto del arduino y el puerto que está en el código dentro de __node.js__ deberá ser el mismo. **(im7)**
* Para recibir datos desde Arduino se deberá cambiar el __Script__ del __Select__ con el campo en especifico a considerar según las necesidades de su proyecto, así como modificar la respuesta que se enviará a través del puerto Serial, __(en el ejemplo se muestra enviando un 1)__ y programar en Arduino lo que sucederá al recibir ese 1 **(img 8)**

__IMG1__

![__IMG1__](/images/img1.jpg)

__IMG2__

![__IMG2__](/images/img2.jpg)

__IMG3__

![__IMG3__](/images/img3.jpg)

__IMG4__

![__IMG4__](/images/img4.jpg)

__IMG5__

![__IMG5__](/images/img5.jpg)

__IMG6__

![__IMG6__](/images/img6.jpg)

__IMG7__

![__IMG7__](/images/img7.jpg)

__IMG8__
![__IMG8__](/images/img8.jpg)