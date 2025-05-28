// script.js
// Ce fichier contient la logique JavaScript pour les animations et interactions de l'application.

// Fonction pour mélanger les éléments d'un tableau grâce à random()
// Utilisée pour randomiser l'ordre des animations des barres de compétences.
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

// Initialisation des animations des barres de compétences
// Chaque barre est associée à une animation unique basée sur sa catégorie.
const sliderCount = 30; // Nombre total de barres de compétences
const randomOrder = shuffle(Array.from({ length: sliderCount }, (_, i) => i));

for (let i = 0; i < sliderCount; i++) {
  const slider = document.getElementById(`slider-${i}`);
  slider.style.setProperty("--i", randomOrder[i]);
}

// Définition des couleurs pour chaque catégorie de compétences
const colors = {
  "Front-end": "#ff7f7f",
  "Back-end": "#6699cc",
  "BDD": "#ffa64d",
  "Other": "#a052a0",
};

// Application des animations et des couleurs à chaque barre de compétences
for (let i = 0; i < sliderCount; i++) {
  const slider = document.getElementById(`slider-${i}`);
  const category = slider.getAttribute("data-category");
  const finalColor = colors[category];

  // Définir les animations keyframes pour chaque barre
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
}`;

  // Ajouter l'animation à la page
  const style = document.createElement("style");
  style.innerHTML = animationCSS;
  document.head.appendChild(style);

  // Définir la couleur finale et le nom de l'animation pour la barre
  slider.style.setProperty('--final-color', finalColor);
  slider.style.setProperty('--animation-name', `animate_${i}`);
}

// Fonction pour mettre à jour l'affichage des barres de compétences
// Affiche uniquement les barres correspondant à la catégorie sélectionnée.
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

  // Afficher les 5 colonnes principales pour la catégorie sélectionnée
  let count = 0;
  columns.forEach((column) => {
    const slider = column.querySelector(".slider");
    const category = slider.getAttribute("data-category");

    // Supprimer les classes précédentes de tous les titres
    const title = column.querySelector('.title');
    title.classList.remove('gold', 'silver', 'bronze');

    if (category === selectedCategory && count < 5) {
      column.style.display = "block";
      count++;

      // Mettre en surbrillance les 3 meilleures compétences avec des couleurs différentes
      if (count === 1) {
        title.classList.add('gold');
      } else if (count === 2) {
        title.classList.add('silver');
      } else if (count === 3) {
        title.classList.add('bronze');
      }
    } else {
      column.style.display = "none";
    }
  });
}

updateDisplay();

// Lorsque le menu des boutons radio est modifié, la catégorie est mise à jour via la fonction updateDisplay
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", updateDisplay);
});

// Fonction pour réinitialiser les animations des barres de compétences
// Remélange les colonnes pour redémarrer les animations.
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

// Intervalle pour démontrer la réinitialisation des animations
setInterval(() => {
  reinitialisation_tubes_compétences();
  console.log("Animation réinitialisée");
}, 8000);
