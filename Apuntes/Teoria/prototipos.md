# PROTOTIPOS

``` javascript
 let dani = new Persona("Daniel", "Cuesta", 1998)
``` 

Usando "prototype" se añade esa propiedad a cualquier objeto de esa instancia que se cree.
Las clases supusieron una mejora significativa, sobre la herencia basada en prototipos de js, creando sintaxis mas simple.

```javascript
    class Coche {
        constructor(mar, mod){
            this.marca = mar;
            this.modelo = mod;
        }
    }

    let miCoche = new Coche ("ford", "fiesta") //Constructor con marca modelo
    console.log(miCoche.marca + " " + miCoche.modelo); //Clase simple
```

Con Super se accede a los atributos de la clase padre. Se crea una clase usando 'extends'.

### Getters y Setters

```javascript 
    class Coche {
        constructor(mar, mod){
            this._marca = mar; //A la propiedad se le incluye un guion bajo delante
        }

        get marca (){ //Extraer informacion
            return this._marca;
        }

        set marca (mar){ //Modificar propiedades
            this._marca = mar
        }
    }
```

