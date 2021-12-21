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
//creado por https://joason.com
var hora = a.getHours();
if(hora >= 1 && hora<= 3){document.write("Buenas Noches")};
if(hora >= 4 && hora<= 14){document.write("Buenos D&iacute;as")};
if(hora >= 15 && hora<= 19){document.write("Buenas Tardes")};
if(hora >= 20 && hora<= 24){document.write("Buenas Noches")};


}