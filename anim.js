// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { "text": "Del nervio me puse a temblar, ah", "time": 3 },
  { "text": "No me esperaba esto, es difícil de olvidar", "time": 13 },
  { "text": "Y no me quejo de que me hables a las tres", "time": 22},
  { "text": "Yo encantado de poderte atender", "time": 28 },
  { "text": "Amarrado en tus besos y en tu piel", "time": 32 },
  { "text": "Encantado por todo ese poder", "time": 37 },
  { "text": "Y ay, mi amor, por favor, dime", "time": 43 },
  { "text": "¿Cuál es la receta para hacerte el amor?", "time": 48 },
  { "text": "Que nunca olvides", "time": 51 },
  { "text": "Que volver a vernos sea algo tentador", "time": 54 },
  { "text": "Amor de cine", "time": 56 },
  { "text": "Eres como el agua en un día de calor", "time": 58 },
  { "text": "Ay, mi amor, ya no estés triste", "time": 105 },
  { "text": "Yo te doy el tiempo que tú necesites", "time": 109 },
  { "text": "Sean horas, cientas, miles", "time": 112  },
  { "text": "A tu honor preparo mil desfiles", "time": 115 },
  { "text": "Pero para ti no existe", "time": 117 },
  { "text": "Contigo no hay canciones tristes", "time": 119 },
  { "text": "Gasolina pa mi motor", "time": 122 },
  { "text": "Somos uno y somos dos", "time": 124 },
  { "text": "Somos dos", "time": 131 },
  { "text": "Somos dos", "time": 136 },
  { "text": "Somos dos", "time": 140 },
  { "text": "Somos", "time": 144 },
  { "text": "Somos, somos dos", "time": 150 },
  { "text": "Somos, oh-uh-uh", "time": 153 },
  { "text": "Y si fueras mía", "time": 155 },
  { "text": "Te llenaría todo el día de sonrisas", "time": 158 },
  { "text": "Hasta en mis sueños tu boca presumiría", "time": 161 },
  { "text": "¿Quién diría a dónde llegaría?", "time": 163 },
  { "text": "Y porque fueras mía", "time": 165 },
  { "text": "Mi alma al diablo yo seguro vendería", "time": 167 },
  { "text": "Diez mil kilómetros descalzo correría", "time": 169 },
  { "text": "Todo daría porque fueras mía, ay, ah", "time": 171 },
  { "text": "Y ay, mi amor, por favor dime", "time": 173 },
  { "text": "¿Cuál es la receta para hacerte el amor?", "time": 176 },
  { "text": "Que nunca olvides", "time": 179 },
  { "text": "Que volver a vernos sea algo tentador", "time": 181 },
  { "text": "Amor de cine", "time": 183 },
  { "text": "Eres como el agua en un día de calor", "time": 184 },
  { "text": "Ay, mi amor, ya no estés triste", "time": 186 },
  { "text": "Yo te doy el tiempo que tú necesites", "time": 174 },
  { "text": "Sean horas, cientas, miles", "time": 178 },
  { "text": "A tu honor preparo mil desfiles", "time": 182 },
  { "text": "Pero para ti no existe", "time": 186 },
  { "text": "Contigo no hay canciones tristes", "time": 190 },
  { "text": "Gasolina pa mi motor", "time": 194 },
  { "text": "Somos uno y somos dos", "time": 198 },
  { "text": "Y ay, mi amor, por favor dime", "time": 202 },
  { "text": "¿Cuál es la receta para hacerte el amor?", "time": 206 },
  { "text": "Que nunca olvides", "time": 210 },
  { "text": "Que volver a vernos sea algo tentador", "time": 214 },
  { "text": "Amor de cine", "time": 218 },
  { "text": "Eres como el agua en un día de calor", "time": 222 },
  { "text": "Ay, mi amor, ya no estés triste", "time": 226 },
  { "text": "Yo te doy el tiempo que tú necesites", "time": 230 },
  { "text": "Sean horas, cientas, miles", "time": 234 },
  { "text": "A tu honor preparo mil desfiles", "time": 238 },
  { "text": "Pero para ti no existe", "time": 242 },
  { "text": "Contigo no hay canciones tristes", "time": 246 },
  { "text": "Gasolina pa mi motor", "time": 250 },
  { "text": "Somos uno y somos dos", "time": 254 },
  { "text": "Somos uno y somos dos", "time": 258 }
]

;

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);