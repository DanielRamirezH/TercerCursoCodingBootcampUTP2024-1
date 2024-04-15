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
 Este es un programa que muestra una serie de listas a la que se aplican diferentes funcionalidades como:
    1. Conocer el Menor y Mayor dato de una lista.
        Con esta funcionalidad podemos saber cual es el numero mayor y menor de una lista. Primero le damos
        una lista de diferentes numeros y con unas funciones integradas en javascript llamadas "Math.max" y "Math.min" nos encuentra el numero mayor y menor.
            Input: [57, 2, 3, 6, 10]
            Output: El número mas grande es: 57
                    El número mas pequeño es: 2
                        Salvedad: Solo se admiten números, no se permiten letras, ya que el programa arrojara error de que 
                        la letra o letras no han sido definidas, osea las toma como variables.
    2. Concatenación de Listas:
        Con esta funcionalidad podemos unir dos listas de numeros y ordenarlas de menor a mayor. Primero 
        definimos dos listas con números, despues con un comando llamado ".concat" unimos las dos listas, 
        luego con un comando llamado ".sort" ordenamos los números de la lista de menor a mayor. 
            Input: [3, 5, 29, 50, 12]              
                   [4, 70, 8, 34, 76]
            Output: [3,4,5,8,12,29,34,50,70,76]
                        Salvedad: Solo se admiten números, no se permiten letras, ya que el programa arrojara error de que 
                        la letra o letras no han sido definidas, osea las toma como variables.
    3. Inversion de una Lista:
        Con esta funcionalidad podemos invertir una lista de varios números. Primero vamos a poner una lista de números, 
        despues usamos un comando llamado ".reverse" que nos va a poner toda la lista al revez, asi:
            Input: [3, 5, 6, 9, 20]
            Output: [20, 9, 6, 5, 3]
                        Salvedad: Solo se admiten números, no se permiten letras, ya que el programa arrojara error de que 
                        la letra o letras no han sido definidas, osea las toma como variables.
*/

function menorMayor(){ //Creamos una funcion para saber el número mayor y menor de una lista de números
    lista = [57, 2, 3, 6, 10] //Creamos una lista de varios números para saber que dato es mayor y menor
    console.log("1.");
    console.log("Lista de números: [" + lista +"]")
    console.log('El número más grande es: ' + Math.max(...lista)); //Aca sabemos cual es el número mayor lista
    console.log('El número más pequeño es: ' + Math.min(...lista)); //Aca sabemos cual es el número meno de la lista
}
menorMayor()

function concatenacionListas(){ //Creamos una función para poder concatenar y ordenar dos listas de números
    const lista1 = [3, 5, 29, 50, 12];//Creamos una lista de números 
    const lista2 = [4, 70, 8, 34, 76];//Creamos otra lista de números
    console.log("2.")
    console.log("Lista 1: [" + lista1 + "]")
    console.log("Lista 2: [" + lista2 + "]")
    const listaConcatenada = lista1.concat(lista2) //Aca concatenamos ambas listas, es decir las unimos
    console.log("Lista concatenada y ordenada: [" + listaConcatenada.sort((a, b) => a - b) + "]"); //Aca las organizamos
}
concatenacionListas()

function InversionLista(){ //Creamos una función para poder invertir una lista de números
    let listaNumero1 = [3, 5, 6, 9, 20,]; //Creamos una lista de números de manera ordenada o en desorden
    console.log("3.")
    console.log("Lista original: [" + listaNumero1 + "]")
    console.log("Lista invertida: [" + listaNumero1.reverse() + "]");//Aca la lista se va a imprimir en reversa es decir el ultimo es el primero, el penultimo es el segundo, etc
}
InversionLista()