/*
 - Fecha de publicación: 15 de abril de 2024 
 - Hora de Publicacion: 11:30 a.m
 - Version de su codigo: 1
 - Autores. Ing(c): Daniel Ramirez, Juan Jose Posada.
 - Nombre del lenguaje utilizado: ECMAScript 6.0 (javascript 6.0 )
 - Version del lenguaje utilizado: 6.0
 - Presentado a: Juan Diego Rincon Franco, Javier Enrique Gomez Carrasquilla, Juan Manuel Morales Santacruz, Julian David Bolivar Agudelo.
 - Universidad Tecnologica de Pereira
 - Programa de Ingenieria de Sistemas y Computación
 - Descripcion del programa:
 Para este programa descargamos una extension llamada "prompt-sync", que muestra un dialogo con mensaje que nos permite que el usuario pueda ingresar un dato o 
 informacion que se le pida en ese dialogo, en pocas palabras es para que el usuario pueda interacturar con el programa.
 La instalacion de este programa se realizo con el comando "npm i prompt -sync" desde la terminal de Git Bash.

 Ahora sí, este es un programa que tiene un menú interactivo con diferentes funcionalidades como:
    1. Adivina el número del 0 al 100:
            Esta funcionalidad es un tipo de juego para el usuario, ya que el usuario va a ingresar x número
            entre el 0 al 100 y va a intentar adivinar el número aleatorio que puso la maquina, la maquina le va a dar 
            pistas de si el número que ingreso es muy alto o es muy bajo, hasta que el usuario lo pueda adivinar y 
            le saldra un mensaje de "¡Felicidades!, haz adivinado el número".
                Ejemplo:
                numero aleatorio de la maquina(no se le muestra al usuario): 12 
                Input: 3
                Output: Su número es muy bajo
                Input: 15
                Output: Su número es muy alto
                Input: 12
                Output: "¡Felicidades!, haz adivinado el número"
                    Salvedad: Solo se deben ingresar estrictamente numeros del 0 al 100, la funcionalidad no saldra del bucle
                     si se pone un numero mayor a 100 o menor que 0. Ademas, no se le pueden ingresar letras o caracteres 
                     especiales a la funcionalidad ya que esta no arroja ningun resultado.
    2. Calculadora de Factorial:
        Esta funcionalidad le permite al usuario conocer el factorial de x número, solamente el usuario le ingresa el numero 
        que quiere saber en factorial y se le dara el resultado de ello. La calculacion del factorial se da por la siguiente función:
            n!= n*(n-1)*(n-2)*....*1 (las restas se hacen hasta que (n-x) = 1)
                Ejemplo: 
                Input: 4
                Output: 24
                el output se define el la funcion asi: 4*(4-1)*(4-2)*(4-3)
                    Salvedad: Esta funcion solo admite numero positivos desde el 0, por lo tanto no admite numeros negativos porque no daria un resultado coherente,
                              y tampoco admite letras o caracteres especiales del teclado, ya que no daria ningun resultado.
    3. Contador de Vocales
        Esta funcionalidad le permite al usuario saber cuantas vocales tiene una frase que quiera poner, entonces el usuario puede poner cualquier frase que desee y la funcionalidad
        le arrojara las veces que hay esta la a, la e, la i, la o, y la u en la frase que ingreso.
            Ejemplo:
            Input: La casa de Pepito se esta quemando.
            Output:a esta 5veces
            e esta 5veces
            i esta 1veces
            o esta 2veces
            u esta 1veces
                Salvedad:El usuario puede ingresar lo que quiera, sean numeros o caracteres especiales ya que el programa 
                solo se va a fijar en las vocales de la frase y va a ignorar lo demás.
 Ademas este menu le ofrece un menu de salida si ya no desea interacturar más con las funcionalidad, para salir simplemente 
    debe digitar el numero "4" cuando este en el menu.
*/

