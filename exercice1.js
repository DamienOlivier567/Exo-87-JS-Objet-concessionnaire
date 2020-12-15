let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Contructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};

let nom = document.getElementById('nom');
nom.innerHTML = voiture.Nom;

let img = document.getElementById('img');
img.innerHTML = voiture.imgUrl;

let roues = document.getElementById('roues');
roues.innerHTML = voiture.nombresRoues;

let couleur = document.getElementById('couleurs');
couleur.innerHTML = voiture.Couleur;

let constructeur = document.getElementById('constructeur');
constructeur.innerHTML = voiture.Contructeur;

let carburant = document.getElementById('carburant');
carburant.innerHTML = voiture.Carburant;

let portes = document.getElementById('portes');
portes.innerHTML = voiture.nombresRoues;

let auto = document.getElementById('autonomie');
portes.innerHTML = voiture.Autonomie;

let vitesse = document.getElementById('max');
vitesse.innerHTML = voiture.vitesseMaxi;




