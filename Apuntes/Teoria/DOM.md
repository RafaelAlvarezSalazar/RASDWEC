# DOM (Document Object Model) 

Representacion estructurada y jerarquica de un documento HTML,XHTML o XML
Es una  interfaz que me permite acceder y manipular paginas de dichos lenguajes. 

Para sacar provecho a sus utilidades, necesito transformar la pagina original, los navegadores transforman automaticamente todas las paginas web en una estructura mas eficiente de manipular.

### Modelo de objetos del documento
- Estructura del documento : Al cargar una pagina web, interpreta el codigo y crea una estructura arborea
- Nodos del DOM : Cada elemento ... es un nodo
- Acceso y manipulacion : El DOM proporciona métodos para acceder y manipular los nodos de un documento. 
- Actualizacion dinamica : Una de las principales ventajas del DOM es la capacidad de actualizar dinámicamente el contenido de una página sin necesidad de recargarla por completo. 


#### Propiedades de los nodos
- elemento.innerHTML : Todo lo que hay en la etiqueta
- elemento.textContent : todo lo que hay dentro de la etiqueta de apertura y cierre, pero ignorando etiquetas HTML
- elemento.value : Devuelve la propiedad Value de un input 

```javascript
elemento.innerHTML;
elemento.textContent;
elemento.value;
``` 

#### Acceso desde propiedades del document
 
- document.documentElement; => Devuelve el nodo de < html >
- document.head; => Devuelve el nodo de < head >
- document.body; => Devuelve el nodo de < body > ...
- document.title;=> Devuelve el título del documento, es decir, el contenido del elemento <title> dentro de <head>.
- document.link;=>
- document.anchor;=>puedes usar document.getElementsByTagName('a') o document.querySelectorAll('a')
- document.forms;=>Devuelve una colección de todos los elementos <form> en el documento.
- document.images;=>Devuelve una colección de todos los elementos <img> en el documento.
- document.links;=>Devuelve una colección de todos los elementos <a> (enlaces) en el documento.

#### Otros metodos

```javascript
document.getElementById("ID"); //Un unico valor
document.getElementsByClassName("NOMBRE"); //Array
document.getElementsByTagName("ETIQUETA"); //Array
document.getElementsByName("Nombre"); //Devuelve un array con todos los elementos del DOM que respondan a ese nombre
```
##### Aplicacion de metodos
```html
<form id = "idForm" name = "nombreForm" class = "miClase">
<!--Con cada metodo podremos acceder a los diferentes elementos-->
```

#### Como cargar la pagina

```javascript
//window.onload = inicio;
window.addEventListener("load", inicio);

document.addEventListener("DOMContentLoaded", function() {
    // Código a ejecutar una vez que el DOM ha sido completamente cargado
    inicio();
});
```

#### Crear, modificar elementos

- Para crear elementos utilizo .createElement
- Incluir elementos dentro de otro o del documento con .appendChild

```javascript
let miEtiqueta = document.createElement("etiqueta") //Crea un nuevo elementoHTML
let texto = document.createTextNode("texto") //Crea un texto para añadir al nodo
let comentario = document.createComment("comentario") //Crea un comentario de codigo con el texto

miEtiqueta.appendChild("texto")//Añadir un hijo a un elemento, aun no esta en el documento

//Para añadir
miEtiqueta.setAttribute("class","nombre de la clase")//Añade atributos
let content = document.getElementById("div1"); //Prepara el nodo al que añadir el elemento
content.appendChild("miEtiqueta") //Se crea el hijo del div anterior con
```

- AppendChild() es una funcion para agregar un nodo como hijo a otro nodo existente en el DOM.

- Podemos eliminar un hijo usando removeChild()
  
```javascript
var miDiv = document.getElementById("miDiv");
var parrafoAEliminar = document.getElementById("pAEliminar");
miDiv.removeChild(parrafoAEliminar);//Eliminamos el hijo

//PODRIA REEMPLAZARSE CON replaceChild();
const newNode = document.createTextNode("Water");
const element = document.getElementById("myList").children[0];

element.replaceChild(newNode, element.childNodes[0]);
```
- Children: El método children devuelve una colección en vivo (Live HTMLCollection) de los elementos secundarios de un nodo.
- ChildNodes: El método childNodes devuelve una colección de todos los nodos secundarios, incluyendo elementos HTML, nodos de texto y nodos de comentario.

### Propiedades de los nodos element

- **.parentElement:** Devuelve el elemento padre del nodo.
- **.parentNode:** Devuelve el nodo padre del nodo.
- **.children:** Devuelve una colección de los elementos secundarios del nodo como elementos.
- **.childNodes:** Devuelve una colección de los nodos secundarios del nodo, incluyendo nodos de texto y comentarios, como nodos.
- .**firstElementChild:** Devuelve el primer hijo del nodo como elemento.
- **.firstChild:** Devuelve el primer hijo del nodo.
- **.lastElementChild:** Devuelve el último hijo del nodo como elemento.
- **.lastChild:** Devuelve el último hijo del nodo.
- **.lastElementSibling:** Devuelve el último hermano del nodo como elemento.
- **.lastSibling:** Esto no es una propiedad válida. Si deseas acceder al último hermano del nodo, puedes usar .previousSibling y luego acceder al elemento.



