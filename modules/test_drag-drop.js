/*
La logique du Drag & Drop
    dragstart → je note quelle tâche je prends et de quelle colonne elle vient
    dragover → je permets à la souris de passer au-dessus d'une zone pour drop
    drop → je déplace la tâche dans le DOM et je mets à jour le tableau de données
    dragend → je nettoie les variables temporaires
*/

//import { sauvegarderDonnees } from "./localStorage.js";

export function activerDragDrop(tableauKanban) {
  let carteEnCours = null; // =la carte HTML qui est en train d'âtre déplacée
  let colonneSource = null; // = la colonne HTML d'où vient la carte

  const toutesLesCartes = document.querySelectorAll(".tache");
  toutesLesCartes.forEach(function (carte) {
    carte.draggable = true;
    //ESSAI navigation au clavier
    carte.setAttribute("tabindex", "0"); // rend l'élément focusé au clavier
    carte.setAttribute("role", "listitem");
    carte.setAttribute("aria-grabbed", "false");

    carte.addEventListener("dragstart", function () {
      carteEnCours = carte;
      colonneSource = carte.closest(".liste");
    });
  });
  const toutesLesZones = document.querySelectorAll(".zone-taches");
  toutesLesZones.forEach(function (zone) {
    zone.addEventListener("dragover", function (event) {
      event.preventDefault();
    });
    zone.addEventListener("drop", function () {
      const colonneDestination = zone.closest(".liste");
      zone.appendChild(carteEnCours);

      const texteTache = carteEnCours.querySelector("span").textContent;

      const colSource = tableauKanban.find(function (liste) {
        return liste.nomListe === colonneSource.querySelector("h2").textContent;
      });

      const colDestination = tableauKanban.find(function (liste) {
        return (
          liste.nomListe === colonneDestination.querySelector("h2").textContent
        );
      });
      colSource.taches = colSource.taches.filter(function (tache) {
        return tache !== texteTache; // Garde tout sauf la tâche déplacée
      });
      colDestination.taches.push(texteTache);
      sauvegarderDonnees(tableauKanban);
    });
  });
}
