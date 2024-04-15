/* 
 - Fecha de publicación: 15 de abril de 2024 
 - Hora de Publicacion: 11:30 a.m 
 - Version de su codigo: 1
 - Autores. Ing(c):  Daniel Ramirez, Juan Jose Posada.
 - Nombre del lenguaje utilizado: ECMAScript 6.0 (javascript 6.0 )
 - Version del lenguaje utilizado: 6.0
 - Presentado a: Juan Diego Rincon Franco, Javier Enrique Gomez Carrasquilla, Juan Manuel Morales Santacruz, Julian David Bolivar Agudelo.
 - Universidad Tecnologica de Pereira.
 - Programa de Ingenieria de Sistemas y Computación.
 - Descripcion del programa:
 Para este programa descargamos una extension llamada "prompt-sync", que muestra un dialogo con mensaje que nos permite que el usuario pueda ingresar un dato o 
 informacion que se le pida en ese dialogo, en pocas palabras es para que el usuario pueda interacturar con el programa.
 La instalacion de este programa se realizo con el comando "npm i prompt -sync" desde la terminal de Git Bash.
 Ahora sí, este programa es un menú interactivo con diferentes funcionalidades como:
    1. Convertor de Grados Celsuis a Grados Fahrenheit:
        Esta funcionalidad le puede convertir cualquier temperatura que se encuentre en 
        grados Celsuis(°C)a grados Fahrenheit(°F), esto lo hace por medio de una funcion que se define asi:
            °F = (9/5 * Celsuis) + 32
                Ejemplo:
                Input: 30°C
                Output: 86°F
                    Salvedad: Esta función no funciona con letras, estrictamente deben ponerse SOLO números, 
                    de lo contrario no hay un valor definido.
    2. Calculadora de Indice de Masa Corporal (IMC):
        Esta funcionalidad le puede dar el IMC de cualquier persona, si usted ingresa el Peso 
        de esa persona en Kilogramos y la Altura de la persona en metros, este calculo lo realiza por medio de 
        la siguiente función:
            IMC = peso / (altura)**2
                Ejemplo:
                Input peso: 70 
                Input altura: 1.75
                Output: 22.86
                    Salvedad: Esta funcion no funciona con letras, estrictamente deben ponerse SOLO números, 
                    de lo contrario no hay un valor definido.
    3. Generador de Nombre:
        Esta funcionalidad le puede generar un nombre combinado con un nombre, un apellido y un 
        año de nacimiento; Usted ingresa un nombre cualquiera, un apellido cualquiera 
        y un año de nacimiento cualquiera. Despues de ello el programa le entrega un nombre 
        combinado de todo lo anteriormente mencionado. Esto lo hace de la siguiente manera:
            Ejemplo:
            Input nombre: Pepito
            Input apellido: Terreneitor
            Input año de nacimiento: 2001
            Output: PepitoTerreneitor2001
                Salvedad: Para este programa no existe ninguna salvedad,pero se le pide al 
                usuario que ingrese solo letras en nombre y apellido, esto con la finalidad
                de que no le quede un nombre de solo numeros combinados.
    4. Funcion Fibonacci:
        Esta funcionalidad le puede dar el numero n de la funcion de fibonacci, la funcionalidad 
        le va a pedir que número de la funcion quiere saber, luego le va a decir cual es ese n 
        numero que le indico usted a la funcionalidad, esto lo hace asi:
        Funcion de Fibbonacci:  f(0)=0
                                f(1)=1
                                f(n)= f(n-1)+f(n-2) para n=>2
            Ejemplo: 
            Input: 4 
            Output: El 4-esimo número de Fibonacci es 2
                Salvedad: Debe ingresar números superiores a 0, osea números naturales, ya que esta funcionalidad empieza a
                          arrojar datos apartir del 1-esimo número. Ademas, no se pueden poner números negativos o una ecuación.
                           Por último, esta funcionalidad no trabaja con letras o caracteres especiales del teclado.                     
 Ademas este menu le ofrece un menu de salida si ya no desea interacturar más con las funcionalidad, para salir simplemente 
 debe digitar el numero "5" cuando este en el menu.
*/

