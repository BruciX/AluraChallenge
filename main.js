var botonEncriptar = document.querySelector('.encrip');
var botonDesencriptar = document.querySelector('.desencrip');
var resultado = document.querySelector('.textoOut');
var copiar = document.querySelector('.copiar');
var botonCopiar = document.querySelector('.ocultar');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;


function encriptar() {
    copiar.classList.remove('copiar');
    area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);

}
function desencriptar() {
    copiar.classList.remove('copiar');
    area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}

function copiarTexto() {
    var area = resultado;
    navigator.clipboard.writeText(area.innerHTML);
    return area.value;
}
function recuperarTexto() {
    var area = document.querySelector('.textoIN');
    return area.value;
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}