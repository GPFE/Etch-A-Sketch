let gridSize = 16;
let rainbowMode = false;
let specialPaint = false;

const container = document.querySelector("#container");
const options = document.querySelector("#options");


function removeCanvas() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
function changeGridSize() {
    let newGridSize = Number(prompt("Please select a number between 2 and 100"));

    if (newGridSize > 1 && newGridSize <= 100) {
        gridSize = newGridSize;
        removeCanvas();
        createCanvas()
    }

}
function createCanvas() {
    const row = document.createElement("div");
    row.style.height = `calc(100% / ${gridSize})`;
    row.classList.add("row");

    const block = document.createElement("div");
    block.style.width = `calc(100% / ${gridSize})`;
    block.style.color = "black";
 

    for (i = 0; i < gridSize; i++) {
        let blockCopy = block.cloneNode(true);
        row.appendChild(blockCopy);
    }

    for (i = 0; i < gridSize; i++) {
        let rowCopy = row.cloneNode(true);
        container.appendChild(rowCopy);
    }
}
function clearCanvas() {
    removeCanvas();
    createCanvas();
}


createCanvas();
container.addEventListener("mouseover", (event) => {
    let target = event.target;
    let color =  `rgb(255 200 51)`;

    if (rainbowMode === true) {
        let randomTint = Math.floor(Math.random() * 100) + 140;
        document.body.style.backgroundColor = `rgb(255, ${randomTint}, 51, 0.2)`;
        color = `rgb(255 ${randomTint} 51)`;
    }
    else {
        color = `rgb(255 200 51)`;
    }
    
    target.style.backgroundColor = color;
});

options.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rainbow":
            target.classList.toggle("activeButton");
            (rainbowMode == true) ? rainbowMode = false : rainbowMode = true;
        break;

        case "clear":
            clearCanvas();
        break;

        case "changeCanvas":
            changeGridSize();
        break;

    }
})