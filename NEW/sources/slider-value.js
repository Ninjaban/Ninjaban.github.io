var slideCol = document.getElementById("myRange");
var element = document.getElementsByClassName("block-simple");

slideCol.oninput = function() {
    for(var i=0; i<element.length; i++) {
	var number = element[i].getElementsByClassName('number')[0].innerHTML;
	if (number < this.value * 5) {
	    element[i].id = 'hide';
	}
	else {
	    element[i].id = 'visible';
	}
    };
}
