const top_left = document.querySelector(`#topLeft`);
const oIcon = document.createElement(`img`);
const xIcon = document.createElement(`img`);

oIcon.src = `o.png`;
xIcon.src = `x.png`;


function handleTouch(){
    console.log("It Works");
    top_left.appendChild(xIcon);
}
top_left.addEventListener('touchend', handleTouch);