const prompt = require('prompt-sync')(); //Esta variable va a llamar al recurso "prompt-sync", para poder que el usuario pueda interactuar con nuestro menu interactivo

function adivinaNumero(){ //Creamos una función para que el usuario pueda adivinar un número aleatorio entre 0 y 100
        let numeroAleatorio = Math.floor(Math.random() * 100); //Creamos una variable numeroAleatorio, para que el número aleatorio sea entero y que este entre el 0 y 100
        function usuarioEntrada() {
            let numeroDelUsuario = parseInt(prompt("Dime un número de 0 a 100: ")); //Creamos una variable numeroDelUsuario para que pueda ingresar un número
        
        if (numeroDelUsuario === numeroAleatorio ) {
            console.log("¡Felicidades! Has adivinado el número");
            return;
        } else if (numeroDelUsuario < numeroAleatorio) {
            console.log("El número que indico es muy bajo");
        } else {
            console.log ("El número que indico es muy alto");        
        }
        usuarioEntrada();
    }
    usuarioEntrada();
}

function calculadoraFactorial(){ //Creamos una función para calcular el factorial de n número
    let entradaUsuario = parseInt(prompt("Ingrese el número para calcular su factorial:")) //Creamos una variable para que el usuario nos pueda dar un número y nosotros convertirlo en factorial
    let factorial = 1;   //Creamos una variable factorial y esta la igualamos a 1
    for(let i=1; i<=entradaUsuario;i++){
        factorial = factorial*i;
    }
    console.log(`El factorial de ${entradaUsuario} es ${factorial}` )
}

function contadorVocales(){ //Creamos una función para contar las vocales de un texto
    let contador = prompt("Por favor ingrese una frase:") //Creamos la variable contador para que el usuario nos de el texto al que quiere saber cuantas vocales tiene
    let vocalA = (contador.match(/[a]/gi) ?? []).length; //Creamos la variable vocalA, para aplicar un ".match" que se usa para que nos devuelva la cantidad de a en la variable contador. 
    let vocalE = (contador.match(/[e]/gi) ?? []).length; //Creamos la variable vocalE, para aplicar un ".match" que se usa para que nos devuelva la cantidad de e en la variable contador.
    let vocalI = (contador.match(/[i]/gi) ?? []).length; //Creamos la variable vocalI, para aplicar un ".match" que se usa para que nos devuelva la cantidad de i en la variable contador.
    let vocalO = (contador.match(/[o]/gi) ?? []).length; //Creamos la variable vocalO, para aplicar un ".match" que se usa para que nos devuelva la cantidad de o en la variable contador.
    let vocalU = (contador.match(/[u]/gi) ?? []).length; //Creamos la variable vocalU, para aplicar un ".match" que se usa para que nos devuelva la cantidad de u en la variable contador.

    console.log("a esta " + vocalA + "veces");
    console.log("e esta " + vocalE + "veces");
    console.log("i esta " + vocalI + "veces");
    console.log("o esta " + vocalO + "veces");
    console.log("u esta " + vocalU + "veces");
}

function menu(){ //Creamos la función menu, para que el usuario pueda ver que opciones de funcionalidades tiene el menu
    console.log("Menu:")
    console.log("1.Adivina el número:");
    console.log("2 Calculadora de Factorial:");
    console.log("3.Contador de Vocales:");
    console.log("4.Salir:");
    let opcion = parseInt(prompt("Seleccionar una opción:")); //Creamos una variable para que el usuario nos diga que opción quiere elegir o que funcionalidad quiere ejecutar.

    switch (opcion) {
        case 1:
            adivinaNumero();
            return menu();
        case 2: 
            calculadoraFactorial();
            return menu();
        case 3: 
            contadorVocales();
            return menu();
        case 4: 
            console.log("Hasta Luego")
        break;
        default: console.log("Opción invalida. Por favor, seleccione una opción valida"); 
        menu()     
    }
}
menu()