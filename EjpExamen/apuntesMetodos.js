// METODOS DE ARRAYS
    let array = new Array(); // Definir array vacío
    let array2 = [1, 2, 3, 4, 5]; // Definir array con datos

    array.push("Hola"); // Añade un elemento al final del array
    array2.pop(); // Elimina el último elemento del array y devuelve ese elemento
    array2.shift(); // Elimina el primer elemento del array y devuelve ese elemento
    array2.unshift(0, -1); // Añade uno o más elementos al inicio del array y devuelve la nueva longitud del array
    array2.splice(2, 1, 'a', 'b'); // Cambia el contenido del array eliminando elementos existentes y/o agregando nuevos elementos
    let newArray = array2.slice(1, 3); // Devuelve una porción del array desde el índice start hasta el índice end (no incluido)
    let newArray2 = array2.concat([6, 7, 8]); // Combina dos o más arrays
    let index = array2.indexOf(3); // Devuelve el índice del primer elemento igual al proporcionado, empezando la búsqueda desde fromIndex. Devuelve -1 si no se encuentra
    let isPresent = array2.includes(3); // Determina si el array incluye un determinado elemento, devuelve true o false
    let joinedString = array2.join(', '); // Une todos los elementos de un array en una cadena. Puedes proporcionar un separador opcional
    array2.reverse(); // Invierte el orden de los elementos en un array
    array2.sort((a, b) => a - b); // Ordena los elementos de un array (modificando el array) y devuelve el array ordenado. Puedes proporcionar una función de comparación opcional

// METODOS DE STRINGS//
    let str = "Hola, mundo!"; // Definir un string

    let length = str.length; // Obtener la longitud del string

    let uppercaseStr = str.toUpperCase(); // Convertir a mayúsculas
    let lowercaseStr = str.toLowerCase(); // Convertir a minúsculas

    let subStr = str.substring(1, 5); // Obtener una subcadena desde el índice 1 hasta el índice 4
    let slicedStr = str.slice(0, 4); // Obtener una porción del string desde el índice 0 hasta el índice 3

    let replacedStr = str.replace("mundo", "amigo"); // Reemplazar "mundo" con "amigo"

    let indexOfChar = str.indexOf("a"); // Obtener el índice de la primera ocurrencia de "a"
    let lastIndexOfChar = str.lastIndexOf("o"); // Obtener el índice de la última ocurrencia de "o"

    let charAt2 = str.charAt(2); // Obtener el carácter en el índice 2
    let charCodeAt2 = str.charCodeAt(2); // Obtener el valor ASCII del carácter en el índice 2

    let splitArray = str.split(","); // Dividir el string en un array usando "," como separador

    let trimmedStr = str.trim(); // Eliminar espacios en blanco al principio y al final del string

    let startsWithHola = str.startsWith("Hola"); // Comprobar si el string comienza con "Hola"
    let endsWithMundo = str.endsWith("Mundo"); // Comprobar si el string termina con "Mundo"
    let includesAmigo = str.includes("Amigo"); // Comprobar si el string incluye "Amigo"

// METODOS DE OBJETOS
    let person = {
        name: "John",
        age: 30,
        job: "Developer"
    }; // Definir un objeto
    
    let keysArray = Object.keys(person); // Obtener un array con las claves del objeto
    let valuesArray = Object.values(person); // Obtener un array con los valores del objeto
    let entriesArray = Object.entries(person); // Obtener un array de arrays [clave, valor]
    
    let hasNameKey = person.hasOwnProperty("name"); // Verificar si el objeto tiene la clave "name"
    
    let copiedPerson = Object.assign({}, person); // Copiar el objeto a otro objeto vacío
    
    let mergedObject = Object.assign({}, person, { city: "New York" }); // Fusionar objetos
    
    delete person.job; // Eliminar una propiedad del objeto
    
    // Recorrer las claves y valores del objeto
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    
    // Convertir el objeto a JSON
    let jsonString = JSON.stringify(person);
    
    // Convertir una cadena JSON a objeto
    let parsedObject = JSON.parse(jsonString);
    
// METODOS DE SET
    let set = new Set(); // Crear un nuevo conjunto

    set.add("apple"); // Agregar un elemento al conjunto
    set.add("banana");
    set.add("orange");

    set.delete("banana"); // Eliminar un elemento del conjunto

    let hasOrange = set.has("orange"); // Verificar si el conjunto contiene un elemento

    let setSize = set.size; // Obtener el tamaño del conjunto

    set.clear(); // Eliminar todos los elementos del conjunto

    // Iterar a través de los elementos del conjunto
    set.forEach(item => {
    console.log(item);
    });

