
const welcomeScreen = document.getElementById("welcome-screen");
const journeyScreen = document.getElementById("journey-screen");
const productScreen = document.getElementById("product-screen");

const cacaoButton = document.getElementById("cacao-button");
const spanishButton = document.getElementById("spanish-button");
const englishButton = document.getElementById("english-button");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const stageCounter = document.getElementById("stage-counter");
const stageNumber = document.getElementById("stage-number");
const stageVisual = document.getElementById("stage-visual");
const stageTitle = document.getElementById("stage-title");
const stageDescription = document.getElementById("stage-description");
const progressBar = document.getElementById("progress-bar");

let currentLanguage = "es";
let currentStage = 0;

const translations = {
  es: {
    brand: "CIAGUA LAB",
    mainTitle: "Del Árbol a la Barra",
    touchHint: "Toca el árbol para descubrir su recorrido",
    journeyLabel: "EL RECORRIDO",
    stageLabel: "ETAPA",
    of: "DE",
    previous: "Anterior",
    next: "Siguiente etapa",
    finish: "Ver producto final",
    productLabel: "EL FINAL DEL RECORRIDO",
    productTitle: "El resultado: chocolate con identidad",
    productDescription: "Cada barra cuenta una historia. Desde su origen hasta su elaboración, buscamos crear chocolates de especialidad que reflejen la riqueza del cacao panameño, con calidad, trazabilidad e identidad propia.",
    restart: "Volver al inicio",
    stages: [
      {
        title: "El origen de nuestro grano",
        images: [
            "assets/images/origen-1.jpg",
            "assets/images/origen-2.jpg"
        ],        
        description:
          "Nuestro cacao proviene de cultivos ubicados en la Cuenca Hidrográfica del Canal de Panamá, Capira, Coclé y Colón. Buscamos asegurar la trazabilidad desde el origen del grano hasta la barra de chocolate, valorando el trabajo de los productores y promoviendo prácticas que contribuyan a la conservación de la biodiversidad."
      },
      {
         title: "Selección de nuestro cacao",
        images: [
            "assets/images/seleccion1.jpg",
            "assets/images/seleccion2.jpg"
        ],               
        description:
          "La calidad comienza en el origen. Visitamos y evaluamos fincas productoras, conociendo de cerca sus cultivos y las características del cacao, para seleccionar granos con potencial para elaborar chocolate de especialidad."
      },
      {
        title: "El arte de la fermentación",
        images: [
            "assets/images/fermentacion.jpg"
        ],              
        description:
          "Durante la fermentación, los microorganismos transforman los azúcares de la pulpa del cacao, iniciando el desarrollo de aromas y sabores. Trabajamos de la mano con los productores para explorar perfiles sensoriales únicos."
      },
      {
        title: "Secado: preservando la calidad",
        images: [
            "assets/images/poscosecha1.jpg",
            "assets/images/poscosecha2.jpg"
        ],           
        description:
          "Cada detalle cuenta. En colaboración con los productores, trabajamos en mejorar las prácticas de secado para conservar la calidad del grano, reducir la humedad y preservar los aromas y sabores desarrollados durante la fermentación."
      },
      {
        title: "Evaluación de calidad",
        images: [
            "assets/images/evaluacion1.jpg",
            "assets/images/evaluacion2.jpg"
        ],             
        description:
          "La calidad se descubre en cada grano. Mediante análisis físicos y sensoriales, evaluamos las características del cacao para identificar su potencial y los perfiles de aroma y sabor que lo hacen único."
      },
      {
        title: "Del grano al chocolate",
        images: [
            "assets/images/grano1.jpg",
            "assets/images/grano2.jpg"
        ],             
        description:
          "La ciencia y la técnica se unen para transformar el cacao. A través del tostado, la molienda y el refinado, convertimos granos cuidadosamente seleccionados en chocolate de alta calidad, dando valor a cada etapa del proceso."
      }
    ]
  },

  en: {
    brand: "CIAGUA LAB",
    mainTitle: "From Tree to Bar",
    touchHint: "Tap the cacao tree to discover its journey",
    journeyLabel: "THE JOURNEY",
    stageLabel: "STAGE",
    of: "OF",
    previous: "Previous",
    next: "Next stage",
    finish: "See the final product",
    productLabel: "THE END OF THE JOURNEY",
    productTitle: "From cacao to chocolate",
    productDescription:
      "Science and the work of our producers transform cacao into quality chocolate, adding value at every stage of the process.",
    restart: "Back to start",
    stages: [
      {
        title: "The Origin of Our Bean",
        images: [
            "assets/images/origen-1.jpg",
            "assets/images/origen-2.jpg"
        ],                
        description:
          "Our cacao is sourced from growing areas in the Panama Canal Watershed, Capira, Coclé, and Colón. We aim to ensure traceability from bean origin to chocolate bar, recognizing the work of local producers and promoting practices that contribute to biodiversity conservation."
      },
      {
        title: "Selecting Our Cacao",
        images: [
            "assets/images/seleccion1.jpg",
            "assets/images/seleccion2.jpg"
        ],                    
        description:
          "Quality begins at the source. We visit and evaluate cacao farms, exploring their growing practices and the characteristics of their cacao to select beans with the potential to become specialty chocolate."
      },
      {
        title: "The Art of Fermentation",
        images: [
            "assets/images/fermentacion.jpg"
        ],                      
        description:
          "During fermentation, microorganisms transform the sugars in cacao pulp, initiating the development of aromas and flavors. We work hand in hand with producers to explore unique sensory profiles."
      },
      {
        title: "Drying: Preserving Quality",
        images: [
            "assets/images/poscosecha1.jpg",
            "assets/images/poscosecha2.jpg"
        ],                   
        description:
          "Every detail matters. In collaboration with producers, we work to improve drying practices to maintain bean quality, reduce moisture, and preserve the aromas and flavors developed during fermentation."
      },
      {
        title: "Quality Assessment",
        images: [
            "assets/images/evaluacion1.jpg",
            "assets/images/evaluacion2.jpg"
        ],                  
        description:
          "Quality is revealed in every bean. Through physical and sensory assessments, we explore cacao characteristics to identify its potential and the distinctive aroma and flavor profiles that make it unique."
      },
      {
        title: "From Bean to Chocolate",
        images: [
            "assets/images/grano1.jpg",
            "assets/images/grano2.jpg"
        ],                     
        description:
          "Science and craftsmanship come together to transform cacao. Through roasting, grinding, and refining, we turn carefully selected beans into high-quality chocolate, adding value at every stage of the process."
      }
    ]
  }
};

