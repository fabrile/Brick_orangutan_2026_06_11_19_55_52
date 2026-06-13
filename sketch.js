//  ------Definicion de logos
let Recorrido;
let LogoAVA;
let LogoFSA;
let LogoJuanaKoslay;
let LogoElVolcan;
let LogoASL;
let LogoPotrero;
let LogoSanLuis;
let PuntoMapa;




function preload() {
  // Carga el archivo SVG antes de que inicie el sketch
  Recorrido = loadImage("RECORRIDO.png");
  LogoAVA = loadImage("AVA_white.svg");
  LogoFSA = loadImage("FSA_white.svg");
  LogoJuanaKoslay = loadImage("Juana_Koslay.svg");
  LogoElVolcan = loadImage("El_Volcan.svg");
  LogoASL = loadImage("ASL.svg");
  LogoPotrero = loadImage("El_Potrero.svg");
  LogoSanLuis = loadImage("San_Luis.svg");
  PuntoMapa = loadImage("Punto_Mapa.svg");


  // Fonts
  robotoFlex = loadFont('fonts/RobotoFlex-VariableFont.ttf');

}


function setup() {
  createCanvas(1080, 1335);
   
  textFont(robotoFlex);
  textStyle(BOLD);



}

function draw() {
  background(220);
  noStroke()
  fill(148, 90, 12, 255)
  rect(0,1335-200,1080/2-10,200,50,0,0,50)
  rect(1080/2+10,1335-200,1080/2-10,200,0,50,50,0)

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
    textStyle(BOLD);
    text("DECLARADO DE INTERÉS", 350, 170);
    text("CULTURAL Y TURÍSTICO", 350, 195);
    textSize(35);
    textStyle(ITALIC);
    text("4 y 5 de Julio", 350, 380);

    //  Mapa
    f= 100/PuntoMapa.height
    image(PuntoMapa, 580, 950, PuntoMapa.width*f, PuntoMapa.height*f);
    
    textStyle(BOLD)

    //Actividades
    textSize(30)
    textAlign(LEFT)
    text("ACTIVIDADES", 50, 450);
    text("ARTISTAS", 610, 450);
    text("HORARIOS", 50, 950);


    // texto y logos organizan
    fill(255,255,255,255);
    textSize(20);
    text("Organizan:", 30, 1335 - 165);
   
    f = 100/LogoFSA.height
    image(LogoFSA, 300, 1335-150, LogoFSA.width*f, LogoFSA.height*f);
    f = 100/LogoAVA.height
    image(LogoAVA, 50, 1335 - 150, LogoAVA.width*f, LogoAVA.height*f);
    text("Acompañan:", 1080/2 + 50, 1335 - 165);

    // logos acompañan
    tamaño = 65
    f = tamaño/LogoJuanaKoslay.height
    image(LogoJuanaKoslay, 1080/2 + tamaño-10, 1335 - 160, LogoJuanaKoslay.width*f, LogoJuanaKoslay.height*f);
    f = tamaño/LogoElVolcan.height
    image(LogoElVolcan, 1080/2 + tamaño-10 + 150, 1335 - 160, LogoElVolcan.width*f, LogoElVolcan.height*f);
    f = tamaño/LogoASL.height
    image(LogoASL, 1080/2 + tamaño-10 + 150 + 150, 1335 - 160, LogoASL.width*f, LogoASL.height*f);

    f = tamaño/LogoPotrero.height
    image(LogoPotrero, 1080/2 + tamaño-10 +75, 1335 - 85, LogoPotrero.width*f, LogoPotrero.height*f);
    f = tamaño/LogoSanLuis.height
    image(LogoSanLuis, 1080/2 + tamaño-10 + 150 + 75, 1335 - 85, LogoSanLuis.width*f, LogoSanLuis.height*f);
    f = tamaño/LogoASL.height
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