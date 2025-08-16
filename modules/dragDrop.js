/*
La logique du Drag & Drop
    dragstart → je note quelle tâche je prends et de quelle colonne elle vient
    dragover → je permets à la souris de passer au-dessus d'une zone pour drop
    drop → je déplace la tâche dans le DOM et je mets à jour le tableau de données
    dragend → je nettoie les variables temporaires
*/

import { sauvegarderDonnees } from "./localStorage.js";

export function activerDragDrop(tableauKanban) {
  // ici je déclare mes variables globales pour stocker les informations pendant le déplacement
  let carteEnCours = null; // =la carte HTML qui est en train d'âtre déplacée
  let colonneSource = null; // = la colonne HTML d'où vient la carte

  // Première étape : rendre toutes les cartes déplaçables "dragables"

  // je récupère toutes les cartes de mon tableau étant .tache
  const toutesLesCartes = document.querySelectorAll(".tache");

  // je parcours les cartes avec forEach puis...
  toutesLesCartes.forEach(function (carte) {
    // je dis au navigateur que cette carte peut être déplacée avec carte.draggable = true
    carte.draggable = true;

    // je créé l'événement DRAGDSTART qui se déclenche quand on commence à déplacer la carte
    carte.addEventListener("dragstart", function () {
      // On sauvegarde quelle carte on déplace
      carteEnCours = carte;
      // On sauvegarde de quelle colonne elle vient (.closest remonte jusqu'au parent .liste)
      colonneSource = carte.closest(".liste");
      //RAPPEL : closest méthode JS qui remonte jusqu'au parent de la tache,ici la colonne de départ
    });
  });

  // deuxième étape : préprarer lz zone de dépôt

  // je récupère toutes les zones où on peut déposer une carte
  const toutesLesZones = document.querySelectorAll(".zone-taches");

  // je parcours avec forEach chaque zone de dépôt
  toutesLesZones.forEach(function (zone) {
    // je crée l'événement DRAGOVER qui se déclenche quand on survole une zone avec la carte
    zone.addEventListener("dragover", function (event) {
      // ATTENTION c'est OBLIGATOIRE : on annule le comportement par défaut du navigateur, sinon le navigateur refuse le drop
      event.preventDefault();
    });

    // je crée l'événement DROP qui se déclenche quand on lâche la carte dans la zone
    zone.addEventListener("drop", function () {
      // première partie = déplacement visuel de l'utilisateur

      // je trouve dans quelle colonne la carte a été déposée puis...
      const colonneDestination = zone.closest(".liste");
      // j'ajoute visuellement la carte dans cette nouvelle zone
      zone.appendChild(carteEnCours);

      //deuxième partie = mettre à jour les données

      // je récupère le texte de la carte (une sorte d'ID unique qui identifie la carte)
      const texteTache = carteEnCours.querySelector("span").textContent;

      // je trouve l'objet colonne source dans notre tableau de données puis...
      // ...je compare le titre H2 de la colonne HTML avec "nomListe" dans les données
      const colSource = tableauKanban.find(function (liste) {
        return liste.nomListe === colonneSource.querySelector("h2").textContent;
      });

      //idem pour la colonne destination
      const colDestination = tableauKanban.find(function (liste) {
        return (
          liste.nomListe === colonneDestination.querySelector("h2").textContent
        );
      });

      //troisième partie = déplacement dans les données

      // Ici je retire la tâche de l'ancienne colonne et filter() garde tous les éléments sauf celui que je cherche
      colSource.taches = colSource.taches.filter(function (tache) {
        return tache !== texteTache; // Garde tout sauf la tâche déplacée
      });

      // j'ajoute la tâche dans la nouvelle colonne
      colDestination.taches.push(texteTache);

      //quatrième et dernière partie = la sauvegarde

      // sauvegarde du tableau modifié (module localStorage)
      sauvegarderDonnees(tableauKanban);
    });
  });
}