// Mostrar una pantalla y ocultar las demás.
function showScreen(screenToShow) {
  welcomeScreen.hidden = true;
  journeyScreen.hidden = true;
  productScreen.hidden = true;

  screenToShow.hidden = false;
}

// Actualizar todos los textos del idioma seleccionado.
function updateLanguage() {
  const text = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  document.getElementById("main-title").textContent = text.mainTitle;
  document.getElementById("touch-hint").textContent = text.touchHint;
  document.getElementById("journey-label").textContent = text.journeyLabel;
  document.getElementById("product-label").textContent = text.productLabel;
  document.getElementById("product-title").textContent = text.productTitle;
  document.getElementById("product-description").textContent =
    text.productDescription;

  spanishButton.classList.toggle("active", currentLanguage === "es");
  englishButton.classList.toggle("active", currentLanguage === "en");

  spanishButton.setAttribute(
    "aria-pressed",
    String(currentLanguage === "es")
  );

  englishButton.setAttribute(
    "aria-pressed",
    String(currentLanguage === "en")
  );

  updateStage();
}

// Actualizar el contenido de la etapa actual.
function updateStage() {
  const text = translations[currentLanguage];
  const stage = text.stages[currentStage];

  stageCounter.textContent =
    `${text.stageLabel} ${currentStage + 1} ${text.of} ${text.stages.length}`;

  stageNumber.textContent =
    String(currentStage + 1).padStart(2, "0");
    

    stageVisual.innerHTML = "";
    stageVisual.classList.remove("one-image", "three-images");

    const images = stage.images || [];

    if (images.length === 1) {
    stageVisual.classList.add("one-image");
    } else if (images.length === 3) {
    stageVisual.classList.add("three-images");
    }

    images.forEach((src, index) => {
    const image = document.createElement("img");

    image.src = src;
    image.alt = `Proceso del cacao, imagen ${index + 1}`;
    image.loading = "eager";

    stageVisual.appendChild(image);
    });
  stageTitle.textContent = stage.title;
  stageDescription.textContent = stage.description;

  progressBar.style.width =
    `${((currentStage + 1) / text.stages.length) * 100}%`;

  backButton.textContent = text.previous;
  backButton.disabled = currentStage === 0;

  nextButton.textContent =
    currentStage === text.stages.length - 1
      ? text.finish
      : text.next;

  restartButton.textContent = text.restart;
}

// Selección del idioma.
spanishButton.addEventListener("click", () => {
  currentLanguage = "es";
  updateLanguage();
});

englishButton.addEventListener("click", () => {
  currentLanguage = "en";
  updateLanguage();
});

// Tocar el cacao para comenzar el recorrido.
cacaoButton.addEventListener("click", () => {
  currentStage = 0;
  updateLanguage();
  showScreen(journeyScreen);
});

// Avanzar a la siguiente etapa o al producto final.
nextButton.addEventListener("click", () => {
  const totalStages = translations[currentLanguage].stages.length;

  if (currentStage < totalStages - 1) {
    currentStage++;
    updateStage();
  } else {
    showScreen(productScreen);
  }
});

// Regresar a la etapa anterior.
backButton.addEventListener("click", () => {
  if (currentStage > 0) {
    currentStage--;
    updateStage();
  }
});

// Volver a la pantalla inicial.
restartButton.addEventListener("click", () => {
  currentStage = 0;
  updateLanguage();
  showScreen(welcomeScreen);
});

// Inicializar la experiencia en español.
updateLanguage();
