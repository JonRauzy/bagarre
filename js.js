// pour choisir un chiffre au pif
function pickMe(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// constructeur de class combattant
class Combattant {
	constructor(nom, pv, attaque) {
		this.nom = nom;
		this.pv = pv;
		this.attaque = attaque;
	}

	mort() {
		if (this.pv <= 0) {
			return true;
		} else {
			return false;
		}
	}

	taper(victime) {
		victime.pv -= this.attaque;
	}
}

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


// regarde qui tape et enlève les points de vie
function bagarre(comb1, comb2) {
    let result = "tapez vous";
	let comb1pv = document.querySelector("#comb1-pv");
	let comb2pv = document.querySelector("#comb2-pv");
	let tape = pickMe(1, 2);
	let resultAffiche = document.querySelector(".resultAfiche");
	if (comb1.mort() || comb2.mort()) {
        if (comb2.mort()) {
            result = comb2.nom + " est mort.e ";
		} else {
            result = comb1.nom + " est mort.e ";
		}
	} else {
        if (tape === 1) {
            comb1.taper(comb2);
			result = comb1.nom + " tape " + comb2.nom;
			combienPV2 = comb2.pv;
			if (comb2.mort()) {
                result = comb2.nom + " est mort.e ";
			}
		} else {
            result = comb2.nom + " tape " + comb1.nom;
			comb2.taper(comb1);
			combienPV1 = comb1.pv;
			if (comb1.mort()) {
                result = comb1.nom + " est mort.e ";
			}
		}
	}
	return (
        (resultAffiche.innerHTML = result),
		(comb1pv.innerHTML = combienPV1),
		(comb2pv.innerHTML = combienPV2)
        );
    }
    
    // on créé les combatants fred et jawad
    
    let fred = new Combattant("Fred", pickMe(100, 200), pickMe(2, 5));
    let jawad = new Combattant("Jawad", pickMe(100, 200), pickMe(2, 5));
    let florence = new Combattant("florence", pickMe(10, 20), pickMe(2, 5));
    let yolo = new Combattant("Yolo", pickMe(100, 200), pickMe(2, 5));
    let pipolo = new Combattant("Pipolo", pickMe(100, 200), pickMe(2, 5));
    let jonathan = new Combattant("Jonathan", pickMe(100, 200), pickMe(2, 5));
    let youssef = new Combattant("Youssef", pickMe(100, 200), pickMe(2, 5));
    let melvin = new Combattant("Melvin", pickMe(100, 200), pickMe(2, 5));
    let bili = new Combattant("Bili", pickMe(100, 200), pickMe(5, 10));
    let yanis = new Combattant("Yanis", pickMe(100, 200), pickMe(2, 5));
    let tom = new Combattant("Tom", pickMe(100, 200), pickMe(2, 5));
    let coralie = new Combattant("Coralie", pickMe(100, 200), pickMe(2, 5));

    création(coralie,florence);

    let player1 = document.querySelector('#player1')
    console.log(player1.otpion)