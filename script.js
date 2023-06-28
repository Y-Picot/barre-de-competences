// script.js

// Mélange des élèments d'un array grâve à la fonction random()
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Fioles / Tubes affichage

const sliderCount = 22; // Nombre de sliders en tout !
const randomOrder = shuffle(Array.from({ length: sliderCount }, (_, i) => i));

for (let i = 0; i < sliderCount; i++) {
  const slider = document.getElementById(`slider-${i}`);
  slider.style.setProperty("--i", randomOrder[i]);
}

const colors = {
  "Front-end": "#ff7f7f",
  "Back-end": "#6699cc",
  "BDD": "#ffa64d",
  "Autres": "#a052a0",
};


for (let i = 0; i < sliderCount; i++) {
  const slider = document.getElementById(`slider-${i}`);
  const category = slider.getAttribute("data-category");
  const finalColor = colors[category];

  // Modification des couleurs tout au longs du remplissage des fioles jusqu'à la couleur finale
  const animationCSS = `
@keyframes animate_${i} {
  0% {
    transform: translateY(250px);
    background-color: #26e5f3;
  }
  33% {
    background-color: #b8f526;
  }
  66% {
    background-color: #f5268a;
  }
  100% {
    transform: translateY(0);
    background-color: ${finalColor};
  }
}
`;

  // Ajouter l'animation à la page
  const style = document.createElement("style");
  style.innerHTML = animationCSS;
  document.head.appendChild(style);

  // Récupération de la couleur de la catégories
  slider.style.setProperty('--final-color', finalColor);
  // Appliquer l'animation personnalisée à l'élément
  slider.style.setProperty('--animation-name', `animate_${i}`);
}

// Met à jour l'affichage des fioles celon leur data-category grâve à display flex ou none
function updateDisplay() {
  const selectedCategory = document.querySelector('input[type="radio"]:checked').getAttribute("data-category");
  const columns = Array.from(document.querySelectorAll(".column"));

  // Trier les colonnes en fonction du niveau de compétence
  columns.sort((a, b) => {
    const aSlider = a.querySelector(".slider");
    const aValue = parseInt(aSlider.style.getPropertyValue("--fill-level"));
    const bSlider = b.querySelector(".slider");
    const bValue = parseInt(bSlider.style.getPropertyValue("--fill-level"));

    return bValue - aValue;
  });

  // Affichage des 5 colonnes celon leur catégorie
  let count = 0;
  columns.forEach((column, index) => {
    const slider = column.querySelector(".slider");
    const category = slider.getAttribute("data-category");

    if (category === selectedCategory) {
      if (count < 5) {
        column.style.display = "flex";
        count++;
      } else {
        column.style.display = "none";
      }
    } else {
      column.style.display = "none";
    }
  });
}

updateDisplay();

// Dès que le menu radio bouton est changer alors la catégories changes via la fonction updateDisplay
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", updateDisplay);
});

// Redémarer l'animation
function reinitialisation_tubes_compétences() {
  // Mélanger les colonnes. C'est le mélange des colones qui fait que le reset d'animation est possibles ici.
  const selectedCategory = document.querySelector('input[type="radio"]:checked').getAttribute("data-category");
  const columns = Array.from(document.querySelectorAll(".column"));
  const shuffledColumns = shuffle(columns);

  const competences = document.querySelector(".competences");
  shuffledColumns.forEach(column => {
    const slider = column.querySelector(".slider");
    // Vérifier si la catégorie correspond à la catégorie sélectionnée
    if (slider.getAttribute("data-category") === selectedCategory) {
      competences.appendChild(column);
    }
  });
}

// Un interval qui démontre que l'animation peut-être réinitialiser à la autre part dans le code
setInterval(() => {
  reinitialisation_tubes_compétences();
  console.log("test");
}, 2500)
