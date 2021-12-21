function listRandom() {
    buttonOpacity();
    galleryRandom();
}

function buttonOpacity() {
    let elemento = document.getElementById("random")
    if (elemento.style.opacity == 0.5) {
        elemento.style.opacity = 1;
    } else {
        elemento.style.opacity = 0.5;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getListRandom(n, min, max) {
    let listRnd = []
    let numRandom = getRndInteger(min, max);
    while (listRnd.length != n) {
        while (!listRnd.includes(numRandom)) {
            listRnd.push(numRandom);
        }
        numRandom = getRndInteger(min, max);
    }
    return listRnd;
}

function galleryRandom() {
    let min = 1;
    let max = 17;
    let imagenes = document.getElementsByTagName("img")
    let listRnd = getListRandom(imagenes.length - 1, min, max)
    for (let i = 0; i < imagenes.length - 1; i++) {
        imagenes[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG")
    }

}

var a = new Date();
// horas saludos
var hora = a.getHours();
    let header = document.getElementsByTagName("header")
    let footer = document.getElementsByTagName("footer")
    let encabezado = document.getElementById("saludo");
if(hora >= 1 && hora<= 3){header.innerHTML "Buenas Noches"};
if(hora >= 4 && hora<= 14){header.innerHTML "Buenos D&iacute;as"};
if(hora >= 15 && hora<= 19){header.innerHTML "Buenas Tardes"};
if(hora >= 20 && hora<= 24){header.innerHTML "Buenas Noches"};


}