const prompt = require('prompt-sync')(); //Esta variable va a llamar al recurso "prompt-sync", para poder que el usuario pueda interactuar con nuestro menu interactivo

function convertirTemperatura(){ //Creamos una función para convertir °C a °F
 let celsuis = parseFloat(prompt('Por favor ingrese los centigrados a convertir a Fahrenheit:')); //Creamos una variable para °C, y la usaremos para que el usuario nos diga el °C que quiere convertir
 let Fahrenheit = (9/5 * celsuis) + 32; //Creamos una variable llamada Fahrenheit para aplicar la formula de conversión
 console.log(`${celsuis}°C son ${Fahrenheit} grados Fahrenheit`);
}

function calculadoraIMC (){ //Creamos una función para crear una calculadora de IMC
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos:")) //Creamos una variable peso, este dato nos lo proporciona el usuario
    let altura = parseFloat(prompt("Ingrese su altura en metros:")) //Creamos una variable altura, este dato nos lo proporciona el usuario
    let IMC = peso / (altura)**2                                    //Creamos una variable IMC para aplicar la formula para saber el IMC del Usuario
    console.log(`Su indice de masa corporal (IMC) es: ${IMC.toFixed(2)}`);
}

function nombreUsuarioAño(){ //Creamos una función para generar nombre de usuario
    let nombre = prompt("Ingrese su nombre:") //Creamos una variable nombre, y la usaremos para que el usuario nos diga que nombre quiere combinar con las demas variables
    let apellido = prompt("Ingrese su apellido:") //Creamos una variable apellido, y la usaremos para que el usuario nos diga que apellido quiere combinar con las demas variables
    let añoNacimiento = prompt("Ingrese su año de nacimiento:") // Creamos una variable añoNacimiento, y la usaremos para que el usuario nos diga que numeros quiere combinar con las demas variables
    let nombreUsuario = nombre + apellido + añoNacimiento //Creamos una variable nombreUsuario, y la usaremos para combinar las 3 variables anteriores en un solo texto.
    console.log("Nombre de usuario combinado:" + nombreUsuario) 
}

function fibonacci(){ //Creamos una funcion para saber el n número de la función de Fibonacci
    let ingresarPosicionFibonacci = prompt("Ingrese el valor de n:") //Creamos una variable ingresarPosicionFibonacci, para que el usuario nos diga que n número quiere saber de la función de fibonacci
    let prev1 = 0; //Este es el primer número de la función de Fibonacci
    let prev2 = 1; //Este es el segundo número de la función de Fibonacci
    let sumaDos = 1; //Esta es la suma de las dos variables anteriores
    if(ingresarPosicionFibonacci == 1){
        console.log("La primer posición es igual a 0")
    }else {
    for (let i = 2; i<= ingresarPosicionFibonacci; i++) { //i es una variable para conocer el n número de la función, cuando para valores =>2
        sumaDos = prev1 + prev2;
        prev2 = prev1;
        prev1 = sumaDos;
    }
    console.log("El " + ingresarPosicionFibonacci + "-ésimo número de Fibonacci es:" + sumaDos)
    }
};

function menu(){ //Creamos la función menu, para que el usuario pueda ver que opciones de funcionalidades tiene el menú
    console.log("Menu:")
    console.log("1.Conversor de Temperatura:");
    console.log("2 Calculadora IMC:");
    console.log("3.Generador de nombre usuario:");
    console.log("4.Función Fibonacci:");
    console.log("5.Salir:");
    let opcion = parseInt(prompt("Seleccionar una opción:")); //Creamos una variable para que el usuario nos diga que opción quiere elegir o que funcionalidad quiere ejecutar.

    switch (opcion) {
        case 1:
            convertirTemperatura();
            return menu();
        case 2: 
            calculadoraIMC();
            return menu();
        case 3: 
            nombreUsuarioAño();
            return menu();
        case 4: 
            fibonacci();
            return menu();
        case 5: 
            console.log("Hasta Luego")
        break;
        default: console.log("Opción invalida. Por favor, seleccione una opción valida"); 
        menu()     
    }
}
menu()