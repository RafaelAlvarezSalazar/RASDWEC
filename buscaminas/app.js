let inputColumnas = document.getElementById("input-columnas");// Elemento HTML del input columnas
let inputFilas = document.getElementById("input-filas");// Elemento HTML del input filas
let contenedor = document.getElementById("contenedor-juego");// Elemento HTML del contenedor donde va el buscaminas generado
let boton = document.getElementById("boton");// Elemento HTML del boton generar

let contadorMinas = document.getElementById("contador-minas"); // Elemento HTML del contador de minas
let minasRestantes = 0; // Variable para almacenar la cantidad de minas restantes

let dificultad = document.getElementById("dificultad"); //Elemento HTML del input range de dificultad
let cajaNumeral = document.getElementById("cajaNumeral"); //Elemento HTML para que se vea el porcentaje del range

dificultad.addEventListener('input', mostrar);
// Función para actualizar porcentaje
function mostrar() {
    cajaNumeral.innerHTML = dificultad.value + "%";
}


boton.addEventListener("click", generarTableroHTML);

function generarTableroHTML() {
    let valorColumnas = parseInt(inputColumnas.value);
    let valorFilas = parseInt(inputFilas.value);
    contenedor.innerHTML = "";

    minasRestantes = 0; // Reiniciar el contador de minas 
    contadorMinas.textContent = minasRestantes; // Actualizar el contador de minas en el HTML

    for (let i = 0; i < valorFilas; i++) {
        let fila = document.createElement("div");
        fila.classList.add("fila");

        for (let j = 0; j < valorColumnas; j++) {
            let casilla = document.createElement("div");
            casilla.classList.add("casilla");
            fila.appendChild(casilla);
        }

        contenedor.appendChild(fila);
    }

    // Calcular el número de minas (el % del input dificultad)
    let porcentajeMinas = parseInt(dificultad.value);
    let cantidadBombas = Math.floor(valorColumnas * valorFilas * (porcentajeMinas / 100));
    minasRestantes = cantidadBombas; // Establecer el número inicial de minas restantes
    contadorMinas.textContent = minasRestantes; // Actualizar el contador de minas en el HTML

    // Llamar a la función para colocar las bombas después de generar el tablero
    colocarBombasTableroJS(valorFilas, valorColumnas, cantidadBombas);

    // Seleccionar todas las casillas del tablero después de generarlo
    let casillas = document.querySelectorAll('.casilla');

    // Iterar sobre cada casilla y agregar un event listener para el evento 'click'
    casillas.forEach(casilla => {
        casilla.addEventListener('click', function() {
            // Verificar si la casilla ya ha sido descubierta o marcada
            if (!this.classList.contains('descubierto') && !this.classList.contains('marcada')) {
                descubrirCasilla(this, valorFilas, valorColumnas); 
            }
        });

        // Agregar event listener para el evento 'contextmenu' (clic derecho)
        casilla.addEventListener('contextmenu', function(event) {
            event.preventDefault(); 
            // Verificar si la casilla ya ha sido descubierta
            if (!this.classList.contains('descubierto')) {
                // Alternar la clase 'marcada' para agregar o quitar la bandera
                this.classList.toggle('marcada');
                // Verificar si la casilla está marcada con una bandera
                if (this.classList.contains('marcada')) {
                    // Agregar clase 'bandera' para mostrar la bandera
                    this.classList.add('bandera');
                    minasRestantes--; // Decrementar el contador de minas restantes
                } else {
                    // Si se retira la bandera, eliminar la clase 'bandera'
                    this.classList.remove('bandera');
                    minasRestantes++; // Incrementar el contador de minas restantes
                }
                // Actualizar el contador de minas en el HTML
                contadorMinas.textContent = minasRestantes;
            }
        });
    });

    document.getElementById("formulario-container").style.display = "none";
    document.getElementById("tablero-container").style.display = "block";
}

function colocarBombasTableroJS(valorFilas, valorColumnas, cantidadBombas) {
    let bombasGeneradas = 0;

    while (bombasGeneradas < cantidadBombas) {
        let fila = Math.floor(Math.random() * valorFilas);
        let columna = Math.floor(Math.random() * valorColumnas);

        let casilla = contenedor.querySelector(`.fila:nth-child(${fila + 1}) .casilla:nth-child(${columna + 1})`);

        // Verificar si la casilla ya tiene una bomba asignada
        if (!casilla.classList.contains("bomba")) {
            casilla.classList.add("bomba");
            bombasGeneradas++;
        }
    }
}

