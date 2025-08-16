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
  //Rappel : JSON.stingify = prend un objet ou tableau JavaScript et le transforme en chaîne de caractères JSON
  //le localStorage ne peut contenir que des chaines de caractère, stings
}

//charger les données depuis le localStorage
export function chargerDonnees() {
  return JSON.parse(localStorage.getItem("tableauKanban")) || [];
  //le pendant de JSON.stringify : JSON.parse = prend une chaîne JSON et la transforme de nouveau en objet ou tableau JavaScript.
  //si jamais il n’y a rien dans localStorage || [] permet de retourner un tableau vide plutôt que null
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
