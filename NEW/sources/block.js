d3.csv("sources/collision.csv").then(function(data) {
    data.forEach(function(element) {

	var blocki = document.createElement('div');
	blocki.className = 'block-simple';
	var blockc = document.createElement('div');
	blockc.className = 'block';
	blocki.appendChild(blockc);

	var title = document.createElement('div');
	title.className = 'title';
	blockc.appendChild(title);
	var name = document.createElement('span');
	name.className = 'name';
	name.innerHTML = element.MMSI;
	title.appendChild(name);
	var numberb = document.createElement('div');
	numberb.className = 'number-block';
	title.appendChild(numberb)
	var number = document.createElement('span');
	number.className = 'number';
	number.innerHTML = element.PERCENT;
	numberb.appendChild(number);
	var numbersign = document.createElement('span');
	numbersign.className = 'number-sign';
	numbersign.innerHTML = ' %';
	numberb.appendChild(numbersign);

	var liste = document.createElement('div');
	liste.className = 'liste';
	blockc.appendChild(liste)
	var ul = document.createElement('ul');
	liste.appendChild(ul);
	var li1 = document.createElement('li');
	li1.innerHTML = 'Position: [' + element.LAT + ', ' + element.LON + ']';
	ul.appendChild(li1);
	var li2 = document.createElement('li');
	li2.innerHTML = 'Vitesse: ' + element.SPEED;
	ul.appendChild(li2);
	var li3 = document.createElement('li');
	li3.innerHTML = 'Direction: ' + element.HEADING;
	ul.appendChild(li3);


	var val = document.createElement('div');
	val.className = 'validation';
	blocki.appendChild(val);
	var oui = document.createElement('button');
	oui.className = 'oui button';
	oui.innerHTML = 'OUI';
	val.appendChild(oui);
	var non = document.createElement('button');
	non.className = 'non button';
	non.innerHTML = 'NON';
	val.appendChild(non);

	document.getElementById("base-block").appendChild(blocki);
    });
});
