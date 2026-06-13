// Desactivamos el FES si da falsos positivos con firmas complejas
p5.disableFriendlyErrors = true; 

//  ------Definicion de logos
let Fondo;
let Recorrido;
let LogoAVA;
let LogoFSA;
let LogoJuanaKoslay;
let LogoElVolcan;
let LogoASL;
let LogoPotrero;
let LogoSanLuis;
let PuntoMapa;

let artistasv =  460
let horariosv =  1000
let direccionh = 950

let Data = {
  "Actividades": [
    "actividad 1",
    "actividad 2",
    "actividad 3",
    "actividad 4"
  ],
  "Artistas": [
    "Pepita Juárez",
    "Juana de los Palotes",
    "Carlos Gutierrez",
    "Federico Casas",
    "Ana Belen",
    "Matias Herrera",
    "Fulana Gonzales",
    "Micaela Luna",
    "Maria Paz",
    "Sofia Noguera"
  ],
  "Dirección": [
    "Calle Inventada 1234",
    "San Luis Capital",
  ],
  "Horarios": [
    "Sábados y Domingos de 17 a 21hs",   
    "Abierto al público"
  ]
}

/*
function preload() {
  // Carga el archivo SVG antes de que inicie el sketch
  Recorrido = loadImage("assets/Recorrido.png");
  LogoAVA = loadImage("assets/AVA_white.png");
  LogoFSA = loadImage("assets/FSA_white.png");
  LogoJuanaKoslay = loadImage("assets/JuanaKoslay_white.png");
  LogoElVolcan = loadImage("assets/ElVolcan_white.png");
  LogoASL = loadImage("assets/ASL_white.png");
  LogoPotrero = loadImage("assets/ElPotrero_white.png");
  LogoSanLuis = loadImage("assets/SanLuis_white.png");
  PuntoMapa = loadImage("assets/Punto_Mapa.svg");


  // Fonts
  robotoFlex = loadFont('fonts/RobotoFlex-VariableFont.ttf');

}
*/

async function setup() {
  createCanvas(1080, 1335);
   
  // 1. Esperamos (await) a que la fuente se cargue por completo antes de seguir
  try {
    [
      robotoFlex,
      Fondo,
      LogoAVA,
      Recorrido,
      LogoFSA,
      LogoJuanaKoslay,
      LogoElVolcan,
      LogoASL,
      LogoPotrero,
      LogoSanLuis,
      PuntoMapa
    ] = await Promise.all([
      loadFont('fonts/RobotoFlex-VariableFont.ttf'),
      loadImage("assets/Fondo.jpg"),
      loadImage("assets/AVA_white.png"),
      loadImage("assets/Recorrido.png"),
      loadImage("assets/FSA_white.png"),
      loadImage("assets/JuanaKoslay_white.png"),
      loadImage("assets/ElVolcan_white.png"),
      loadImage("assets/ASL_white.png"),
      loadImage("assets/ElPotrero_white.png"),
      loadImage("assets/SanLuis_white.png"),
      loadImage("assets/PuntoMapa.png"),
    ]);
    console.log("¡Todos los recursos se cargaron correctamente!");
    } catch (error) {
      //console.error("Error crítico durante la carga de assets:", error);
  }



}

function draw() {
  // background(220);
  image(Fondo, 0, 0, 1080, 1335);
  noStroke()

  mostrarLogos()
  mostrarTexto()

  
}


// Dibuja el SVG indicando la variable, posición x, y, ancho y alto

