function seleccionar(link) {
    var opciones = document.querySelector("links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    var x = document.getElementById("navbar");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function() {
    efectoHabilidades();
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("bs").classList.add("barra-progreso4");
        document.getElementById("mysql").classList.add("barra-progreso5");
    }
}