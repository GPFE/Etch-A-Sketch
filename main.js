let gridSize = 16;

const container = document.querySelector("#container");
const row = document.createElement("div");
row.classList.add("row");   

const numberOfBlocks = gridSize;
const rowSize = gridSize;
row.style.width = `${rowSize}em`;

for (i = 0; i <= numberOfBlocks; i++) {
    const block = document.createElement("div");
    block.style.height = `${rowSize / numberOfBlocks}em`;
    block.style.width = `${rowSize / numberOfBlocks}em`;
    row.appendChild(block);
}

for (i = 0; i < numberOfBlocks; i++) {
    rowClone = row.cloneNode(true)
    container.appendChild(rowClone);
}

container.addEventListener ("mouseover", (event) => {
    let target = event.target;
    let randomTone = Math.floor(Math.random() * 200);
    target.style.background = `rgb(255 ${randomTone} 25)`;
});