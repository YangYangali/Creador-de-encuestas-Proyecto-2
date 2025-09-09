// Estructuras de datos simples (sin objetos)
let Preguntas = [];
let Opciones = [];             // Array de arrays
let RespuestasCorrectas = [];
let RespuestasUsuario = [];
let Sigue = true;

// Mostrar la encuesta creada
const mostrarEncuesta = () => {
  let texto = "";

  Preguntas.forEach((pregunta, i) => {
    texto += `Pregunta ${i + 1}: ${pregunta}\n`;
    Opciones[i].forEach((opcion, j) => {
      texto += `   ${j + 1}. ${opcion}\n`;
    });
    texto += `Respuesta correcta: ${RespuestasCorrectas[i]}\n\n`;
  });

  return texto;
};

// Crear la encuesta
const CrearEncuesta = () => {
  while (Sigue) {
    let NuevaPregunta = prompt(
      mostrarEncuesta() + 
      "Ingrese una pregunta o Ingrese \"1\" para terminar la encuesta y responderla"
    );

    if (NuevaPregunta !== "1") {
      // Guardar la pregunta
      Preguntas.push(NuevaPregunta);

      // Guardar las opciones
      let opcionesPregunta = [];
      for (let i = 1; i <= 4; i++) {
        let opcion = prompt("Ingrese la opción número " + i);
        opcionesPregunta.push(opcion);
      }
      Opciones.push(opcionesPregunta);

      // Guardar la respuesta correcta con validación
      let correcta;
      while (true) {
        correcta = prompt(
          "Pregunta: " + NuevaPregunta +
          "\nOpción 1: " + opcionesPregunta[0] +
          "\nOpción 2: " + opcionesPregunta[1] +
          "\nOpción 3: " + opcionesPregunta[2] +
          "\nOpción 4: " + opcionesPregunta[3] +
          "\nIngrese el número de la opción correcta (1-4)"
        );
        if (["1", "2", "3", "4"].includes(correcta)) {
          break; // ✅ válido
        } else {
          alert("⚠️ Solo se puede ingresar un valor entre el 1 y el 4");
        }
      }
      RespuestasCorrectas.push(correcta);

    } else {
      Sigue = false;
      ResponderEncuesta();
    }
  }
};

// Responder la encuesta
const ResponderEncuesta = () => {
  let puntaje = 0;

  Preguntas.forEach((pregunta, i) => {
    let respuesta = prompt(
      "Pregunta " + (i + 1) + ": " + pregunta +
      "\nOpción 1: " + Opciones[i][0] +
      "\nOpción 2: " + Opciones[i][1] +
      "\nOpción 3: " + Opciones[i][2] +
      "\nOpción 4: " + Opciones[i][3] +
      "\nIngrese el número de su respuesta"
    );

    RespuestasUsuario.push(respuesta);

    if (respuesta === RespuestasCorrectas[i]) {
      alert("¡Correcto!");
      puntaje++;
    } else {
      alert("Incorrecto. La respuesta correcta era la opción " + RespuestasCorrectas[i]);
    }
  });

  alert("Encuesta finalizada.\nTu puntaje es: " + puntaje + " de " + Preguntas.length);
};

// Iniciar
CrearEncuesta();

// Mostrar en consola
console.log("Preguntas:", Preguntas);
console.log("Opciones:", Opciones);
console.log("Respuestas correctas:", RespuestasCorrectas);
console.log("Respuestas usuario:", RespuestasUsuario);