function mostrarMensajePerdido() {
        let elemento = document.getElementById("popup-container");
        elemento.classList.add('show'); // Agregar la clase 'show' para hacer visible el popup
    }
    document.getElementById("reiniciar-btn").addEventListener("click", function() {
        // Evento reiniciar juego
        reiniciarJuego();
    });

    function reiniciarJuego() {
        location.reload();
    }
    
// Función para descubrir una casilla
function descubrirCasilla(casilla, valorFilas, valorColumnas) {
    // Verificar si la casilla contiene una bomba
    if (casilla.classList.contains('bomba')) {
        // Iterar sobre todas las casillas y revelar las minas restantes
        let casillas = document.querySelectorAll('.casilla');
        casillas.forEach(casilla => {
            if (casilla.classList.contains('bomba')) {
                casilla.classList.add('mina-revelada'); // Agregar clase para revelar mina
            }
        }); 
        // Mostrar la ventana emergente de "Has perdido"
        mostrarMensajePerdido();
    } else {
        // Si la casilla no contiene una bomba, contar el número de bombas adyacentes
        let contadorBombas = 0;
        let filaActual = casilla.parentElement;
        let filas = contenedor.querySelectorAll('.fila');

        // Obtener la posición de la casilla en la fila y la columna
        let columnaActual = Array.from(filaActual.children).indexOf(casilla);
        let filaIndex = Array.from(filas).indexOf(filaActual);

        // Verificar las casillas adyacentes para contar bombas
        for (let i = Math.max(0, filaIndex - 1); i <= Math.min(filas.length - 1, filaIndex + 1); i++) {
            for (let j = Math.max(0, columnaActual - 1); j <= Math.min(filas[i].children.length - 1, columnaActual + 1); j++) {
                let casillaAdyacente = filas[i].children[j];
                if (casillaAdyacente.classList.contains('bomba')) {
                    contadorBombas++;
                }
            }
        }
        // Mostrar el número de bombas adyacentes en la casilla
        if (contadorBombas > 0) {
            casilla.textContent = contadorBombas;
        } else {
            // Si no hay bombas adyacentes,mostrara casilla vacia
            casilla.textContent = '';

            // Expandir si la casilla actual es cero
            expandirCasillas(casilla, filaIndex, columnaActual, valorFilas, valorColumnas);
        }

        // Marcar la casilla como descubierta
        casilla.classList.add('descubierto');
    }
}

// Función para expandir las casillas cuando se descubre una casilla con valor cero
function expandirCasillas(casilla, filaIndex, columnaActual, valorFilas, valorColumnas) {
    // Definir la función para abrir el área recursivamente
    function abrirArea(c, f) {
        // Marcamos la casilla como procesada
        casilla.classList.add('procesada');
        // Iterar sobre las casillas circundantes
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                // Evitar la casilla actual
                if (i === 0 && j === 0) {
                    continue;
                }
                // Calcular las posiciones de la casilla circundante
                const nuevaFila = c + i;
                const nuevaColumna = f + j;
                // Verificar si la posición está dentro del tablero
                if (nuevaFila >= 0 && nuevaFila < valorFilas && nuevaColumna >= 0 && nuevaColumna < valorColumnas) {
                    // Obtener la casilla correspondiente
                    const casillaAdyacente = contenedor.querySelector(`.fila:nth-child(${nuevaFila + 1}) .casilla:nth-child(${nuevaColumna + 1})`);
                    // Verificar si la casilla adyacente no ha sido procesada
                    if (!casillaAdyacente.classList.contains('procesada')) {
                        // Descubrir la casilla
                        descubrirCasilla(casillaAdyacente, valorFilas, valorColumnas);
                        // Si la casilla adyacente es cero, expandir recursivamente
                        if (casillaAdyacente.textContent === '') {
                            expandirCasillas(casillaAdyacente, nuevaFila, nuevaColumna, valorFilas, valorColumnas);
                        }
                    }
                }
            }
        }
    }
    // Llamar a la función para abrir el área
    abrirArea(filaIndex, columnaActual);
}