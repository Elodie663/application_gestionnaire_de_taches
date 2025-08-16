## application_gestionnaire_de_taches

Lien vers tableau Trello : https://trello.com/invite/b/68938b7ef20afa1a8ed0cb66/ATTIc126b6cd01361edce2655edbdc12d0c39C6C1AD2/application-gestionnaire-de-taches

Projet : application Kanban To-Do-list

## Description

Cette application web permet de créer et gérer un tableau de tâches (type Kanban) avec des listes et des cartes qui peuvent être déplacées.

Fonctionnalités principales requises :

- Création dynamique de listes et de tâches
- Glisser-déposer (Drag & Drop) des tâches entre les listes
- Sauvegarde automatique des données dans le navigateur (LocalStorage)
- Suppression des listes et des tâches

## Fonctionnement technique (MAJ le 2025-08-16)

index.html est la vitrine du projet : un fichier minimaliste qui contient la structure de base et appelle le JavaScript.

script.js est le point d’entrée qui initialise l’application en important les différents modules.

L’application repose sur trois modules JavaScript bien séparés :

    kanbanDOM.js : gère toute la partie interface utilisateur (création des colonnes, affichage des tâches, boutons d’ajout et de suppression).

    localStorage.js : centralise la sauvegarde et le chargement des données via l’API localStorage du navigateur (les données persistent même après un rechargement de la page).

    dragDrop.js : active le système de glisser-déposer (Drag & Drop HTML5) pour permettre le déplacement des tâches entre colonnes, tout en mettant à jour les données et en les sauvegardant.

Le coeur du projet repose sur un objet JavaScript appelé tableauKanban. Il s’agit d’un tableau d’objets où chaque objet représente une colonne.

## Technologies

- HTML5
- CSS
- JavaScript
- DOM API (manipulation dynamique du HTML)
- Web Storage API : localStorage
- API HTML Drag and Drop

## Arborescence du projet au début du projet

.
├── index.html
├── style.css
├── script.js
└── README.md

# Mise à jour de l'arborescence le 2025-08-08

Ajout des modules localStorage, kanbanDOM et dragDrop pour séparer le code :

│
├── index.html
├── style.css
├── script.js  
│
├── localStorage.js  
├── kanbanDOM.js  
└── dragDrop.js

## Projet réalisé dans le cadre de la formation de développeur web et mobile de BeWeb (promo 2025-2026)

Elodie Molières
