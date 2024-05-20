
hudstatus = false;
poi = 0;
fails = 0;
totalpoi = 0;

dif = 0.02;

function togglehud(hudid) {
	
	if (hudstatus == true) {
		
		hudid.style.left = "calc(0px - 12em - 6px)";
		hudstatus = false;
		
	} else {
		
		hudid.style.left = "0%";
		hudstatus = true;
		
	}
	
}

function randoset(vali) {
	
	if (vali == true) {
		poi += 1;
		totalpoi += 1;
	} else {
		poi -= 1;
		fails += 1;
	}
	
	countpoF.textContent = "Failed: [ " + fails + "/" + (fails + totalpoi) + " ]";
	
	const elements = document.querySelectorAll('.rando');

    // Loop through each element and apply your script
    elements.forEach((element) => {
	
	var tempX = randomIntFromInterval(2, 98);
	element.style.left = tempX + "%";
	
	var tempY = randomIntFromInterval(2, 98);
	element.style.top = tempY + "%";
	
	});
	
}

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(decrease, 100);

function decrease() {
	
	if (poi <= 0) {
		
		poi = 0;
		countpo.textContent = "Correct chain: " + poi + " !";
		return;
		
	}
	
	var tempnum = poi -= dif;
	poi = Math.floor(tempnum * 100) / 100;
	countpo.textContent = "Correct chain: " + poi + " !";
	countpoF.textContent = "Failed: [ " + fails + "/" + (fails + totalpoi) + " ]";
	
}


