const prompt = require('prompt-sync')();

function Triqui() {
    const Jugador1 = 'X';
    const Jugador2 = 'O';

    let matriz = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let turnoActual = Jugador1;

    function mostrarTablero() {
        console.log(" " + (matriz[0][0] || ' ') + " | " + (matriz[0][1] || ' ') + " | " + (matriz[0][2] || ' ') + " ");
        console.log("---+---+---");
        console.log(" " + (matriz[1][0] || ' ') + " | " + (matriz[1][1] || ' ') + " | " + (matriz[1][2] || ' ') + " ");
        console.log("---+---+---");
        console.log(" " + (matriz[2][0] || ' ') + " | " + (matriz[2][1] || ' ') + " | " + (matriz[2][2] || ' ') + " ");
        console.log("---+---+---");
    }

    function realizarMovimiento(posicion) {
        // Convertir la posición en coordenadas de la matriz
        let fila = Math.floor((posicion - 1) / 3);
        let columna = (posicion - 1) % 3;

        // Verificar si la posición está ocupada
        if (matriz[fila][columna] === '') {
            matriz[fila][columna] = turnoActual;
            // Cambiar al siguiente turno
            turnoActual = (turnoActual === Jugador1) ? Jugador2 : Jugador1;
            return true;
        } else {
            console.log("¡Posición ocupada! Inténtalo de nuevo.");
            return false;
        }
    }

    function hayGanador() {
        // Verificar filas
        for (let i = 0; i < 3; i++) {
            if (matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2] && matriz[i][0] !== '') {
                return true;
            }
        }

        // Verificar columnas
        for (let i = 0; i < 3; i++) {
            if (matriz[0][i] === matriz[1][i] && matriz[1][i] === matriz[2][i] && matriz[0][i] !== '') {
                return true;
            }
        }

        // Verificar diagonales
        if ((matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2] && matriz[0][0] !== '') ||
            (matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0] && matriz[0][2] !== '')) {
            return true;
        }

        return false;
    }

    function hayEmpate() {
        // Verificar si todas las posiciones están ocupadas
        for (let fila of matriz) {
            for (let casilla of fila) {
                if (casilla === '') {
                    return false; // Todavía hay al menos una casilla vacía
                }
            }
        }
        return true; // No hay casillas vacías, es un empate
    }

    function iniciarJuego() {
        while (!hayGanador() && !hayEmpate()) {
            mostrarTablero();
            let posicion = parseInt(prompt("Jugador " + turnoActual + ", ingresa tu movimiento (1-9):"));
            if (posicion >= 1 && posicion <= 9) {
                realizarMovimiento(posicion);
            } else {
                console.log("¡Movimiento inválido! Debe ser un número del 1 al 9.");
            }
        }
        mostrarTablero();
        if (hayGanador()) {
            console.log("¡El jugador " + turnoActual + " ha perdido!");
        } else {
            console.log("¡El juego ha terminado en empate!");
        }
    }

    iniciarJuego();
}

// Llamar a la función Triqui para comenzar el juego
Triqui();