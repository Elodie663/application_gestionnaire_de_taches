// modules/localStorage.js
/* 
Le localStorage fonctionne comme un dictionnaire clé-valeur :
 Le LocalStorage est une zone de stockage intégrée aux navigateurs web :
- permet de sauvegarder des données côté client.
- les données sont persistantes (restent après fermeture de l’onglet ou du navigateur).
- accessible via l’objet global localStorage en JavaScript.
*/

//enregistrer les données dans le localStorage
export function sauvegarderDonnees(tableauKanban) {
  localStorage.setItem("tableauKanban", JSON.stringify(tableauKanban));
}

//charger les données depuis le localStorage
export function chargerDonnees() {
  return JSON.parse(localStorage.getItem("tableauKanban")) || [];
}

/*********************************************************************** */
/*ESSAI qui a fait planter le DOM
export function chargerDonnees() {
  let tableauKanban = JSON.parse(localStorage.getItem("tableauKanban")) || [];
  tableauKanban.forEach((liste) => creerListe(liste, tableauKanban));
  return tableauKanban;
}*/

//********************************************************************** */
//constante => clé unique pour identifier les données dans le localStorage
//const storage_key = "kanbanData";

/*
export function chargerDonnees() {
  const data = localStorage.getItem(storage_key);
  return data ? JSON.parse(data) : null;
}*/
/*fonction plus modulaire car elle ne dépend pas de la fonction Liste du DOM et elle retourne les données et valeur null s'il n'y a pas de données */
