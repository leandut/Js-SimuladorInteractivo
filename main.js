/*
for del 1 al N (cantidad de rondas)
    1 elegir piedra, papel o tijera
    VS PC: getRandomInt(3) = 0, 1 , 2

    piedra = piedra  // repetido
    piedra > tijera
    piedra < papel

    tijera = tijera // repetido
    tijera > papel
    tijera < piedra 
    
    papel = papel  // repetido
    papel > piedra
    papel < tijera


    0= piedra
    1= papel
    2= tijera

*/



let contadorPlayer=0;
let contadorPc=0;
let contadorRondas=0;
let historicoGame=null;
let player;

game();

function game() {
    
      player=setNombrePlayer();
        let seleccionPlayer;
        let seleccionPc;
        historicoGame="\n";
        let setGame = setearJuego();
        if (setGame != 0 && setGame != null) { 
    
            for (let i=1; i<=contadorRondas; i++){
                seleccionPlayer = obtenerSeleccionPlayer();
                if (seleccionPlayer==null){
                    i--;
                    console.log("Ronda -1 " + i);
                }else if (seleccionPlayer=="s"){
                    console.log("Player terminó el juego, se suma 1 a la PC");
                    i=contadorRondas;
                    contadorPc=contadorPc+1;
                }else{
                    console.log("seleccion Player: " + formatearSeleccion(seleccionPlayer));
                    seleccionPc = obtenerSeleccionPc();
                    console.log("seleccion Player PC: " + formatearSeleccion(seleccionPc));
                    ganarPerder(seleccionPlayer, seleccionPc, i);
                }
            }
            alert("Juego terminado! \n" + "Resultado final: " + player + ": "+  contadorPlayer + " " +  " -  " + "PC: "+ contadorPc + "\n \n Ganador: " + quienGano(contadorPlayer, contadorPc));  
        }; 
};

function setearJuego() {
    contadorRondas=0;
    let setJuego = prompt("Cargar cantidad de rondas");
    if (setJuego == null || setJuego.length==0) {
        alert("Debes cargar un número para setear la cantidad de rondas");
    } else if (!isNaN(setJuego)) {
        contadorRondas=setJuego;
        if(contadorRondas==1){
            alert("Juego a: " + setJuego + " ronda");
        }else{
            alert("Juego a: " + setJuego + " rondas");
        };       
    }else{
        alert("Ingresa solo números para setear la cantidad de rondas");
    };
    return contadorRondas;
};

function obtenerSeleccionPc() {
    let seleccionPc = Math.floor(Math.random() * 3);
    let seleccion;
    switch (seleccionPc) {
        case 0:
            return seleccion = "p";
            break;
        case 1:
            return seleccion = "pp";
            break;
        case 2:
            return seleccion = "t";
            break;

    };
    return seleccion;
};

function obtenerSeleccionPlayer() {
    let seleccionPlayer = prompt("Selecciona \n P = piedra \n PP = papel \n T = tijera \n S = Abandonar y terminar juego");
    if (seleccionPlayer != null) {
        let resultadoPlayerLowerCase = seleccionPlayer.toLowerCase();
        if (resultadoPlayerLowerCase != "p" && resultadoPlayerLowerCase != "pp" && resultadoPlayerLowerCase != "t" && resultadoPlayerLowerCase!="s") {
            alert("Seleccion inválida");
        } else {
            return resultadoPlayerLowerCase;
        };
    } else {
        alert("Debe cargar un valor");
    };

};

function ganarPerder(seleccionPlayer, seleccionPc, ronda) {
    console.log("eleccion player " + seleccionPlayer);
    console.log("eleccion pc " + seleccionPc);
    if (seleccionPlayer == seleccionPc) {
        historicoGame = historicoGame + "Ronda "+ ronda + " "+ "Empate \n";
        alert("Empate!! Ambos eligieron: " + formatearSeleccion(seleccionPlayer));
    };
    if (seleccionPlayer == "p" && seleccionPc == "t") {
        //piedra > tijera
        historicoGame = historicoGame + "Ronda "+ ronda + " "+ "Gana "+ player +" \n";
        contadorPlayer=contadorPlayer+1;
        alert("Piedra vs Tijera: Ganaste! \n Tus victorias: " + contadorPlayer);
    };
    if (seleccionPlayer == "p" && seleccionPc == "pp") {
        //piedra < papel
        historicoGame = historicoGame + "Ronda "+ ronda + " "+ "Gana Pc \n";
        contadorPc=contadorPc+1;
        alert("Piedra vs Papel: Perdiste! \n Victorias PC: " + contadorPc);
    };
    if (seleccionPlayer == "t" && seleccionPc == "pp") {
        //tijera > papel
        historicoGame = historicoGame + "Ronda "+ ronda + " "+ "Gana "+ player +" \n";
        contadorPlayer=contadorPlayer+1;
        alert("Tijera vs Papel: Ganaste! \n Tus victorias: " + contadorPlayer);
    };
    if (seleccionPlayer == "t" && seleccionPc == "p") {
        //tijera < piedra 
        historicoGame = historicoGame + "Ronda "+ ronda + " "+  "Gana Pc \n";
        contadorPc=contadorPc+1;
        alert("Tijera vs Piedra: Perdiste! \n Victorias PC: " + contadorPc);
    };
    if (seleccionPlayer == "pp" && seleccionPc == "p") {
        //papel > piedra 
        historicoGame = historicoGame + "Ronda "+ ronda + " "+  "Gana "+ player +" \n";
        contadorPlayer=contadorPlayer+1;
        alert("Papel vs Piedra: Ganaste! \n Tus victorias: " + contadorPlayer);
    };
    if (seleccionPlayer == "pp" && seleccionPc == "t") {
        //papel < tijera 
        historicoGame = historicoGame + "Ronda "+ ronda + " "+ "Gana Pc \n";
        contadorPc=contadorPc+1;
        alert("Papel vs Tijera: Perdiste! \n Victorias PC: " + contadorPc);
    };
    alert ("Resumen: "+ historicoGame);
};


function formatearSeleccion(seleccion){
    let resultado=null;
    switch (seleccion) {
        case "p":
            return resultado = "Piedra";
            break;
        case "pp":
            return resultado = "Papel";
            break;
        case "t":
            return resultado = "Tijera";
            break;
        case "s":
            return resultado = "Salir";
            break;
        default:
            return resultado;
    };
};

function quienGano(contadorPlayer, contadorPc){
    if (contadorPlayer>contadorPc){
        return player;
    }else if (contadorPlayer==contadorPc){
        return "Empate";
    }else{
        return "PC - Cat's Rules!";
    };
};

function setNombrePlayer(){
    let nombrePlayer=null;
    nombrePlayer=prompt("Ingresa tu nombre de jugador");
    console.log(nombrePlayer + nombrePlayer.length);
    if (nombrePlayer.length>0){
        return nombrePlayer;
    }else{
        return alert("Ingresa tu nombre de jugador");
    }

}