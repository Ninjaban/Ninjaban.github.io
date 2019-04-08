var element = document.getElementsByClassName("br-menu-link");

element.onclick = function() {
    var id = element.id;
    var className = element.className;

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