// AQUI EMPIEZA FUNCION DE AGREGAR CURSO
function agregarNuevoCurso() {
    var select = document.getElementById("cursos");
    var nuevoCursoInput = document.getElementById("nuevoCursoInput");

    if (select.value === "nuevo") {
      nuevoCursoInput.style.display = "block";
    } else {
      nuevoCursoInput.style.display = "none";
    }
  }
  document.getElementById("agregar").addEventListener("click", function (event) {
      event.preventDefault();

      var select = document.getElementById("cursos");
      var nuevoCursoInput = document.getElementById("nuevoCurso");

      if (select.value === "nuevo" && nuevoCursoInput.value.trim() !== "") {
        // Agrega el nuevo curso académico al select como opción
        var nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = nuevoCursoInput.value;
        nuevaOpcion.text = nuevoCursoInput.value;
        select.add(nuevaOpcion);

        // Selecciona automáticamente el nuevo curso académico
        select.value = nuevoCursoInput.value;

        // Restablece el campo de nuevo curso
        nuevoCursoInput.value = "";
      }
    }); // AQUI SE ACABA AGREGAR NUEVO CURSO AL SELECT

  //FUNCION SELECCIONAR TODO
  function seleccionarTodo() {
    var checkboxes = document.getElementsByClassName("dias_checkbox");
    var selectTodoCheckbox = document.getElementById("todos_dias");

    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = selectTodoCheckbox.checked;
    }
  } // AQUI SE ACABA FUNCION DE SELECCIONAR TODO

  //CONTADOR DE LETRAS DE LA CAJA TEXTAREA
  const mensaje = document.getElementById("texto");
  const contador = document.getElementById("contador");
  mensaje.addEventListener("input", function (e) {
    const target = e.target;
    const longitudMax = target.getAttribute("maxlength");
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
  }); //FIN DE CONTADOR DE LETRAS DE LA CAJA DE TEXTAREA

  //VALIDACION FORMULARIO ⤵️
  // USAR --> patternMismatch ; rangeOverflow ; rangeUnderflow ; valueMissing
  window.onload = iniciar;
  function iniciar(){
  document.getElementById("enviar").addEventListener("click", validar , false)
  } 

  //VALIDAR NOMBRE (CAMPO NO VACIO)
  function validarNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
        alert("No puede dejar el campo nombre vacio");
      }
      return false;
    }
    return true;
  }

  //VALIDAR NIF (CAMPO NO VACIO Y 8 NUMEROS 1 LETRA)
  function validarNIF() {
    var elemento = document.getElementById("NIF");
    if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
        alert("No puede dejar el campo NIF vacio");
      }
      if (elemento.validity.patternMismatch) {
        alert("Debe contener al menos 8 numeros y una letra");
      }
      return false;
    }
    return true;
  }

  //VALIDAR FECHA (CAMPO NO VACIO)
  function validarFecha() {
    var elemento = document.getElementById("fecha");
    if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
        alert("No puede dejar el campo Fecha de Matriculacion vacio");
      }
      return false;
    }
    return true;
  }

  //VALIDAR MENSAJE(CAMPO NO VACIO Y MINIMO 2 CARACTERES MAX 500)
  function validarMensaje() {
    var elemento = document.getElementById("texto");
    if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
        alert("No puede dejar el campo mensaje vacio");
      }
      if (elemento.validity.tooShort) {
        alert("El mensaje debe tener al menos 2 caracteres");
      }
      return false;
    }
    return true;
  }

  //VALIDAR SELECT DIAS (AL MENOS 2 DIAS SELECIONADOS)
  function validarSelectDias() {
    var checkboxes = document.getElementsByClassName("dias_checkbox");
    var contador = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        contador++;
      }
    }
    if (contador < 2) {
      alert("Selecciona al menos dos días de disponibilidad.");
      return false;
    }
    return true;
  }

  //FUNCION PARA IR A GOOGLE
  function irAGoogle() {
    window.location.href = "https://www.google.com";
  }

  //VALIDAR TODO 
  function validar(e) {
    if (validarNombre() && validarNIF() && validarFecha() && validarMensaje() && validarSelectDias() ) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  }

  function error(elemento, mensaje) {
    alert(mensaje);
    elemento.focus();
  }