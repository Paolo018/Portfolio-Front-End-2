function seleccionar(link) {
    var opciones = document.querySelector('links');
    opciones[0].className = '';
    opciones[1].className = '';
    opciones[2].className = '';
    opciones[3].className = '';
    opciones[4].className = '';

    var x = document.getElementById('navbar');
    x.className = '';
}

function responsiveMenu() {
    var x = document.querySelector('icono-nav');
    if (x.className === '') {
        x.className ='responsive';
    } else {
        x.className = '';
    }
}

window.onscroll = function() {
    efectoHabilidades();
}

function efectoHabilidades() {
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById('htmlcss').classList.add('barra-progreso1');
        document.getElementById('js').classList.add('barra-progreso2');
        document.getElementById('bootstrap').classList.add('barra-progreso3');
        document.getElementById('comunicacion').classList.add('barra-progreso4');
        document.getElementById('equipo').classList.add('barra-progreso5');
        document.getElementById('creatividad').classList.add('barra-progreso5');
    }
}