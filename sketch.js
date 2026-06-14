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
let LogoTaller = null;
let EspaciosData = {};

let artistasv =  460
let horariosv =  1000
let direccionh = 950
let Data = {};

/*
let Data = {
  "NombreEspacio": "Generico",
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
*/
async function setup() {
  // 1. Crear e inyectar la pantalla de carga en el DOM
  let loadingContainer = document.createElement('div');
  loadingContainer.id = 'loading-screen';
  loadingContainer.style.position = 'fixed';
  loadingContainer.style.top = '0';
  loadingContainer.style.left = '0';
  loadingContainer.style.width = '100vw';
  loadingContainer.style.height = '100vh';
  loadingContainer.style.backgroundColor = '#f7f7f9';
  loadingContainer.style.display = 'flex';
  loadingContainer.style.flexDirection = 'column';
  loadingContainer.style.justifyContent = 'center';
  loadingContainer.style.alignItems = 'center';
  loadingContainer.style.zIndex = '9999';
  loadingContainer.style.fontFamily = 'system-ui, -apple-system, sans-serif';
  loadingContainer.style.transition = 'opacity 0.4s ease';

  // Título
  let loadingTitle = document.createElement('h3');
  loadingTitle.innerText = 'Cargando Recursos...';
  loadingTitle.style.color = '#333333';
  loadingTitle.style.marginBottom = '20px';
  loadingTitle.style.fontWeight = '600';
  loadingContainer.appendChild(loadingTitle);

  // Barra exterior
  let progressOuter = document.createElement('div');
  progressOuter.style.width = '300px';
  progressOuter.style.height = '10px';
  progressOuter.style.backgroundColor = '#e0e0e0';
  progressOuter.style.borderRadius = '5px';
  progressOuter.style.overflow = 'hidden';
  progressOuter.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.1)';
  
  // Barra interior
  let progressInner = document.createElement('div');
  progressInner.style.width = '0%';
  progressInner.style.height = '100%';
  progressInner.style.backgroundColor = '#945a0c'; // Color dorado a tono con el cartel
  progressInner.style.transition = 'width 0.15s ease';
  progressOuter.appendChild(progressInner);
  loadingContainer.appendChild(progressOuter);

  // Porcentaje
  let percentText = document.createElement('span');
  percentText.innerText = '0%';
  percentText.style.marginTop = '12px';
  percentText.style.color = '#666666';
  percentText.style.fontSize = '0.85rem';
  loadingContainer.appendChild(percentText);

  document.body.appendChild(loadingContainer);

  let totalAssets = 12;
  let loadedCount = 0;

  function updateProgress() {
    loadedCount++;
    let percent = Math.round((loadedCount / totalAssets) * 100);
    progressInner.style.width = percent + '%';
    percentText.innerText = percent + '%';
  }

  const loadAsset = (promise) => {
    return promise.then(res => {
      updateProgress();
      return res;
    });
  };

  createCanvas(1080, 1335);
   
  try {
    // Cargar base de datos de los espacios
    const resData = await fetch('data.json');
    EspaciosData = await resData.json();
    updateProgress();
    
    // Inicializar con los datos de "Generico" o el primer espacio de la lista
    if (EspaciosData) {
      let keys = Object.keys(EspaciosData);
      if (keys.length > 0) {
        let firstKey = EspaciosData.Generico ? "Generico" : keys[0];
        Data = EspaciosData[firstKey];
        Data.NombreEspacio = firstKey;
      }
    }

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
      loadAsset(loadFont('fonts/RobotoFlex-VariableFont.ttf')),
      loadAsset(loadImage("assets/Fondo.jpg")),
      loadAsset(loadImage("assets/AVA_white.png")),
      loadAsset(loadImage("assets/Recorrido.png")),
      loadAsset(loadImage("assets/FSA_white.png")),
      loadAsset(loadImage("assets/JuanaKoslay_white.png")),
      loadAsset(loadImage("assets/ElVolcan_white.png")),
      loadAsset(loadImage("assets/ASL_white.png")),
      loadAsset(loadImage("assets/ElPotrero_white.png")),
      loadAsset(loadImage("assets/SanLuis_white.png")),
      loadAsset(loadImage("assets/PuntoMapa.png")),
    ]);
    console.log("¡Todos los recursos se cargaron correctamente!");
    
    // Ocultar pantalla de carga con desvanecimiento
    loadingContainer.style.opacity = '0';
    setTimeout(() => {
      loadingContainer.remove();
    }, 400);

    mostrarMenuCarga();
  } catch (error) {
    // Si falla algo, removemos la pantalla de carga para no bloquear al usuario
    console.error(error);
  }
}

