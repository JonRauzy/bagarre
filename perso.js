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

    
let fred = new Combattant("Fred", pickMe(100, 200), pickMe(2, 5));
let jawad = new Combattant("Jawad", pickMe(100, 200), pickMe(2, 5));
let florence = new Combattant("florence", pickMe(100, 200), pickMe(2, 5));
let yolo = new Combattant("Yolo", pickMe(100, 200), pickMe(2, 5));
let pipolo = new Combattant("Pipolo", pickMe(100, 200), pickMe(2, 5));
let jonathan = new Combattant("Jonathan", pickMe(100, 200), pickMe(2, 5));
let youssef = new Combattant("Youssef", pickMe(100, 200), pickMe(2, 5));
let melvin = new Combattant("Melvin", pickMe(100, 200), pickMe(2, 5));
let bili = new Combattant("Bili", pickMe(100, 200), pickMe(2, 5));
let yanis = new Combattant("Yanis", pickMe(100, 200), pickMe(2, 5));
let tom = new Combattant("Tom", pickMe(100, 200), pickMe(2, 5));
let coralie = new Combattant("Coralie", pickMe(100, 200), pickMe(2, 5));


création(fred, yolo);
