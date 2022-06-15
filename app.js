const etchBoard = document.getElementById("board");
let color = "black";

function setGrid(size) {
    etchBoard.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`;
    let gridSize = size * size;
    
    for (i = 0; i < gridSize; i++) {
        let square = document.createElement("div")
        etchBoard.appendChild(square);
        square.classList.add("square");
        document.getElementById("rainbow").addEventListener("click", getRainbow);
    }

    let squares = etchBoard.querySelectorAll("div");
    squares.forEach((div) => (div.addEventListener("mouseover", () => {
        div.style.backgroundColor = color;
    })));
}

setGrid(16);

function resetBoard() {
    let squares = etchBoard.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "aliceblue"));
}

function getEraser() {
    let squares = etchBoard.querySelectorAll("div");
    squares.forEach((div) => (div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "aliceblue";
    })));
}

function getBlack() {
    let squares = etchBoard.querySelectorAll("div");
    squares.forEach((div) => (div.addEventListener("mouseover", () => {
        div.style.backgroundColor = color;
    })));
}

function getRainbow() {
    let squares = etchBoard.querySelectorAll("div");
    squares.forEach((div) => (div.addEventListener("mouseover", () => {
        div.style.backgroundColor = getRandomColor();
    })));
}

function getRandomColor() {
    const random = Math.floor((Math.random() * 360) + 1);
    let rainbow = `hsl(${random}, 100%, 50%)`;
    return rainbow;
}

document.getElementById("change-size").addEventListener("click", function() {
    let input = prompt("Please enter number between 2 and 100");
    resetBoard();

    if (input >= 2 && input <= 100) {
        setGrid(input);
    } else {
        alert("Number must be between 2 and 100");
    }
});

document.getElementById("black").addEventListener("click", getBlack);
document.getElementById("eraser").addEventListener("click", getEraser);
document.getElementById("clear-board").addEventListener("click", resetBoard);