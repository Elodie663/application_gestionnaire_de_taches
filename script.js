// script.js
import { creerListe } from "./modules/kanbanDOM.js";
import { chargerDonnees, sauvegarderDonnees } from "./modules/localStorage.js";
import { activerDragDrop } from "./modules/dragDrop.js";

//on vérifie s'il y a des données à charger depuis le module localStorage
let tableauKanban = chargerDonnees();

if (tableauKanban.length === 0) {
  //si vide on récupère les données du tableau
  // tableau global pour définir les taches
  tableauKanban = [
    {
      nomListe: "À faire",
      taches: ["HTML", "Style CSS", "Script JS"],
    },
    {
      nomListe: "En cours",
      taches: ["paramétrer GitHub"],
    },
    {
      nomListe: "Terminé",
      taches: ["Valider la maquette"],
    },
    {
      nomListe: "Approuvé",
      taches: [""],
    },
  ];
}

tableauKanban.forEach((liste) => creerListe(liste, tableauKanban));
activerDragDrop(tableauKanban); //Drag & Drop doit être appelé 2 fois, au chargement du DOM et...(voir ligne 44)
//ici j'ajoute le code lié à la création de la nouvelle colonne, dans HTML : <button class="ajouter-colonne">Ajouter une carte</button>
document.querySelector(".ajouter-colonne").addEventListener("click", () => {
  const nomListe = prompt("Nom de la nouvelle colonne");
  if (nomListe && nomListe.trim() !== "") {
    tableauKanban.push({
      nomListe: nomListe.trim(),
      taches: [],
    });
    sauvegarderDonnees(tableauKanban); //obligatoire ici sinon la colonne disparait au moment où je rafraichis la page
    document.querySelector(".kanban").innerHTML = ""; // vide les anciennes listes
    tableauKanban.forEach((liste) => creerListe(liste, tableauKanban));
    activerDragDrop(tableauKanban); //et à fin des modifications éventuelles des colonnes, quand le tableau est recréé
  }
});
