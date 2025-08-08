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

//console.log(tableauKanban);
// Fonction qui crée une liste dans le DOM à partir d’un objet liste

function creerListe(listeObj) {
  const containerTableau = document.querySelector(".kanban");

  //je crée le conteneur principale de la liste avec une div
  const divListe = document.createElement("div");
  divListe.classList.add("liste");

  //j'utilise switch pour appliquer une classe différente dans mon CSS
  switch (listeObj.nomListe) {
    case "À faire":
      divListe.classList.add("col-a-faire");
      break;
    case "En cours":
      divListe.classList.add("col-en-cours");
      break;
    case "Terminé":
      divListe.classList.add("col-terminé");
      break;
    case "Approuvé":
      divListe.classList.add("col-approuve");
      break;
  }

  //je crée un titre pour le nom de la liste (nom de la colonne)
  const titre = document.createElement("h2");
  titre.textContent = listeObj.nomListe;

  //je crée la zone qui contiendra chaque tâche
  const zonesTaches = document.createElement("div");
  zonesTaches.classList.add("zone-taches");

  divListe.appendChild(titre);
  divListe.appendChild(zonesTaches);
  // Ajout de la liste dans le kanban (le DOM)
  containerTableau.appendChild(divListe);

  //je crée ma boucle pour parcourir le tableau avec forEach
  listeObj.taches.forEach(function (nomTache) {
    if (nomTache.trim() !== "") {
      //Rappel : la méthode trim() permet de retirer les blancs en début et fin de chaîne
      const divTache = document.createElement("div");
      divTache.classList.add("tache");
      divTache.textContent = nomTache;
      zonesTaches.appendChild(divTache);
    }
  });
  //je crée mon champ de saisie 'input' pour les nouvelles taches
  const inputTache = document.createElement("input");
  inputTache.type = "text";
  inputTache.placeholder = "Nouvelle carte";
  inputTache.classList.add("input-tache");

  //je crée le bouton pour ajouter la tache
  const boutonAjouter = document.createElement("button");
  boutonAjouter.textContent = "Ajouter la nouvelle tâche";
  boutonAjouter.classList.add("btn-ajouter-tache");

  //création de l'événement 'click'
  boutonAjouter.addEventListener("click", function () {
    const nomTache = inputTache.value.trim();
    if (nomTache !== "") {
      //créer une nouvelle tâche dans le DOM
      const divTache = document.createElement("div");
      divTache.classList.add("tache");
      divTache.textContent = nomTache;
      zonesTaches.appendChild(divTache);

      //j'ajoute la tâche au tableau kanban avec la méthode. push
      listeObj.taches.push(nomTache);

      //sauvegarde dans le LocalStorage
      sauvegarderDonnees();

      //vider le champ input
      inputTache.value = "";
    }
  });

  divListe.appendChild(inputTache);
  divListe.appendChild(boutonAjouter);
}
//console.log("Création de la liste :", listeObj.nomListe);
// Affichage initial de toutes les listes :
tableauKanban.forEach(function (liste) {
  creerListe(liste);
});