// METODOS DE MAP
    let map = new Map(); // Crear un nuevo mapa

    map.set("key1", "value1"); // Establecer una clave y un valor en el mapa
    map.set("key2", "value2");

    map.delete("key1"); // Eliminar una entrada del mapa por clave

    let hasKey2 = map.has("key2"); // Verificar si el mapa contiene una clave

    let valueForKey2 = map.get("key2"); // Obtener el valor asociado a una clave

    let mapSize = map.size; // Obtener el tamaño del mapa

    map.clear(); // Eliminar todas las entradas del mapa

    // Iterar a través de las entradas del mapa
    map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
    });

// METODOS DE MATH
    let randomNum = Math.random(); // Obtener un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    let roundedNum = Math.round(4.7); // Redondear un número al entero más cercano
    let ceilNum = Math.ceil(4.3); // Redondear hacia arriba al entero más cercano
    let floorNum = Math.floor(4.8); // Redondear hacia abajo al entero más cercano
    let absoluteNum = Math.abs(-7); // Obtener el valor absoluto de un número
    let powerResult = Math.pow(2, 3); // Elevar un número a una potencia
    let squareRoot = Math.sqrt(9); // Obtener la raíz cuadrada de un número
    let maxNum = Math.max(1, 5, 3); // Obtener el valor máximo de varios números
    let minNum = Math.min(1, 5, 3); // Obtener el valor mínimo de varios números

// METODOS DE NUMBER
    let integerNum = parseInt("42"); // Convertir una cadena a un número entero
    let floatNum = parseFloat("3.14"); // Convertir una cadena a un número decimal
    let fixedNum = 3.14159.toFixed(2); // Redondear un número a un número específico de decimales y devolver como cadena
    let precisionNum = 3.14159.toPrecision(3); // Redondear un número a una longitud específica y devolver como cadena
    let exponentialNum = (5).toExponential(2); // Representar un número en notación exponencial y devolver como cadena

// MANEJO DE ERRORES
    try {
        // Código que podría lanzar un error
        throw new Error("Este es un error personalizado");
    } catch (error) {
        console.error(error.message); // Manejar el error
    } finally {
        // Código que se ejecuta independientemente de si se lanzó un error o no
    }

// DESESTRUCTURACIÓN DE OBJETOS
    let persona = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    
    // Desestructuración de objetos
    let { firstName, lastName, age } = persona;
    
    console.log(firstName); // John
    console.log(lastName);  // Doe
    console.log(age);       // 30
    
    // Asignación con alias
    let { firstName: fName, lastName: lName, age: years } = persona;
    
    console.log(fName);  // John
    console.log(lName);  // Doe
    console.log(years);  // 30
    
    // Valor por defecto
    let { city = "Unknown" } = persona;
    
    console.log(city);  // Unknown
    
    // DESESTRUCTURACIÓN DE ARREGLOS
    let numbers = [1, 2, 3, 4, 5];
    
    // Desestructuración de arreglos
    let [first, second, , fourth] = numbers;
    
    console.log(first);  // 1
    console.log(second); // 2
    console.log(fourth); // 4
    
    // Intercambio de variables
    [first, second] = [second, first];
    
    console.log(first);  // 2
    console.log(second); // 1
    
    // Rest element
    let [head, ...rest] = numbers;
    
    console.log(head); // 1
    console.log(rest); // [2, 3, 4, 5]

// OPERACIONES CON FECHAS
let currentDate = new Date(); // Crear una nueva instancia de Date con la fecha y hora actuales

let specificDate = new Date("2023-11-16T12:30:00"); // Crear una instancia de Date con una fecha y hora específicas

let year = currentDate.getFullYear(); // Obtener el año actual
let month = currentDate.getMonth(); // Obtener el mes actual (0-11)
let day = currentDate.getDate(); // Obtener el día del mes actual
let hours = currentDate.getHours(); // Obtener la hora actual
let minutes = currentDate.getMinutes(); // Obtener los minutos actuales
let seconds = currentDate.getSeconds(); // Obtener los segundos actuales

// OPERACIONES CON FECHAS - MANIPULACIÓN
currentDate.setFullYear(2022); // Establecer el año de la fecha
currentDate.setMonth(5); // Establecer el mes (0-11) de la fecha
currentDate.setDate(25); // Establecer el día del mes de la fecha
currentDate.setHours(18); // Establecer la hora de la fecha
currentDate.setMinutes(45); // Establecer los minutos de la fecha
currentDate.setSeconds(30); // Establecer los segundos de la fecha
    



