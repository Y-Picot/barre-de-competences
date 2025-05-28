# Application de Barre de Compétences

Ce projet est une interface interactive permettant de visualiser et de trier des compétences par catégories. Les compétences sont affichées sous forme de jauges animées.

## Fonctionnalités

- Affichage des compétences par catégories (Front-end, Back-end, Base de Données, Autres).
- Animation des jauges pour représenter le niveau de compétence.
- Tri automatique des compétences par niveau.

## Installation

1. Clonez ce repository :
   ```bash
   git clone https://github.com/Y-Picot/barre-de-competences.git
   ```
2. Accédez au dossier du projet :
   ```bash
   cd barre-de-competences
   ```
3. Ouvrez le fichier `index.html` dans votre navigateur pour voir le projet en action.

## Structure du projet

- `index.html` : Contient la structure HTML principale de l'application.
- `style.css` : Contient les styles pour l'interface utilisateur.
- `script.js` : Contient la logique JavaScript pour les animations et interactions.

## Conventions de nommage

- **HTML** : Les noms des classes, IDs et attributs de données (comme `data-category`) doivent être en anglais pour respecter les normes de développement.
- **CSS** : Utilisez des noms de classes en anglais et suivez la méthodologie BEM (Block Element Modifier).
- **JavaScript** : Les noms des variables et des fonctions doivent être en camelCase.
- **Attributs `data-category`** : Les valeurs possibles sont :
  - `Front-end`
  - `Back-end`
  - `BDD` (Base de Données)
  - `Other` (Autres)

## Contraintes

- **Numérotation des IDs** : Les IDs des sliders doivent être numérotés de manière séquentielle pour garantir le bon fonctionnement des animations et des interactions.
- **Correspondance des catégories** : Les catégories des compétences doivent correspondre aux clés définies dans l'objet `colors` du fichier `script.js`.

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre les étapes suivantes :

1. Forkez ce repository.
2. Créez une branche pour votre fonctionnalité ou correction de bug :
   ```bash
   git checkout -b ma-nouvelle-fonctionnalite
   ```
3. Faites vos modifications et committez-les :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Poussez vos modifications :
   ```bash
   git push origin ma-nouvelle-fonctionnalite
   ```
5. Créez une Pull Request.

## Origine du projet

Ce projet a été réadapté de deux code open source disponible à l'URL suivante : [uiverse.io/Nawsome/brave-turtle-26](https://uiverse.io/Nawsome/brave-turtle-26) et [uiverse.io/Yaya12085/orange-eagle-19](https://uiverse.io/Yaya12085/orange-eagle-19). 

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.
