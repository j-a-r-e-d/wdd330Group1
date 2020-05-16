const player1 = 'X';
const player2 = 'O';
let player = player1;

function addEventListeners() {
    document.getElementById("topLeft").addEventListener("click", addPiece);
    document.getElementById("topMiddle").addEventListener("click", addPiece);
    document.getElementById("topRight").addEventListener("click", addPiece);
    document.getElementById("middleLeft").addEventListener("click", addPiece);
    document.getElementById("middle").addEventListener("click", addPiece);
    document.getElementById("middleRight").addEventListener("click", addPiece);
    document.getElementById("bottomLeft").addEventListener("click", addPiece);
    document.getElementById("bottomMiddle").addEventListener("click", addPiece);
    document.getElementById("bottomRight").addEventListener("click", addPiece);

    document.getElementById("displayDiv").innerHTML = " Turn player " + (isPlayer1 ? "1" : "2") + " (" + (isPlayer1 ? player1 : player2) + ")";
}


let isPlayer1 = true;

function addPiece(event) { //this = event.target
    if (this.innerHTML == "") {
        player = isPlayer1 ? player1 : player2;
        isPlayer1 = !isPlayer1;
        this.innerHTML = player;
        document.getElementById("displayDiv").innerHTML = " Turn player " + (isPlayer1 ? "1" : "2") + " (" + (isPlayer1 ? player1 : player2) + ")";
    }
}

function resetBoard() {

    document.getElementById("topLeft").innerHTML = "";
    document.getElementById("topMiddle").innerHTML = "";
    document.getElementById("topRight").innerHTML = "";
    document.getElementById("middleLeft").innerHTML = "";
    document.getElementById("middle").innerHTML = "";
    document.getElementById("middleRight").innerHTML = "";
    document.getElementById("bottomLeft").innerHTML = "";
    document.getElementById("bottomMiddle").innerHTML = "";
    document.getElementById("bottomRight").innerHTML = "";
    isPlayer1 = true;
    player = player1;
    document.getElementById("displayDiv").innerHTML = " Turn player " + (isPlayer1 ? "1" : "2") + " (" + (isPlayer1 ? player1 : player2) + ")";
}