function draw() {
  // background(220);
  image(Fondo, 0, 0, 1080, 1335);
  noStroke()

  mostrarLogos()
  mostrarTexto()

  noLoop()
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
    let recorridoW = Recorrido.width*f;
    image(Recorrido, 33, 33, recorridoW, Recorrido.height*f);

    // Logo Taller al lado si existe
    if (LogoTaller) {
      let fTaller = 300 / LogoTaller.height;
      image(LogoTaller, 1080*3/4 - LogoTaller.width*fTaller/2, 33 + (334 - 300) / 2, LogoTaller.width * fTaller, 300);
    }

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

    // Nombre del Espacio arriba de ARTISTAS
    let nombre = Data.NombreEspacio || "Generico";
    push();
    fill(148, 90, 12, 255);
    textFont(robotoFlex, {
      fontVariationSettings: `'wght' ${800}, 'wdth' ${100}`
    });
    textSize(22);
    text(nombre.toUpperCase(), 610, artistasv - 110, 420, 75);
    pop();

    //Referente arriba de ARTISTAS
    let Referente = (Data.Referente || []).join(', ');
    if (Referente) {
      push();
      fill(100, 100, 100, 255);
      textFont(robotoFlex, {
        fontVariationSettings: `'wght' ${600}, 'wdth' ${100}`
      });
      /*
      textSize(18);
      text("Referente: " +Referente, 610, artistasv - 50);
      */
      pop();
    }

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

    // Lista de Artistas (con soporte para dos columnas si superan los 15 artistas)
    if (Data.Artistas) {
      let limit = 15;
      let col2X = 840;
      
      push();
      if (Data.Artistas.length > limit) {
        // Reducimos un poco el tamaño de letra y la separación si hay muchos artistas para evitar desborde
        textSize(19);
        let spacing = 28;
        for (let i = 0; i < Data.Artistas.length; i++) {
          if (i < limit) {
            text(Data.Artistas[i], 610, artistasv + 40 + i * spacing);
          } else {
            text(Data.Artistas[i], col2X, artistasv + 40 + (i - limit) * spacing);
          }
        }
      } else {
        // Renderizado normal de una sola columna
        for (let i = 0; i < Data.Artistas.length; i++) {
          text(Data.Artistas[i], 610, artistasv + 40 + i * 32);
        }
      }
      pop();
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

function mostrarMenuCarga() {
  // Crear el contenedor del menú lateral
  let sidebar = document.createElement('div');
  sidebar.className = 'control-sidebar';

  // Título del formulario
  let title = document.createElement('h2');
  title.innerText = 'Crear Imagen para Recorrido';
  sidebar.appendChild(title);

  // Selector de Espacios (Dropdown)
  let grupoSeleccion = document.createElement('div');
  grupoSeleccion.className = 'form-group';
  
  let labelSeleccion = document.createElement('label');
  labelSeleccion.innerText = 'Seleccionar Espacio';
  labelSeleccion.setAttribute('for', 'select-espacio');
  grupoSeleccion.appendChild(labelSeleccion);
  
  let select = document.createElement('select');
  select.id = 'select-espacio';
  select.style.padding = '10px';
  select.style.border = '1px solid #dcdcdc';
  select.style.borderRadius = '6px';
  select.style.fontSize = '0.95rem';
  select.style.backgroundColor = '#ffffff';
  select.style.fontFamily = 'inherit';
  select.style.cursor = 'pointer';
  select.style.width = '100%';
  
  // Agregar opciones
  for (let key in EspaciosData) {
    if (EspaciosData.hasOwnProperty(key)) {
      let option = document.createElement('option');
      option.value = key;
      option.innerText = key;
      select.appendChild(option);
    }
  }
  
  // Cambiar valores del formulario y actualizar el canvas al seleccionar un espacio
  select.onchange = function() {
    let espacioSeleccionado = EspaciosData[select.value];
    if (espacioSeleccionado) {
      document.getElementById('input-nombre-espacio').value = select.value;
      document.getElementById('inputReferente').value = (espacioSeleccionado.Referente || []).join(', ');
      document.getElementById('input-actividades').value = (espacioSeleccionado.Actividades || []).join('\n');
      document.getElementById('input-artistas').value = (espacioSeleccionado.Artistas || []).join('\n');
      document.getElementById('input-horarios').value = (espacioSeleccionado.Horarios || espacioSeleccionado.Horario || []).join('\n');
      document.getElementById('input-direccion').value = (espacioSeleccionado.Dirección || espacioSeleccionado.Direccion || []).join('\n');
      
      // Actualizar objeto global Data
      Data.NombreEspacio = select.value;
      DataReferente = espacioSeleccionadoReferente || [];
      Data.Actividades = (espacioSeleccionado.Actividades || []).map(s => s.trim()).filter(s => s !== '');
      Data.Artistas = (espacioSeleccionado.Artistas || []).map(s => s.trim()).filter(s => s !== '');
      
      let hrs = espacioSeleccionado.Horarios || espacioSeleccionado.Horario || [];
      if (Data.Horarios) Data.Horarios = hrs;
      if (Data.Horario) Data.Horario = hrs;
      
      let dirs = espacioSeleccionado.Dirección || espacioSeleccionado.Direccion || [];
      if (Data.Dirección) Data.Dirección = dirs;
      if (Data.Direccion) Data.Direccion = dirs;
      
      redraw();
    }
  };
  
  grupoSeleccion.appendChild(select);
  sidebar.appendChild(grupoSeleccion);

  // Función auxiliar para crear grupos de inputs de texto de una línea
  function crearGrupoInputText(labelTexto, id, valorInicial) {
    let grupo = document.createElement('div');
    grupo.className = 'form-group';
    
    let label = document.createElement('label');
    label.innerText = labelTexto;
    label.setAttribute('for', id);
    grupo.appendChild(label);
    
    let input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.value = valorInicial;
    input.style.padding = '10px';
    input.style.border = '1px solid #dcdcdc';
    input.style.borderRadius = '6px';
    input.style.fontSize = '0.95rem';
    input.style.fontFamily = 'inherit';
    input.style.backgroundColor = '#fafafa';
    input.onfocus = function() {
      input.style.backgroundColor = '#ffffff';
      input.style.borderColor = '#945a0c';
    };
    input.onblur = function() {
      input.style.backgroundColor = '#fafafa';
      input.style.borderColor = '#dcdcdc';
    };
    grupo.appendChild(input);
    
    return grupo;
  }

  // Función auxiliar para crear grupos de campos de entrada
  function crearGrupoTextarea(labelTexto, id, valorInicial) {
    let grupo = document.createElement('div');
    grupo.className = 'form-group';
    
    let label = document.createElement('label');
    label.innerText = labelTexto;
    label.setAttribute('for', id);
    grupo.appendChild(label);
    
    let textarea = document.createElement('textarea');
    textarea.id = id;
    textarea.value = valorInicial;
    grupo.appendChild(textarea);
    
    return grupo;
  }

  // Función auxiliar para crear campos de subida de archivo
  function crearGrupoArchivo(labelTexto, id) {
    let grupo = document.createElement('div');
    grupo.className = 'form-group';
    
    let label = document.createElement('label');
    label.innerText = labelTexto;
    label.setAttribute('for', id);
    grupo.appendChild(label);
    
    let input = document.createElement('input');
    input.type = 'file';
    input.id = id;
    input.accept = 'image/*';
    input.style.padding = '8px';
    input.style.border = '1px solid #dcdcdc';
    input.style.borderRadius = '6px';
    input.style.backgroundColor = '#fafafa';
    input.style.fontFamily = 'inherit';
    
    input.onchange = function(e) {
      let file = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        reader.onload = function(event) {
          loadImage(event.target.result, function(img) {
            LogoTaller = img;
            redraw();
          });
        };
        reader.readAsDataURL(file);
      }
    };
    
    grupo.appendChild(input);
    return grupo;
  }

  // Nombre del Espacio
  let grupoNombre = crearGrupoInputText('Nombre del Espacio', 'input-nombre-espacio', Data.NombreEspacio || '');
  sidebar.appendChild(grupoNombre);

  //Referente
  let coorValor = (Data.Referente || []).join(', ');
  let grupReferente = crearGrupoInputText('Referente', 'inputReferente', coorValor);
  sidebar.appendChild(grupReferente);

  // Actividades
  let actValor = Data.Actividades ? Data.Actividades.join('\n') : '';
  let grupoActividades = crearGrupoTextarea('Actividades (coloque una por línea)', 'input-actividades', actValor);
  sidebar.appendChild(grupoActividades);

  // Artistas
  let artValor = Data.Artistas ? Data.Artistas.join('\n') : '';
  let grupoArtistas = crearGrupoTextarea('Artistas (uno por línea)', 'input-artistas', artValor);
  sidebar.appendChild(grupoArtistas);

  // Horarios
  let horValor = (Data.Horario || Data.Horarios || []).join('\n');
  let grupoHorarios = crearGrupoTextarea('Horarios (uno por línea)', 'input-horarios', horValor);
  sidebar.appendChild(grupoHorarios);

  // Dirección
  let dirValor = (Data.Dirección || Data.Direccion || []).join('\n');
  let grupoDireccion = crearGrupoTextarea('Dirección (una por línea)', 'input-direccion', dirValor);
  sidebar.appendChild(grupoDireccion);

  // Subir Logo Taller
  let grupoLogo = crearGrupoArchivo('Subir Logo Taller (Imagen)', 'input-logo-taller');
  sidebar.appendChild(grupoLogo);

  // Botón para regenerar cartel
  let boton = document.createElement('button');
  boton.className = 'btn-generate';
  boton.innerText = 'Generar Cartel';
  boton.onclick = function() {
    // Actualizar objeto Data
    Data.NombreEspacio = document.getElementById('input-nombre-espacio').value.trim();
    DataReferente = document.getElementById('input-Referente').value.split(',').map(s => s.trim()).filter(s => s !== '');
    Data.Actividades = document.getElementById('input-actividades').value.split('\n').map(s => s.trim()).filter(s => s !== '');
    Data.Artistas = document.getElementById('input-artistas').value.split('\n').map(s => s.trim()).filter(s => s !== '');
    
    let lineasHorarios = document.getElementById('input-horarios').value.split('\n').map(s => s.trim()).filter(s => s !== '');
    if (Data.Horarios) Data.Horarios = lineasHorarios;
    if (Data.Horario) Data.Horario = lineasHorarios;
    
    let lineasDireccion = document.getElementById('input-direccion').value.split('\n').map(s => s.trim()).filter(s => s !== '');
    if (Data.Dirección) Data.Dirección = lineasDireccion;
    if (Data.Direccion) Data.Direccion = lineasDireccion;

    // Ejecutar redibujado de p5.js
    redraw();
  };
  sidebar.appendChild(boton);

  // Botón para descargar cartel
  let botonDescargar = document.createElement('button');
  botonDescargar.className = 'btn-generate';
  botonDescargar.style.backgroundColor = '#1b7a43'; // Color verde premium para distinguir la descarga
  botonDescargar.style.boxShadow = '0 4px 12px rgba(27, 122, 67, 0.2)';
  botonDescargar.style.marginTop = '10px';
  botonDescargar.innerText = 'Descargar Cartel (PNG)';
  botonDescargar.onclick = function() {
    saveCanvas('cartel_recorrido', 'png');
  };
  sidebar.appendChild(botonDescargar);

  // Añadir al cuerpo de la página
  document.body.appendChild(sidebar);
}

