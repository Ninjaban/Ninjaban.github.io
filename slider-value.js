var slideCol = document.getElementById("myRange");
var y = document.getElementById("f");
y.innerHTML = slideCol.value + ' %';

slideCol.oninput = function() {
    y.innerHTML = this.value + ' %';
}
