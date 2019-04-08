var element = document.getElementsByClassName("block-simple");
var slider = document.getElementById("slider");
var obj = slider;
var value = obj.value;
var min = 0;
var max = 20;
var range = Math.round(max - min);
var percentage = Math.round((value - min) * 100 / range);

document.getElementById("bar").style.width = percentage + "%";
document.getElementById("bar-btn").style.left = percentage + "%";
document.getElementById("bar-btn-span").innerHTML = percentage;



slider.oninput = function () {
    var obj = this;
    var value = obj.value;
    var min = 0;
    var max = 20;
    var range = Math.round(max - min);
    var percentage = Math.round((value - min) * 100 / range);

    document.getElementById("bar").style.width = percentage + "%";
    document.getElementById("bar-btn").style.left = percentage + "%";
    document.getElementById("bar-btn-span").innerHTML = percentage;

    for(var i=0; i<element.length; i++) {
	var number = element[i].getElementsByClassName('number')[0].innerHTML;
	if (number < this.value * 5) {
	    element[i].id = 'hide';
	}
	else {
	    element[i].id = 'visible';
	}
    };
};
