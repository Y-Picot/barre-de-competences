// script.js

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

const sliderCount = 5;
const randomOrder = shuffle(Array.from({ length: sliderCount }, (_, i) => i));

for (let i = 0; i < sliderCount; i++) {
    const slider = document.getElementById(`slider-${i}`);
    slider.style.setProperty("--i", randomOrder[i]);
}

const colors = {
    "Front-end": "#0066ff",
    "Back-end": "#00cc99",
    "Design": "#ff9933",
    "Autre": "#ff3399",
};

for (let i = 0; i < sliderCount; i++) {
    const slider = document.getElementById(`slider-${i}`);
    const category = slider.getAttribute("data-category");
    const finalColor = colors[category];


    // Modifier l'animation pour inclure les changements de couleur et la couleur finale
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