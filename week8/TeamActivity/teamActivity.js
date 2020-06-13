let starShipsArray = [];

fetch('https://swapi.dev/api/starships/', {
    method: 'GET'
})

    .then(response => {
        return response.json();
    })

    .then(starships => {
        let ships = starships.results;
        let nextURL = starships.next;
        let previousURL = starships.previous;
        const previous = document.getElementById('previous');
        const next = document.getElementById('next');
        let output = document.getElementById("output");
        showShips(ships);

        if (nextURL) {
            next.onclick = () => nextTen(nextURL);
        }

        if (previousURL) {
            next.onclick = () => nextTen(previousURL);
        }
    })

function showShips(ships) {
    outputList.innerHTML = "";
    for (let i = 0; i < ships.length; i++) {
        let outputDiv = outputList.appendChild(createElement("div", ships[i].name, "starships"));
        outputDiv.addEventListener("click", details);
        outputDiv.setAttribute("id", ships[i].name)
        starShipsArray.push(ships[i]);
    }
}

function details(event) {
    let target = event.target;
    let id = target.getAttribute("id");
    let ship = starShipsArray[selectShip(id)];
    let model = ship.model;
    let manufacturer = ship.manufacturer;
    let starship_class = ship.starship_class;
    let outputList = document.getElementById(id);
    let container = outputList.appendChild(createElement("div", "", "container"))
    container.appendChild(createElement("div", "Model: " + model, "model"));
    container.appendChild(createElement("div", "Manufacturer: " + manufacturer, "manufacturer"));
    container.appendChild(createElement("div", "Class: " + starship_class, "starship_class"));

    const buttonClose = container.appendChild(createElement("input"));
    buttonClose.setAttribute("id", "buttonClose");
    buttonClose.setAttribute("type", "submit");
    buttonClose.setAttribute("value", "x");
    buttonClose.addEventListener("click", close);
}

function close() {
    let container = document.querySelectorAll(".container")[0];
    container.parentNode.removeChild(container);
}
function selectShip(id) {
    let selectShip = starShipsArray.findIndex((obj => obj.name == id));
    return selectShip;
}

function createElement(tag, text, className) {

    const genElement = document.createElement(tag);
    genElement.textContent = text;
    genElement.classList.add(className);
    return genElement;
}

function nextTen(url) {
     const next = document.getElementById('next');
     const previous = document.getElementById('previous');
    if (url) {
        fetch(url)
            .then(response => response.json())
            .then(nextShips => {
                showShips(nextShips.results);

                nextURL = nextShips.next;
                previousURL = nextShips.previous;

                if (nextURL) {
                    next.onclick = () => nextTen(nextURL);
                }

                if (previousURL) {
                    previous.onclick = () => nextTen(previousURL);
                }
            })
    }
}