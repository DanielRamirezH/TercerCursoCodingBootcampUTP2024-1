const prompt = require('prompt-sync')();

function numerosalrevez() {
    let numeroIngresado = parseFloat(prompt("Ingrese su numero para invertirlo: "));

    if (isNaN(numeroIngresado)) {
        return "Ingrese un numero, no un texto.";
    }
    
    // Convierte el número ingresado en una cadena
    let numeroCadena = numeroIngresado.toString();

    // Invierte la cadena
    let numeroInverso = "";
    for (let i = numeroCadena.length - 1; i >= 0; i--) {
        numeroInverso += numeroCadena[i];
    }
       
    console.log("El inverso de " + numeroIngresado + " es: " + numeroInverso);
}

numerosalrevez();
