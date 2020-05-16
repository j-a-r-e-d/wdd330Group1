const player1 = 'X';
const player2 = 'O';
let player = player1;
const colorDefault = "#000000";
const colorWin = "#00900A";
const colorLost = "#BE0000";

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

    findWinner();
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
    document.getElementById("displayDiv").style.color = colorDefault;
}

function findWinner() {

    const topLeft = document.getElementById("topLeft").innerHTML;
    const topMiddle = document.getElementById("topMiddle").innerHTML;
    const topRight = document.getElementById("topRight").innerHTML;
    const middleLeft = document.getElementById("middleLeft").innerHTML;
    const middle = document.getElementById("middle").innerHTML;
    const middleRight = document.getElementById("middleRight").innerHTML;
    const bottomLeft = document.getElementById("bottomLeft").innerHTML;
    const bottomMiddle = document.getElementById("bottomMiddle").innerHTML;
    const bottomRight = document.getElementById("bottomRight").innerHTML;

    if (topLeft != "" && topLeft != "-" &&
        topMiddle != "" && topMiddle != "-" &&
        topRight != "" && topRight != "-" &&
        middleLeft != "" && middleLeft != "-" &&
        middle != "" && middle != "-" &&
        middleRight != "" && middleRight != "-" &&
        bottomLeft != "" && bottomLeft != "-" &&
        bottomMiddle != "" && bottomMiddle != "-" &&
        bottomRight != "" && bottomRight != "-"
    ) {
        document.getElementById("displayDiv").innerHTML = ("Game Over!");
        document.getElementById("displayDiv").style.color = colorLost;

    } else {
        //    AMY 1 2 3 topLeft topMiddle topRight
        if (topLeft != "" && topMiddle != "" && topRight != "") {
            if (topLeft === topMiddle && topLeft === topRight) {
                if (topMiddle == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins!");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Player 2 wins!");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = "#00900A";
            }
        }

        // AMY 4 5 6 middleLeft middle middleRight
        if (middleLeft != "" && middle != "" && middleRight != "") {
            if (middleLeft === middle && middleLeft === middleRight) {
                if (middleLeft == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins!");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Player 2 wins!");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }

        // KATE 7 8 9 bottomLeft bottomMiddle bottomRight
        if (bottomLeft != "" && bottomMiddle != "" && bottomRight != "") {
            if (bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
                if (bottomLeft == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins!");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Player 2 wins!");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }

        // Kate 1 4 7 topLeft middleLeft bottomLeft
        if (topLeft != "" && middleLeft != "" && bottomLeft != "") {
            if (topLeft === middleLeft && topLeft === bottomLeft) {
                if (topLeft == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins!");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Player 2 wins!");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }

        // DANIEL  2 5 8 topMiddle middle bottomMiddle
        if (topMiddle != "" && middle != "" && bottomMiddle != "") {
            if (topMiddle === middle && topMiddle === bottomMiddle) {
                if (topMiddle == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Plater 2 wins");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }

        // DANIEL 3 6 9 topRight middleRight bottomRight
        if (topRight != "" && middleRight != "" && bottomRight != "") {
            if (topRight === middleRight && topRight === bottomRight) {
                if (topRight == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Plater 2 wins");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }

        //LIS 1 5 9 topLeft middle bottomRight 
        if (topLeft != "" && middle != "" && bottomRight != "") {
            if (topLeft === middle && topLeft === bottomRight) {
                if (topLeft == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Plater 2 wins");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }

        // LIS 7 5 3 bottomLeft middle topRight
        if (bottomLeft != "" && middle != "" && topRight != "") {
            if (bottomLeft === middle && bottomLeft === topRight) {
                if (bottomLeft == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Plater 2 wins");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }
    }
}

function completeBoard() {
    if (document.getElementById("topLeft").innerHTML == "")
        document.getElementById("topLeft").innerHTML = "-";
    if (document.getElementById("topMiddle").innerHTML == "")
        document.getElementById("topMiddle").innerHTML = "-";
    if (document.getElementById("topRight").innerHTML == "")
        document.getElementById("topRight").innerHTML = "-";
    if (document.getElementById("middleLeft").innerHTML == "")
        document.getElementById("middleLeft").innerHTML = "-";
    if (document.getElementById("middle").innerHTML == "")
        document.getElementById("middle").innerHTML = "-";
    if (document.getElementById("middleRight").innerHTML == "")
        document.getElementById("middleRight").innerHTML = "-";
    if (document.getElementById("bottomLeft").innerHTML == "")
        document.getElementById("bottomLeft").innerHTML = "-";
    if (document.getElementById("bottomMiddle").innerHTML == "")
        document.getElementById("bottomMiddle").innerHTML = "-";
    if (document.getElementById("bottomRight").innerHTML == "")
        document.getElementById("bottomRight").innerHTML = "-";
}



