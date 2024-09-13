 # Projet d'extension de navigateur
Ce projet a été réalisé par **Julien**, **Elodie** et **Nathan** dans le cadre de notre formation à **Ada Tech School** à Nantes.

## Description du projet
Nous souhaitions réaliser une extension Chrome nous permettant de remplacer la Home Page de Google Chrome par un dashboard, comprenant une todo list, codée depuis la phase initiale en TypeScript et utilisant le local storage de Chrome, et différentes informations (météo avec une API, heure, date et calendrier à l'aide d'un composant, et une barre de recherche).

### Technologies utilisées
- **HTML** : structure et lien entre les différents fichiers
- **CSS** : mise en forme des blocs, design
- **TypeScript** : fonctionnalités
- **moment** : librairie utilisée notamment pour le calendrier

### Difficultés rencontrées et potentielles améliorations
- Intégration d'une to-do list from scratch : cet élément aurait été plus simple à intégrer en travaillant avec un framework.
- Intégration du calendrier : le calendrier intégré est un composant, qu'il a fallu comprendre et adapter à notre besoin. Nous avons dû également travailler sur le fichier CSS relié à ce calendrier.
- Accessibilité peu présente : la sémantique HTML pourrait être mieux respectée, et les contrastes de couleurs également.
- Enregistrement du statut des tâches de la to-do list : notre to-do list est actuellement stockée dans le local storage sous forme de tableau, il faudrait que nous puissions la stocker sous forme de tableau d'objets.

## Installation, lancement, et utilisation
1. Clonez ce repo sur votre machine, cela créera un dossier à l'endroit sélectionné
```
git clone https://github.com/nathanc8/FocusPage.git
```
2. Depuis le terminal, rendez vous dans le répertoire créé et exécutez ces commandes
```
npm install --save-dev webpack webpack-cli ts-loader webpack-dev-server typescript
npm run build
```
3. Sur Chrome, allez à l'adresse `chrome://extensions/`, activez l'option "Mode développeur" et sélectionnez "Chargez l'extension non empaquetée"
4. Sélectionnez le dossier que vous avez créé.

## Usage
Vous pouvez désormais naviguer comme d'habitude sur votre navigateur, mais aurez une nouvelle page à la place de la home page (ouverture d'un nouvel onglet, d'une nouvelle fenêtre).

## Contributeurs
- **Julien** : [Profil GitHub](https://github.com/Julien8387)
- **Elodie** : [Profil GitHub](https://github.com/ElodieGuyard)
- **Nathan** : [Profil GitHub](https://github.com/nathanc8)
