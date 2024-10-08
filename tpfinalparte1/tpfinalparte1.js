let imagenes = []; // Arreglo para almacenar las imágenes
let boton; // Variable para el botón de inicio
let botonSiguiente; // Variable para el botón siguiente
let pantallaActual = 0; // 0 para la imagen 1, 1 para la imagen 2

function preload() {
  imagenes[0] = loadImage('data/imagen1.JPEG'); // Carga la imagen 1
  imagenes[1] = loadImage('data/imagen2.JPEG'); // Carga la imagen 2
  boton = loadImage('data/boton.png'); // Carga la imagen del botón
  botonSiguiente = loadImage('data/botonde.siguente.png'); // Carga la imagen del botón siguiente
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255); // Vuelve a dibujar el fondo
  image(imagenes[pantallaActual], 0, 0, width, 400); // Muestra la imagen actual

  // Dibuja el título solo en la pantalla de inicio
  if (pantallaActual === 0) {
    fill(0); // Color negro para el texto
    textSize(32); // Tamaño del texto
    textAlign(CENTER);
    textFont('Georgia'); // Cambia la tipografía a Georgia (puedes elegir otra)
    textStyle(BOLD); // Estilo en negrita
    fill(255);
    text("Unchesterd", width / 2, 50); // Título en la parte superior

    let botonX = width / 2 - 50; // Centrar el botón
    let botonY = height - 150; // Margen desde el fondo (ajustado más arriba)
    image(boton, botonX, botonY, 100, 100); // Cambiar tamaño a 100x100
  }

  // Si estamos en la pantalla 1, mostrar el texto y el botón siguiente
  if (pantallaActual === 1) {
    fill(0); // Color negro para el texto
    textSize(20);
    fill(255);
    textAlign(CENTER);
    text("Natan y Elena encuentran el diario de Sir. Francis Draken\n y se encuentran un mapa que da hacia el tesoro del Dorado", width / 2, 300); // Escribe el texto en la pantalla 2

    // Dibuja el botón siguiente
    let botonSiguienteX = width / 2 - 50; // Centrar el botón siguiente
    let botonSiguienteY = height - 150; // Margen desde el fondo (ajustado más arriba)
    image(botonSiguiente, botonSiguienteX, botonSiguienteY, 100, 100); // Cambiar tamaño a 100x100
  }
}

function mousePressed() {
  // Cambia a la siguiente imagen si se presiona el botón
  let botonX = width / 2 - 50; // Centrar el botón
  let botonY = height - 150; // Margen desde el fondo (ajustado más arriba)

  // Cambia a la pantalla 1 al presionar el botón de inicio
  if (pantallaActual === 0 && mouseX > botonX && mouseX < botonX + 100 &&
      mouseY > botonY && mouseY < botonY + 100) {
    pantallaActual = 1; // Cambia a la imagen 2
  }

  // Cambia a la siguiente pantalla al presionar el botón siguiente
  if (pantallaActual === 1) {
    let botonSiguienteX = width / 2 - 50; // Centrar el botón siguiente
    let botonSiguienteY = height - 150; // Margen desde el fondo (ajustado más arriba)

    if (mouseX > botonSiguienteX && mouseX < botonSiguienteX + 100 &&
        mouseY > botonSiguienteY && mouseY < botonSiguienteY + 100) {
      // Aquí puedes implementar la lógica para cambiar a otra pantalla o hacer algo más
    }
  }
}
