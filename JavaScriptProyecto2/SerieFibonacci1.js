function fibonacci() {
    // Inicializamos la variable que almacenará el número anterior en la secuencia
    let anterior = 0;
    // Inicializamos la variable que almacenará el número actual en la secuencia
    let final = 1;
    // Inicializamos la variable que almacenará la suma de los dos números anteriores
    let suma = 0;
    
    // Iteramos mientras la suma sea menor o igual a 10000
    for (let i = 0; suma <= 10000; i++) {
        // Calculamos el siguiente número en la secuencia sumando los dos números anteriores
        suma = anterior + final;
        // Actualizamos el valor del número anterior con el valor actual
        anterior = final;
        // Actualizamos el valor del número actual con el valor de la suma
        final = suma;
        // Imprimimos el número anterior, que es el siguiente número en la secuencia de Fibonacci
        console.log(anterior);
    }
}

// Llamamos a la función para iniciar el cálculo de la secuencia de Fibonacci
fibonacci();
