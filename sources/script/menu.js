var all = document.getElementsByClassName("br-menu-link");
for(var i=0; i<all.length; i++) {
    all[i].className = "br-menu-link";
    if (all[i].id == "nav-main")
        all[i].className = "br-menu-link active";
}

function menu_click(elem) {
    var id = elem.id;
    var className = elem.className;

    var all = document.getElementsByClassName("br-menu-link");
    for(var i=0; i<all.length; i++) {
        all[i].className = "br-menu-link";
        if (all[i].id == elem.id)
            all[i].className = "br-menu-link active";
    }

    if (id == "menu-main" && className != "br-menu-link active")
    {
        document.getElementById('nav-main').style = "display: block";
        document.getElementById('nav-map').style = "display: none";
    }
    if (id == "menu-map" && className != "br-menu-link active")
    {
        document.getElementById('nav-main').style = "display: none";
        document.getElementById('nav-map').style = "display: ";
    }
};