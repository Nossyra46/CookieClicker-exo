var button = document.getElementById('click');
var divAffichage = document.getElementById('affichage');
var score = 0;
var multiplier = document.getElementById('multiplier');
var multiplicateur = 1;
var msg = document.getElementById('message');
var valeurMultiplicateur = document.getElementById("valeurMultiplicateur");
var prixMultiplicateur = 50;
var prochainPrix = document.getElementById('prochainPrix');
var btnAutoclick =document.getElementById('autoClick');
var achatAutoclick = document.getElementById('achatAutoclick');
var btnBonus = document.getElementById('bonus');
var achatBonus = document.getElementById('achatBonus');
var timer;




var msgZero = function() {
	msg.textContent = "";
}

var pauvre = function () {
	msg.textContent = "Vous n'avez pas assez !";
	var chrono = setTimeout(msgZero,2000);
}

var augmenterMultiplicateur = function() {
	if (score>=prixMultiplicateur) {
		multiplicateur++;
		score = score - prixMultiplicateur;
		prixMultiplicateur = 2*prixMultiplicateur;
		prochainPrix.textContent = prixMultiplicateur;
		divAffichage.textContent = score;
		valeurMultiplicateur.textContent = "x"+multiplicateur;
	}
	else {
		pauvre();
	}
}
multiplier.addEventListener('click', augmenterMultiplicateur);

button.addEventListener('click', function() {
	score = score + multiplicateur;
	divAffichage.textContent = score;
});

var funAutoClick = function() {
	if (score>=500) {
		score-= 500;
		setInterval(function () {score++;divAffichage.textContent = score;}, 1000);
		divAffichage.textContent = score;
		btnAutoclick.removeEventListener('click', funAutoClick);
		achatAutoclick.textContent = "Déjà acheté";

	}
	else {
		pauvre();
	}
}

var decompte = function() {
	achatBonus.textContent = timer;
	timer--;	
}


var resetBonus = function() {
	btnBonus.addEventListener('click', funBonus);
	achatBonus.textContent = "prix : 5000";
	multiplicateur = temp;
	multiplier.removeEventListener('click', funBonus);
}

var funBonus = function() {
	if(score>=5000) {
		multiplier.addEventListener('click', bonusMultiplicateur);
		btnBonus.removeEventListener('click', funBonus);
		score-=5000;
		divAffichage.textContent = score;

		// define bonus mode
		
		timer = 30;
		multiplicateur*= 2;
		setTimeout(resetBonus,30000);
		setInterval(decompte, 1000);
	}
	else {
		pauvre();
	}
}

btnAutoclick.addEventListener('click', funAutoClick);
btnBonus.addEventListener('click', funBonus);



