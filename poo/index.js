// Estructura de datos: un array de objetos
let Encuesta = [];
var Sigue = true;

function mostrarEncuesta() {
  let texto = "";

  for (let i = 0; i < Encuesta.length; i++) {
    let p = Encuesta[i];
    texto += `Pregunta ${i + 1}: ${p.Pregunta}\n`;
    for (let j = 0; j < p.opciones.length; j++) {
      texto += `   ${j + 1}. ${p.opciones[j]}\n`;
    }
    texto += `Respuesta correcta: ${p.RespCorrecta}\n\n`;
  }

  return texto;
}

function CrearEncuesta() {
  while (Sigue == true) {
    
    let Nuevapregunta = prompt(mostrarEncuesta() + "Ingrese una pregunta o Ingrese \"1\" para terminar la encuesta y responder la encuesta");

    if (Nuevapregunta != "1") { //Si no es 1 o sea si se va a crear una pregunta
      let preguntaObj = {
        Pregunta: Nuevapregunta,
        opciones: [],
        RespCorrecta: "",
        RespDelUsuario: ""
      };
      for (let i = 1; i <= 4; i++) {
        let opcion = prompt("Ingrese la opción número " + i);
        preguntaObj.opciones.push(opcion);
      }

      // Guardar la respuesta correcta con validación
      let correcta;
      while (true) {
        correcta = prompt(
          "Pregunta: " + preguntaObj.Pregunta +
          "\nOpción 1: " + preguntaObj.opciones[0] +
          "\nOpción 2: " + preguntaObj.opciones[1] +
          "\nOpción 3: " + preguntaObj.opciones[2] +
          "\nOpción 4: " + preguntaObj.opciones[3] +
          "\nIngrese el número de la opción correcta (1-4)"
        );
        if (["1", "2", "3", "4"].includes(correcta)) {
          break; // ✅ válido
        } else {
          alert("⚠️ Solo se puede ingresar un valor entre el 1 y el 4");
        }
      }
      preguntaObj.RespCorrecta = correcta;

      // Agregar la pregunta al array Encuesta
      Encuesta.push(preguntaObj);

    } else {
      Sigue = false;
      ResponderEncuesta();
    }
  }
}

function ResponderEncuesta() {
  let puntaje = 0;

  for (let i = 0; i < Encuesta.length; i++) {
    let p = Encuesta[i];

    // Mostrar la pregunta y opciones al usuario
    let respuesta = prompt(
      "Pregunta " + (i + 1) + ": " + p.Pregunta +
      "\nOpción 1: " + p.opciones[0] +
      "\nOpción 2: " + p.opciones[1] +
      "\nOpción 3: " + p.opciones[2] +
      "\nOpción 4: " + p.opciones[3] +
      "\nIngrese el número de su respuesta"
    );

    // Guardamos la respuesta del usuario
    p.RespDelUsuario = respuesta;

    // Verificamos si es correcta
    if (respuesta === p.RespCorrecta) {
      alert("✅ ¡Correcto!");
      puntaje++;
    } else {
      alert("❌ Incorrecto. La respuesta correcta era la opción " + p.RespCorrecta);
    }
  }

  // Mostrar el resultado final
  alert("Encuesta finalizada.\nTu puntaje es: " + puntaje + " de " + Encuesta.length);
}

CrearEncuesta();
console.log(Encuesta);
