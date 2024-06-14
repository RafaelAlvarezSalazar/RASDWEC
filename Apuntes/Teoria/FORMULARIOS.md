# FORMULARIOS
Una de las razones de la aparicion de JavaScript fue a raiz de la necesidad de procesar Formularios en el lado del cliente.

### En el DOM:
- Un array forms con referencias a todos los formularios de la misma, al que se accede mediante documents.forms
- Un array elements por cada formulario con todos los elementos que contienen dicho formulario. (borones, listas, cuadros de texto...) document.form[0].elements[2]

#### Acceso:

- Se usan los atributos "name" o "id". 
- Tambien se puede acceder a los formularios y a sus elementos utilizando funciones del DOM de acceso directo a los nodos. 
EJ: document.getElementById("miForm").
EJ: document.getElementById("miElemento").
- Otra manera es: let miForm = documents.forms['miFormulario']

### Que es un formulario:
- Elemento que permite recopilar datos de forma ordenada, para enviarlos y procesar la informacion mediante su validación.
- Los atributos más imprescindibles dentro de un formulario son 'action' (procesa una URL donde se procesa el formulario) y 'method' (metodo con el cual se procesa GET o POST).

#### Inputs
- Controles de Formulario: Botones, cuadros de texto, casillas de vericacion, etc...
- Campos del formulario: Contiene los campos del form.
- Eventos mas utilizados: onclick, onchange, onfocus, onblur

### Acceso a Datos
- Para acceder al valor de tipo text se referencia el atributo "value".
- De igual manera se referencian los de tipo radioButton (value)
- Lo mismo ocurre con el checkBox se recorren los value y los checked.
    - El atributo options contiene un array
    - El atributo selectedIndex selecciona la posicion del array

### Envio y validacion
Existe un evento asociado a todo formulario llamado onsubmit, form.submit(). Recordar que si el manejador de un evento devuelve true se realiza el evento, si  devuelve false, se cancela el evento.

#### Método submit
- document.getElementById("miForm").submit();
- El metodo submit envia el formulario si se pulsara el boton. Suele incluirse paralelamente un boton de borrado tipo "reset".
- Se puede incluir tambien una tecla alternativa accesskey="s"
- Podriamos hacer: document.getelement..("miForm").addEventListener("submit", validar);

Para evitar el doble envío se utiliza el método disabled

- document.getelement..("miForm").disabled = true;

Para evitar que se envie por defecto se usa el preventDefault()


### Validacion desde HTML

Se pueden hacer pequeñas validaciones desde el propio HTML, asignando tipos de botones, usando patrones, determinando valores máximos y mínimos...




