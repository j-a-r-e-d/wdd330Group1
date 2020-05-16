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

function findWinner () {
    const topLeft = document.getElementById('topLeft');
    const middleLeft = document.getElementById('middleLeft');
    const bottomLeft = document.getElementById('bottomLeft');
    const topMiddle = document.getElementById('topMiddle');
    const middle = document.getElementById('middle');
    const bottomMiddle = document.getElementById('bottomMiddle');
    const topRight = document.getElementById('topRight');
    const middleRight = document.getElementById('middleRight');
    const bottomRight = document.getElementById('bottomRight');

    if ((topLeft.innerHTML === topMiddle.innerHTML === topRight.innerHTML) || (middleLeft.innerHTML === middle.innerHTML === middleRight.innerHTML)) {
        if (topMiddle.innerHTML === "X") {
            alert("Player 1 wins!")    
        } 
        else {      
            alert("Player 2 wins!")  
         }
        }
    else if ((topMiddle.innerHTML === middle.innerHTML === bottomMiddle.innerHTML) || (topRight.innerHTML === middleRight.innerHTML === bottomRight.innerHTML))  {   
        if (topMiddle.innerHTML === "X") {
             alert("Player 1 wins!")    
        }
        else {
            alert("Player 2 wins!")    
            }
        }
     // 7 8 9 bottomLeft bottomMiddle bottomRight
        // 1 4 7 topLeft middleLeft bottomLeft

        else if ((bottomLeft.innerHTML ===bottomMiddle.innerHTML === bottomRight.innerHTML) ||(topLeft.innerHTML ===topMiddle.innerHTML === bottomRight.innerHTML)){
            if (bottomLeft.innerHTML ==="X"){
            alert("Player 1 wins")
        }
        else {
            alert("Plater 2 wins")
    }
}   
}
        
            

