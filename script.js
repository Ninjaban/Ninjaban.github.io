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
};
