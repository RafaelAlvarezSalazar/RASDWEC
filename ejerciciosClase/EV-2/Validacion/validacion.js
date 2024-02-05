window.onload = iniciar;
function iniciar(){
document.getElementById("enviar").addEventListener("click", validar , false)
}

    function validarNombre(){
        var elemento = document.getElementById("nombre")
        if(!elemento.checkValidity()){
            if(elemento.validity.valueMissing){
                error2=(elemento, "No puede dejar el campo vacio")
            }
            if(elemento.validity.patternMismatch){
                error2=(elemento, "Debe contener entre 2 y 15 caracteres")
            }
            return false
        }
        return true
    }

    function validarEdad(){
        var elemento = document.getElementById("edad");
        if (!elemento.checkValidity()) {
            if (elemento.validity.valueMissing) {
                error2("No puede dejar el campo vacío");
            }
            if (elemento.validity.rangeOverflow) {
                error2("No puede dejar el campo vacío");
            }
            if (elemento.validity.rangeUnderflow) {
                error2("No puede dejar el campo vacío");
            }
            return false; 
        }
        return true; 
    }

    function validarTelefono(){
        var elemento = document.getElementById("telefono")
        if(!elemento.checkValidity()){
            console.error(elemento);
            return false
        }
        return true
    }
    function validar(e){
        if(validarNombre() && validarEdad() && validarTelefono && confirm("Estas seguro") ){
            return true
        }else{
            e.preventDefault() 
            return false
        }
    }
    function error(elemento){
        document.getElementById("mensajeError").innerHTML=elemento.validationMessage
        elemento.className = "error"
        elemento.focus()
    }
    function borrarError(){
        var formulario = document.forms[0]
        for(var i = 0 ; i < formulario.elements.length ; i++ ){
            formulario.elements[i].className=""
        }
    }
    function error2(elemento, mensaje){
        document.getElementById("mesajeError").innerHTML= mensaje
        elemento.className = "error"
        elemento.focus()
    }
