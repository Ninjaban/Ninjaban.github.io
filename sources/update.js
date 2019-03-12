var status=0
var script
var data





function openfile(file, string) {
    console.log(document.location.toString() + file);
    var mywindow = window.open(document.location.toString() + file, "", 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=10, height=10, visible=none');
    mywindow.document.writeln(string + "\n");
}

function button_oui() {
    openfile("sources/retour.html", this.name + ",1");
}

function button_non() {
    openfile("sources/retour.html", this.name + ",0");
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

    d3.csv("sources/collision.prev").then(function(data) {
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


	    var val = document.createElement('div');
	    val.className = 'validation';
	    blocki.appendChild(val);
	    var oui = document.createElement('button');
	    oui.className = 'oui button';
	    oui.innerHTML = 'OUI';
	    oui.onclick = button_oui;
	    oui.name = element.ID;
	    val.appendChild(oui);
	    var non = document.createElement('button');
	    non.className = 'non button';
	    non.innerHTML = 'NON';
	    non.onclick = button_non;
	    non.name = element.ID;
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

    d3.csv("sources/precision.prev").then(function(data) {
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
