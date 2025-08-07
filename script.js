let tableauKanban = [
  //tableau global pour définir les taches
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


function creerListe(listeObj) {
const containerTableau = document.querySelector(.kanban);

//je crée le conteneur principale de la liste avec une div
const divListe = document.createElement("div");
divListe.classList.add("liste")

}