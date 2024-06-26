function Comenzar() {
    var modalIntro = document.getElementById("modal-intro");
    var body = document.querySelector("body");
    modalIntro.classList.add("none");
    body.classList.remove("no-scroll");
    let audio = new Audio("../Audio/intro.mp3")
    audio.play()
}

function updateModal(coupleNumber) { //funcion que muestra el modal diseñado para la parte del juego (cuando se haye una pareja)
    window.scrollTo(0, 0); //escrollear al inicio de la pagina
    let name = coupleSelector(coupleNumber); //convertimos nuestro numero de pareja en un nombre
    textModal.innerText = setModalText(coupleNumber); //insertamos el texto retornado por la funcion dentro de la etiqueda texto (texto de el modal)
    document.querySelector('body').classList.add('no-scroll') //agregar la etiqueta que bloquea el scroll
    document.querySelector('.modal-' + name).classList.toggle('show-item'); //agregar la clase para la animacion de caida
    gameModal.classList.remove("hide-modal"); //removemos la clase que mantiene oculto el modal para que se muestre
    setTimeout(() => {
        document.querySelector('.modal-' + name).classList.toggle('show-item'); //quitar la clase para la animacion de caida
        document.querySelector('.modal-' + name).classList.add('hide-modal'); //agregar la clase para la animacion de caida
    }, 3000);
}

function coupleSelector(coupleNumber) { //funcion que me retorna el equivalente de pareja a nombre para la clase modal-(nombre)
    let string = ''
    switch (coupleNumber) {
        case 'pareja004':
            string = 'melchor';
            break;
        case 'pareja006':
            string = 'baltazar';
            break;
        case 'pareja005':
            string = 'gaspar';
            break;
        case 'pareja002':
            string = 'jose';
            break;
        case 'pareja007':
            string = 'pastor';
            break;
        case 'pareja008':
            string = 'mula';
            break;
        case 'pareja003':
            string = 'jesus';
            break;
        case 'pareja001':
            string = 'maria';
            break;
    }
    return string;
}
function winnerModal() { //funcion que muestra el modal diseñado para la parte final (cuando se hayen todas las parejas)
    window.scrollTo(0, 0); //scrollear al inicio de la pagina
    beat = new Audio('audio/final.mp3'); //reproducir el audio del final
    beat.play(); 
    finalModal.classList.remove("hide-modal"); //removemos la clase que mantiene oculto el modal para que se muestre
    document.querySelector('body').classList.add('no-scroll'); //agregar la clase que bloquea el scroll
}

function final() { //funcion utilizara para cerrar modales
    beat.pause(); //pausar la musica que se este reproduciendo
    window.scrollTo(0, 0); //scrollear al inicio
    if(cont ==7) //si es la ultima vez cambiamos el contenido del boton
    {
        gameBtn.innerText = "Finalizar"
    }
    let body = document.querySelector("body"); //seleccionar la etiqueta body para modificar
    gameModal.classList.add("none"); //agregar clase para ocultar el modal
    body.classList.toggle("no-scroll"); //quitar el bloqueo de scroll
    if (cont == 9) location.reload(); //cuando el contador sea 9 recarga la pagina
    if (cont == 8) { //cuando el contador sea 8
        winnerModal(); //ejecuta el modal final
        cont++; //suma uno al contador
    }
}

function copy () //funcion para copiar en portapapeles el link de la pagina web
{
    navigator.clipboard.writeText('https://pulgatx.github.io/hosting');
}



