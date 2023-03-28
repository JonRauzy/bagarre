// fonction qui créé la game et lance la fonction bagarre via onclick
function création(comb1, comb2) {
	var combienPV1 = comb1.pv;
	var combienPV2 = comb2.pv;
    
	var attack1 = comb1.attaque;
	var attack2 = comb2.attaque;
    
	let nom1 = document.querySelector("#nom1");
	let nom2 = document.querySelector("#nom2");
	let comb1pvstart = document.querySelector("#comb1-pv-start");
	let comb2pvstart = document.querySelector("#comb2-pv-start");
	let comb1attack = document.querySelector("#comb1-attack");
	let comb2attack = document.querySelector("#comb2-attack");
	let comb1pv = document.querySelector("#comb1-pv");
	let comb2pv = document.querySelector("#comb2-pv");
	let resultAffiche = document.querySelector(".resultAfiche");
    
	resultAffiche.innerHTML = "tapez vous";
    
	nom1.innerHTML = comb1.nom;
	nom2.innerHTML = comb2.nom;
    
	comb1attack.innerHTML = attack1;
	comb2attack.innerHTML = attack2;
    
	comb1pvstart.innerHTML = combienPV1;
	comb2pvstart.innerHTML = combienPV2;
    
	comb1pv.innerHTML = comb1.pv;
	comb2pv.innerHTML = comb2.pv;
	
    let boutonBagarre = document.querySelector("#bagarre");
	boutonBagarre.onclick = function () {
        bagarre(comb1, comb2);
	};
}
