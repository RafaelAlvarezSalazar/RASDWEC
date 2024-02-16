let input = document.getElementById("input")
let boton = document.getElementById("boton")

boton.addEventListener("click" ,dibujarTableroHTML )

function dibujarTableroHTML(){
    let contenedor = document.getElementById("contenedor")
    let valorImput = input.value
    
    for (let i = 1; i < valorImput*valorImput ; i++) {
        let casilla = document.createElement("div")
        contenedor.appendChild(casilla)
    }
    
}
