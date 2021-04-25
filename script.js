
var currentSection = "viande";

//Affiche la section courante 
function affiche(id){
	
	if(id != currentSection){
		//Cacher l'ancienne section courante
		document.getElementById(currentSection).classList.toggle("currentSection");
		document.getElementById(currentSection).classList.toggle("ignoreSection");
		
		//Afficher la nouvelle section courante
		currentSection = id;
		document.getElementById(id).classList.toggle("ignoreSection");
		document.getElementById(id).classList.toggle("currentSection");

		//Update du placeholder de la barre de recherche
		document.getElementById("barreSearch").placeholder = "Recherchez "+ ((id == "viande") ? "une " : "un ") + id;
	}
}