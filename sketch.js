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
  fill(148, 90, 12, 255)
  rect(0,1335-200,1080,200,50,50,50,50)

  fill(220,219,255,255)
  rect(455,1335-200,5,200,0,0,0,00)
  verLogos()
  
}


// Dibuja el SVG indicando la variable, posición x, y, ancho y alto

function verLogos(){
  push()

    // Logo Recorrido
    f= 334/Recorrido.height
    image(Recorrido, 33, 33, Recorrido.width*f, Recorrido.height*f);

    f= 1000/Recorrido.height
    tint(100, 50)
    image(Recorrido, 924, 143, Recorrido.width*f, Recorrido.height*f);
    tint(255)
    


    
    textAlign(CENTER);
    textSize(20);
    fill(20,20,20)
    //textStyle(BOLD);
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

    //  Mapa
    f= 100/PuntoMapa.height
    image(PuntoMapa, 580, 950, PuntoMapa.width*f, PuntoMapa.height*f);
    

    //Actividades
    textAlign(LEFT)
    textSize(24)
    textFont(robotoFlex, {
    fontVariationSettings: `'wght' ${700}, 'wdth' ${110}`});
    text("ACTIVIDADES", 50, 450);
    text("ARTISTAS", 610, 450);
    text("HORARIOS", 50, 950);


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

function e_w(logo, factor) {
  let w = logo.width;
  w *= factor;
  return w; // Corregido a minúsculas
}
function e_h(logo, factor) {
  let h = logo.height;
  h *= factor;
  return h; // Corregido a minúsculas
}