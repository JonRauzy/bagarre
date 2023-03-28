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
    
    création(coralie,florence);

    let player1 = document.querySelector('#player1')
    console.log(player1.otpion)