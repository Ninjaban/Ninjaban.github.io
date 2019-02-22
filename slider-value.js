var slideCol = document.getElementById("myRange");
var y = document.getElementById("f");
var element = document.getElementsByClassName("block-simple");
y.innerHTML = slideCol.value;

slideCol.oninput = function() {
    y.innerHTML = this.value;
    console.log('change ' + element.length);
    for(var i=0; i<element.length; i++) {
	var number = element[i].getElementsByClassName('number')[0].innerHTML;
	if (number < this.value) {
	    element[i].id = 'hide';
	    console.log('hide ' + number + '/' + this.value);
	}
	else {
	    element[i].id = '';
	    console.log('show ' + number + '/' + this.value);
	}
    };
}
