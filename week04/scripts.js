const gameBoard = document.querySelector(`#gameWrapper`);
const oIcon = document.createElement(`img`);
const xIcon = document.createElement(`img`);

oIcon.src = `o.png`;
xIcon.src = `x.png`;


function handleTouch(p){
    console.log("It Works");
    p.target.appendChild(xIcon);
}
gameBoard.addEventListener('touchend', handleTouch);