function mostrarLogos(){
  push()

    // Pie de página
    fill(148, 90, 12, 255)
    rect(0,1335-200,1080,200,50,50,50,50)
    fill(220,219,255,255)
    rect(455,1335-200,5,200,0,0,0,0)

    // Logo Recorrido
    f= 334/Recorrido.height
    image(Recorrido, 33, 33, Recorrido.width*f, Recorrido.height*f);

    f= 1000/Recorrido.height
    tint(100, 50)
    image(Recorrido, 924, 143, Recorrido.width*f, Recorrido.height*f);
    tint(255)
    
    //  Mapa
    f= 100/PuntoMapa.height
    image(PuntoMapa, 580, 950, PuntoMapa.width*f, PuntoMapa.height*f);
    

    // texto y logos organizan
    fill(255,255,255,255);
    textSize(23);
    text("Organizan:", 44, 1167+23);
   
    f = 91/LogoFSA.height
    image(LogoFSA, 258, 1212, LogoFSA.width*f, LogoFSA.height*f);
    f = 91/LogoAVA.height
    image(LogoAVA, 44, 1212, LogoAVA.width*f, LogoAVA.height*f);
    text("Acompañan:", 489, 1167+23);

    // logos acompañan
    tamaño = 80
    f = tamaño/LogoJuanaKoslay.height
    image(LogoJuanaKoslay, 489, 1222, LogoJuanaKoslay.width*f, LogoJuanaKoslay.height*f);
    f = tamaño/LogoElVolcan.height
    image(LogoElVolcan, 604, 1222, LogoElVolcan.width*f, LogoElVolcan.height*f);
     f = tamaño/LogoPotrero.height
    image(LogoPotrero, 730, 1222, LogoPotrero.width*f, LogoPotrero.height*f);
    f = tamaño/LogoSanLuis.height
    image(LogoSanLuis, 803, 1212, LogoSanLuis.width*f, LogoSanLuis.height*f);
    f = tamaño/LogoASL.height

    tamaño = 70
    f = tamaño/LogoASL.height
    image(LogoASL, 950, 1222, LogoASL.width*f, LogoASL.height*f);

       //image(LogoASL, 1080/2 + tamaño-10 + 150 + 150, 1335 - 85, LogoASL.width*f, LogoASL.height*f);

  pop()
}

function mostrarTexto(){

    // texto de los logos de arriba
    textSize(20);
    fill(0,0,0,255)
    textAlign(CENTER)
    textFont(robotoFlex, {
    fontVariationSettings: `'wght' ${800}, 'wdth' ${85}`});
    text("DECLARADO DE INTERÉS", 350, 170);
    textFont(robotoFlex, {
    fontVariationSettings: `'wght' ${800}, 'wdth' ${110}`});
    text("CULTURAL Y TURÍSTICO", 350, 195);
    textSize(35);
    textFont(robotoFlex, {
    fontVariationSettings: `'wght' ${600}, 'wdth' ${110}`});
    text("4 y 5 de JULIO", 350, 380);

    //Titulos
    textAlign(LEFT)
    textSize(24)
    textFont(robotoFlex, {
    fontVariationSettings: `'wght' ${700}, 'wdth' ${110}`});
    text("ACTIVIDADES:", 50, artistasv);
    text("ARTISTAS", 610, artistasv);
    text("HORARIOS", 50, horariosv);

    // Listas con letra liviana
    fill(20, 20, 20);
    textSize(23);
    textFont(robotoFlex, {
      fontVariationSettings: `'wght' ${500}, 'wdth' ${100}`
    });

    // Lista de Actividades
    if (Data.Actividades) {
      for (let i = 0; i < Data.Actividades.length; i++) {
        text(Data.Actividades[i], 50, artistasv + 40 + i * 32);
      }
    }

    // Lista de Artistas
    if (Data.Artistas) {
      for (let i = 0; i < Data.Artistas.length; i++) {
        text(Data.Artistas[i], 610, artistasv + 40 + i * 32);
      }
    }

    // Lista de Horarios (acepta 'Horario' o 'Horarios')
    let horarios = Data.Horario || Data.Horarios;
    if (horarios) {
      for (let i = 0; i < horarios.length; i++) {
        text(horarios[i], 50, horariosv + i * 32 + 32);
      }
    }

    // Dirección (al lado del Punto de Mapa)
    let direccion = Data.Dirección || Data.Direccion;
    if (direccion) {
      for (let i = 0; i < direccion.length; i++) {
        text(direccion[i], 680, 990 + i * 32);
      }
    }



}

