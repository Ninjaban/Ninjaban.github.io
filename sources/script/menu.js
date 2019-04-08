var element = document.getElementsByClassName("br-menu-link active");

element.onclick = function() {
    var id = this.id;
    var className = this.className;

    alert("La putain de ta race");
    var all = document.getElementsByClassName("br-menu-link");
    for(var i=0; i<all.length; i++) {
        all[i].className = "br-menu-link";
    }
    this.className = "br-menu-link active";

    if (id === "menu-main" && className !== "br-menu-link active")
    {
        document.getElementById('nav-main').style = "display: block";
        document.getElementById('nav-map').style = "display: none";
    }
    if (id === "menu-map" && className !== "br-menu-link active")
    {
        document.getElementById('nav-main').style = "display: none";
        document.getElementById('nav-map').style = "display: block";
    }
};