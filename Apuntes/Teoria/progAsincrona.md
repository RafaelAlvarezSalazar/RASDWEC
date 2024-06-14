# Programacion Asíncrona
La programacion SÍNCRONA, debe esperar a que una tarea termine para pasar a la siguiente tarea, en cambio la programacion ASíNCRONA mientras hay una tarea esperando a otra, avanza a resolver la siguiente tarea, lo que hace que sea más rápida y eficiente.

### PROMESAS
- Una promesa es algo que se espera que ocurra, pero de lo que no se tiene certeza. En JS es un objeto (tipo Object) y tiene tres estados posibles:
    - Pendiente (pending)
    - Cumplida (fullifilled)
    - Rechazada (Rejected)
- Las API's asincronas de los navegadores suelen devolver promesas como resultado. Cuando una funcion es invocada, pasa automaticamente a pendiente hasya que se resuelve o rechaza.

- API Promesas-     
    ```javascript
                        class Promise
                        function resolve()
                        function reject()
                        then()
                        catch()
                        finally() 
                        all()
                        race()

                    ```
- Las promesas se crean mediante un constructor llamado Promise, al que se le pasa una funcion con dos parametros: resolve y reject que permite indicar que la promesa se resolvio o se rechazó. 
```javascript
var promesa = new Promise((resolve, reject) =>{
    //codigo asincrono
})
```

## ASYNC Y AWAIT

- **async:** Esta palabra clave se usa para definir funciones asíncronas. Cuando una función se declara como async, automáticamente devuelve una promesa. Dentro de una función async, puedes utilizar la palabra clave await para esperar la resolución de una promesa sin bloquear el hilo de ejecución. Aquí tienes un ejemplo básico de cómo se declara una función async:

```javascript
    async function myAsyncFunction() {
    // Código asíncrono
    return '¡Hola mundo!';
    }
```

- **await:** Esta palabra clave se usa dentro de funciones declaradas como async y se utiliza para esperar la resolución de una promesa. Cuando se usa await, la ejecución del código se detiene hasta que la promesa se resuelve o se rechaza. Cuando la promesa se resuelve, await devuelve el valor resuelto de la promesa. Aquí tienes un ejemplo de cómo usar await:

```javascript
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }

    fetchData()
        .then(data => {
            console.log(data); // Hacer algo con los datos obtenidos
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
```
- En este ejemplo, await **fetch('https://api.example.com/data')** espera a que se resuelva la promesa devuelta por fetch, lo que significa que la solicitud de red se realiza de forma asíncrona pero el código espera hasta que la respuesta esté disponible. Luego, **await response.json()** espera a que se complete la conversión de la respuesta a formato JSON. Es importante tener en cuenta que await solo puede utilizarse dentro de funciones declaradas con async.

- **async y await** se utilizan comúnmente para simplificar el código asíncrono, especialmente cuando se realizan múltiples operaciones asíncronas secuenciales, lo que hace que el código sea más legible y más fácil de entender en comparación con el uso de callbacks o promesas encadenadas.