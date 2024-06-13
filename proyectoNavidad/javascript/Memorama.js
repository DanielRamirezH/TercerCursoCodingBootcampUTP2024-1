let seleccionadas = [];
let musica = null;
let cartas = [
  `<div class="area-tarjeta" onclick="SeleccionarCarta(0)">
        <div class="tarjeta" id="tarjeta0">
            <div class="cara trasera" id="trasera0">
                <img src="../media/parejas-001.png" alt="pareja001"></img>
            </div>
            <div class="cara superior">
                <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
            </div>
        </div>
    </div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(1)">
        <div class="tarjeta" id="tarjeta1">
            <div class="cara trasera" id="trasera1">
                <img src="../media/parejas-001.png" alt="pareja001"></img>
            </div>
            <div class="cara superior">
                <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
            </div>
        </div>
    </div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(2)">
        <div class="tarjeta" id="tarjeta2">
            <div class="cara trasera" id="trasera2">
                <img src="../media/parejas-002.png" alt="pareja002"></img>
            </div>
            <div class="cara superior">
                <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
            </div>
        </div>
    </div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(3)">
        <div class="tarjeta" id="tarjeta3">
            <div class="cara trasera" id="trasera3">
                <img src="../media/parejas-002.png" alt="pareja002"></img>
            </div>
            <div class="cara superior">
                <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
            </div>
        </div>
    </div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(4)">
        <div class="tarjeta" id="tarjeta4">
            <div class="cara trasera" id="trasera4">
                <img src="../media/parejas-003.png" alt="pareja003"></img>
            </div>
            <div class="cara superior">
                <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
            </div>
        </div>
    </div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(5)">
        <div class="tarjeta" id="tarjeta5">
            <div class="cara trasera" id="trasera5">
                <img src="../media/parejas-003.png" alt="pareja003"></img>
            </div>
            <div class="cara superior">
                <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
            </div>
        </div>
    </div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(6)">
        <div class="tarjeta" id="tarjeta6">
            <div class="cara trasera" id="trasera6">
                <img src="../media/parejas-004.png" alt="pareja004"></img>
            </div>
            <div class="cara superior">
                <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
            </div>
        </div>
    </div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(7)">
        <div class="tarjeta" id="tarjeta7">
            <div class="cara trasera" id="trasera7">
                <img src="../media/parejas-004.png" alt="pareja004"></img>
            </div>
            <div class="cara superior">
                <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
            </div>
        </div>
    </div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(8)">
    <div class="tarjeta" id="tarjeta8">
        <div class="cara trasera" id="trasera8">
            <img src="../media/parejas-005.png" alt="pareja005"></img>
        </div>
        <div class="cara superior">
            <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
        </div>
    </div>
</div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(9)">
    <div class="tarjeta" id="tarjeta9">
        <div class="cara trasera" id="trasera9">
            <img src="../media/parejas-005.png" alt="pareja005"></img>
        </div>
        <div class="cara superior">
            <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
        </div>
    </div>
</div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(10)">
    <div class="tarjeta" id="tarjeta10">
        <div class="cara trasera" id="trasera10">
            <img src="../media/parejas-006.png" alt="pareja006"></img>
        </div>
        <div class="cara superior">
            <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
        </div>
    </div>
</div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(11)">
    <div class="tarjeta" id="tarjeta11">
        <div class="cara trasera" id="trasera11">
            <img src="../media/parejas-006.png" alt="pareja006"></img>
        </div>
        <div class="cara superior">
            <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
        </div>
    </div>
</div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(12)">
    <div class="tarjeta" id="tarjeta12">
        <div class="cara trasera" id="trasera12">
            <img src="../media/parejas-007.png" alt="pareja007"></img>
        </div>
        <div class="cara superior">
            <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
        </div>
    </div>
</div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(13)">
    <div class="tarjeta" id="tarjeta13">
        <div class="cara trasera" id="trasera13">
            <img src="../media/parejas-007.png" alt="pareja007"></img>
        </div>
        <div class="cara superior">
            <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
        </div>
    </div>
</div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(14)">
    <div class="tarjeta" id="tarjeta14">
        <div class="cara trasera" id="trasera14">
            <img src="../media/parejas-008.png" alt="pareja008"></img>
        </div>
        <div class="cara superior">
            <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
        </div>
    </div>
</div>`,
  `<div class="area-tarjeta" onclick="SeleccionarCarta(15)">
    <div class="tarjeta" id="tarjeta15">
        <div class="cara trasera" id="trasera15">
            <img src="../media/parejas-008.png" alt="pareja008"></img>
        </div>
        <div class="cara superior">
            <img src="../media/tarjeta_cubierta.png" alt="cubierta"></img>
        </div>
    </div>
</div>`,
];

function Mezclar(cartas) {
  return cartas.sort(() => Math.random() - 0.5);
}

function CargarJuego() {
  cartas = Mezclar(cartas);
  seleccionadas = [];
  let tablero = document.getElementById("tablero");
  tablero.innerHTML = cartas.join(" ");
}

function CompararCartas(seleccionadas) {
  let ParteTrasera1 = document.getElementById("trasera" + seleccionadas[0]);
  let ParteTrasera2 = document.getElementById("trasera" + seleccionadas[1]);

  setTimeout(() => {
    //setTimeout es para darle tiempo
    if (ParteTrasera1.innerHTML != ParteTrasera2.innerHTML) {
      let Carta1 = document.getElementById("tarjeta" + seleccionadas[0]); //obtengo el contenido de la carta
      let Carta2 = document.getElementById("tarjeta" + seleccionadas[1]); //obtengo el contenido de la carta
      Carta1.style.transform = "rotateY(0deg)"; //la volteamos de nuevo
      Carta2.style.transform = "rotateY(0deg)"; //la volteamos de nuevo
      musica = new Audio("../Audio/incorrecta.mp3"); //reproducimos el audio de la carta incorrecta
      musica.play();
    } else { // CUANDO ENCUENTRA UNA PAREJA
      musica = new Audio("../Audio/correcta.mp3"); //reproducimos el audio de la carta correcta
      musica.play();
      
    }
  }, 1000);
}

function SeleccionarCarta(i) {
  let cards = document.getElementById("tarjeta" + i); //obtiene el contenido de la etiqueta con el ID
  if (cards.style.transform != "rotateY(180deg)") {
    //sino esta volteada
    cards.style.transform = "rotateY(180deg)"; //cambia el estilo y la voltea
    seleccionadas.push(i); //pone el numero de la tarjeta en el arreglo seleccionadas
  }
  if (seleccionadas.length == 2) {
    //cuando esten dos seleccionadas
    CompararCartas(seleccionadas); //las comparamos con la funcion CompararCartas
    seleccionadas = []; //reiniciamos las tarjetas seleccionadas
  }
}

CargarJuego();
