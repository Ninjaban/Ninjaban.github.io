var status=0
var script
var data





function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
	if ((new Date().getTime() - start) > milliseconds){
	    break;
	}
    }
}

function collision_read() {
    var head= document.getElementsByTagName('head')[0];
    if (status == 1) {
	script.parentNode.removeChild(script);
    }
    script= document.createElement('script');
    script.src= 'https://d3js.org/d3.v5.min.js';
    head.appendChild(script);
    status=1

    var slideCol = document.getElementById("slider").value;

    d3.csv("sources/datas/collision.prev").then(function(data) {
	document.getElementById('base-block').innerHTML = "";
	data.forEach(function(element) {

	    var blocki = document.createElement('div');
	    blocki.className = 'block-simple';
	    if (element.PERCENT < slideCol * 5) {
		blocki.id = 'hide';
	    }
	    else {
		blocki.id = 'visible';
	    }

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


	    var val = document.createElement('form');
	    val.className = 'validation';
	    val.action = "";
	    val.method = "POST";
	    val.target = "voltar";
	    blocki.appendChild(val);
	    var id = document.createElement('input');
	    id.className = 'input-hide';
	    id.type = "text";
	    id.name = "id";
	    id.value = element.ID;
	    val.appendChild(id);
	    var oui = document.createElement('input');
	    oui.className = 'oui button';
	    oui.onclick = function(){
		block = this.parentNode.parentNode;
		block.parentNode.appendChild(block);
		oldVal = this.parentNode;
		newVal = document.createElement('div');
		newVal.className = 'validation oui disabled';
		newVal.innerHTML = '<ion-icon name="checkmark" style="color: white; font-size: 32px;"></ion-icon>';
		oldVal.id = 'hide';
		block.appendChild(newVal);
	    };
	    oui.oninput = 'validation()';
	    oui.type = "submit";
	    oui.name = "submit";
	    oui.value = "OUI";
	    oui.readOnly = "readonly";
	    oui.innerHTML = '<ion-icon name="checkmark" style="color: white; font-size: 32px;"></ion-icon>';
	    val.appendChild(oui);
	    var non = document.createElement('input');
	    non.className = 'non button';
	    non.onclick = function(){
		block = this.parentNode.parentNode;
		block.parentNode.appendChild(block);
		oldVal = this.parentNode;
		newVal = document.createElement('div');
		newVal.className = 'validation non disabled';
		newVal.innerHTML = '<ion-icon name="close" style="color: white; font-size: 64px;"></ion-icon>';
		oldVal.id = 'hide';
		block.appendChild(newVal);
	    };
	    non.type = "submit";
	    non.name = "submit";
	    non.value = "NON";
	    non.readOnly = "readonly";
	    non.innerHTML = '<ion-icon name="close" style="color: white; font-size: 32px;"></ion-icon>';
	    val.appendChild(non);

	    document.getElementById("base-block").appendChild(blocki);
	});

	return (data);
    });
}

function ago(time)
{
    var periods = ["seconde", "minute", "heure", "jour", "semaine", "mois", "an"]
    var lengths = [60,60,24,7,4.35,12]

    var now = (new Date()).getTime() / 1000;

    var difference     = now - time;
    var tense          = "Il y a";

    for(var j = 0; difference >= lengths[j] && j < 6; j++) {
	difference /= lengths[j];
    }

    difference = Math.round(difference);

    if(difference != 1 && j != 5) {
	periods[j] = periods[j] + "s";
    }

   return tense + " " + difference + " " + periods[j];
}

function collision_timer(date, n, max) {

    var last = ago(date.getTime() / 1000);
    var j = date.getDate(); // 1 - 31
    var y = date.getFullYear();
    var M = date.getMonth(); // 0 - 11

    var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

    var string = last + " - Dernière mise à jour le " + j + " " + month[M] + " " + y
    document.getElementById("collision-update").innerText = string;
    document.getElementById("collision-update").textContent = string;

    var elem = document.getElementById("MyBar");
    var width = n * 100 / max;
    elem.style.width = width + '%';

    if (n >= max) {
	collision_update();
    }
    else {
	setTimeout(collision_timer, 1000, date, n + 1, max);
    }

}

function collision_update() {
    collision_read();

    var date = new Date();
    collision_timer(date, 0, 300)
}

collision_update();





function precision_read() {
    var head= document.getElementsByTagName('head')[0];
    if (status == 1) {
	script.parentNode.removeChild(script);
    }
    script= document.createElement('script');
    script.src= 'https://d3js.org/d3.v5.min.js';
    head.appendChild(script);
    status=1

    d3.csv("sources/datas/precision.prev").then(function(data) {
	data.forEach(function(element) {

	    document.getElementById('precision-number').innerHTML = element.PRECISION + " %";
	    document.getElementById('precision-diff').innerHTML = element.DIFF_MSG + element.DIFF + " %";

	});
	return (data);
    });
}

function precision_update() {
    precision_read();
    setTimeout(precision_update, 10000);
}

precision_update();
