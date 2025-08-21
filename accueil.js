// je sélectionne la page de la avec son ID div d'accueil
const accueil = document.querySelector(".accueil");

// je crée et affiche le message d'accueil
const titre = document.createElement("h1");
titre.textContent = "Bienvenue dans mon gestionnaire de tâches";
accueil.appendChild(titre);

// j'ajoute la date et l'heure
const date = document.createElement("p");
date.textContent = new Date().toLocaleDateString("fr-FR");
accueil.appendChild(date);

// j'ajoyute le bouton qui me permet d'accéder à mon kanban
const bouton = document.createElement("button");
bouton.textContent = "Accéder à mon tableau Kanban";
bouton.addEventListener("click", () => {
  window.location.href = "index.html"; // redirection vers le Kanban
});
accueil.appendChild(bouton);
