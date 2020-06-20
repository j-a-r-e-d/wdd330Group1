window.onload = () => {
    let keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransitionState));
    window.addEventListener('keydown', playKey);

};

function playKey(event) {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    moveKey(key);
}

function removeTransitionState(event) {
    if (event.propertyName === 'transform')
        event.target.classList.remove('playing');
}

function moveKey(key) {
    var pixel = parseInt(key.style.transform.substring(11, 13));
    if (key.style.transform == "" || key.style.transform == "translateY(0px)") {
        key.style.transform = 'translateY(10px)';
    }
    else if (pixel != 90) {
        key.style.transform = `translateY(${ pixel + 10}px)`;
    }
    else {
        key.style.transform = "translateY(0px)";
    }
    key.style.transitionDuration = "1s";
}