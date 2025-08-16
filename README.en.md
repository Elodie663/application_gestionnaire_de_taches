[Read in English]

## task_manager_application

Link to Trello board: https://trello.com/invite/b/68938b7ef20afa1a8ed0cb66/ATTIc126b6cd01361edce2655edbdc12d0c39C6C1AD2/application-gestionnaire-de-taches

Project: Kanban To-Do List application

## Description

This web application allows you to create and manage a task board (Kanban type) with lists and cards that can be moved around.

Main required features:

- Dynamic creation of lists and tasks
- Drag and drop tasks between lists
- Automatic data backup in the browser (LocalStorage)
- Deletion of lists and tasks

## Technical operation (updated on 2025-08-16)

index.html is the project's entry point: a minimal file containing the basic structure and linking the JavaScript.

script.js is the entry point that initialises the application by importing the various modules.

The application is based on three separate JavaScript modules:

    kanbanDOM.js: manages the entire user interface (column creation, task display, add and delete buttons).

    localStorage.js: centralises data saving and loading via the browser's localStorage API (data persists even after the page is reloaded).

    dragDrop.js: activates the drag-and-drop system (HTML5 Drag & Drop) to allow tasks to be moved between columns, while updating and saving the data.

The core of the project is a JavaScript object called tableauKanban. This is an array of objects where each object represents a column.

## Technologies

- HTML5
- CSS
- JavaScript
- DOM API (dynamic HTML manipulation)
- Web Storage API: localStorage
- HTML Drag and Drop API

## Project tree at the start of the project.

├── index.html
├── style.css
├── script.js
└── README.md

# Directory structure updated on 2025-08-08

Added localStorage, kanbanDOM and dragDrop modules to separate the code:

│
├── index.html
├── style.css
├── script.js  
│
├── localStorage.js  
├── kanbanDOM.js  
└── dragDrop.js

## Project completed as part of BeWeb's web and mobile developer training programme (class of 2025-2026)

Elodie Molières
