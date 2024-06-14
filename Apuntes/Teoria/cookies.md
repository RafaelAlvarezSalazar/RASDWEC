# COOKIES
- Pequeños ficheros de texto almacenados en el navegador
- El sitio es capaz de mantener los datos proporcionados mediante el navegador.
- Se guardan en pares nombre-valor
- Cuando un navegador solicita una pagina web de un servicio, las cookies que pertenecen a pa pagina son asociadas a la peticion.
- Ej: document.cookie = "clave1 = valor1; clave2 = valor2;";
    - Se puede incluir nombre; fecha de expiracion -UTC, si no hay fecha de expiracion, desaparece al cerrar el navegador.
    - Para modificarla hay que sobreescribir el valor del dato.

# WEBSTORAGE
- Lo primero es preguntar si lo soporta nuestro navegador
    - ```javascript
        if (typeOf(Storage) != "Undefined");
        ```
- IMPORTANTE PARA BUSCAMINAS:
    - Comprobar si el navegador soporta storage
    - Cuandos se arranca el programa debe mostrar un mensaje con el nombre del usuario, diferenciando si es su primera vez en la pagina
    - Crear una funcion de incremento y otra de decremento para modificar el contador
    - Finalmente crear una funcion para hacer logout y reestablecer los valores anteriores