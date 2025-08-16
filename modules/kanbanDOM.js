// modules/kanbanDOM.js

// j’importe sauvegarderDonnees depuis localStorage.js,
// ce qui me permet de conserver les données à chaque modification.
import { sauvegarderDonnees } from "./localStorage.js";

//la fonction principale contient deux paramètres :
//- listeObj = nom de la liste et taches
//- tableauKanban = l'ensemble des listes nécessaires pour la sauvegarde
export function creerListe(listeObj, tableauKanban) {
  //je récupère l'élment principal avec la classe .kanban
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
    default:
      divListe.classList.add("col-nouvelle");
      /* RAPPEL : "default" dans le switch = "Une clause exécutée si aucune correspondance
       n'est trouvée avec les clause case (et/ou s'il n'y a pas de break pour les clauses case précédentes"*/
      break;
  }

  //je crée un conteneur "enteteListe" qui me permet d'avoir titre et bouton cote à cote
  const enteteListe = document.createElement("div");
  enteteListe.classList.add("entete-liste");

  //je crée un titre pour le nom de la liste (nom de la colonne)
  const titre = document.createElement("h2");
  titre.textContent = listeObj.nomListe;

  //je construis mon bouton de suppression puis...
  const btnSupprimerColonne = document.createElement("button");
  btnSupprimerColonne.textContent = "X";
  btnSupprimerColonne.classList.add("btn-supprimer-colonne");
  btnSupprimerColonne.title = "Supprimer la colonne";

  //le bouton va demander à l'utilisateur au click s'il veut supprimer la colonne et toutes ses taches
  btnSupprimerColonne.addEventListener("click", () => {
    if (
      /*RAPPEL confirm = fontion JS qui s'affiche sous forme de pop up
      et qui ne peut renvoyer que 2 valerus True ou False*/
      confirm(
        `Êtes-vous sûr de vouloir supprimer la colonne "${listeObj.nomListe}" et toutes ses tâches ?`
      )
    ) {
      //l'utilisateur a cliqué oui on entre dans la condition
      // on recherche l'index de la colonne dans le tableau
      const indexColonne = tableauKanban.findIndex(
        (liste) => liste === listeObj
      );
      //puis je supprime la colonne du tableau
      tableauKanban.splice(indexColonne, 1);

      // puis je sauvegarde les données
      sauvegarderDonnees(tableauKanban);

      // puis je supprime la colonne du DOM
      divListe.remove();
    }
  });

  // j'ajoute le titre et le bouton à l'en-tête
  enteteListe.appendChild(titre);
  enteteListe.appendChild(btnSupprimerColonne);

  //je crée la zone qui contiendra chaque tâche sous forme de div 'enfants'
  const zonesTaches = document.createElement("div");
  zonesTaches.classList.add("zone-taches");
  divListe.appendChild(enteteListe);
  //MODIFIE divListe.appendChild(titre);
  divListe.appendChild(zonesTaches);
  // Ajout de la liste dans le kanban (le DOM)
  containerTableau.appendChild(divListe);

  //avec forEach je crée ma boucle pour parcourir et afficher les taches existantes dans le tableau
  listeObj.taches.forEach(function (nomTache, index) {
    //ici je vérifie que ma tache n'est pas vide ou uniquement des espaces avec trim
    if (nomTache.trim() !== "") {
      //Rappel : la méthode trim() permet de retirer les blancs en début et fin de chaîne
      const divTache = document.createElement("div");
      divTache.classList.add("tache");
      //  divTache.textContent = nomTache;
      zonesTaches.appendChild(divTache);

      //je crée un span pour séparer le texte du bouton
      const texteTache = document.createElement("span");
      texteTache.textContent = nomTache;
      divTache.appendChild(texteTache);

      //je crée le bouton de suppression de la tache
      const btnSupprimer = document.createElement("button");
      btnSupprimer.textContent = "X";
      btnSupprimer.classList.add("btn-supprimer");
      divTache.appendChild(btnSupprimer);

      //j'ajoute l'écouteur d'évenément en utilisant la méthode splice = car tableau
      //puis je sauvegarde et 'remove' la div du DOM
      btnSupprimer.addEventListener("click", () => {
        listeObj.taches.splice(index, 1);
        sauvegarderDonnees(tableauKanban);
        divTache.remove();
      });
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

  //création de l'événement pour ajouter une tache avec 'click'
  boutonAjouter.addEventListener("click", function () {
    const nomTache = inputTache.value.trim();
    if (nomTache !== "") {
      //si tache non vide alors...
      //...je crée une nouvelle tâche dans le DOM...
      const divTache = document.createElement("div");
      divTache.classList.add("tache");
      // divTache.textContent = nomTache;
      zonesTaches.appendChild(divTache);

      //...j'ajoute la tâche au tableau kanban avec la méthode push puis...
      listeObj.taches.push(nomTache);

      const texteTache = document.createElement("span");
      texteTache.textContent = nomTache;
      divTache.appendChild(texteTache);
      //...j'ajoute le bouton de suppression...
      const btnSupprimer = document.createElement("button");
      btnSupprimer.textContent = "X";
      btnSupprimer.classList.add("btn-supprimer");

      btnSupprimer.addEventListener("click", () => {
        const index = listeObj.taches.indexOf(nomTache);
        //RAPPEL : La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau.
        // Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1. index > - 1 = la tache existe dans le tableau
        if (index > -1) {
          listeObj.taches.splice(index, 1);
          sauvegarderDonnees(tableauKanban);
          divTache.remove();
        }
      });
      divTache.appendChild(btnSupprimer);

      //...je sauvegarde les données...
      sauvegarderDonnees(tableauKanban);

      //...puis je vide le champ input
      inputTache.value = "";
    }
  });

  divListe.appendChild(inputTache);
  divListe.appendChild(boutonAjouter);
}
