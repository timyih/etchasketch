function createGrid(gridSize) {
    const container = document.querySelector("div.container");

    for (let i = 0; i < gridSize; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < gridSize; j++) {
            var div = document.createElement('div');
            div.setAttribute('class', 'cell');
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function resize() {
    var size = prompt("Enter a number for the size of grid", 16);

    if (!isNaN(size) && size <= 100) {
        const container = document.querySelector('div.container');
        removeAllChildren(container);
        createGrid(size);
        pen();
    }
}

function reset() {
    var cells = document.querySelectorAll('div.colored');
    cells.forEach(cell => cell.classList.remove('colored'));
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function eraser() {
    var cells = document.querySelectorAll('div.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function (e) { if (e.buttons == 1) {cell.classList.remove('colored')}}));
}

function pen() {
    var cells = document.querySelectorAll('div.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function (e) { if (e.buttons == 1) {cell.classList.add('colored')}}));
}

createGrid(30);
pen();



// const resetButton = document.querySelector('button.reset');
// resetButton.addEventListener('onclick', function () {
//     var size = prompt("Enter a number for the size of grid", 16);
//     alert(size);

//     if (!isNaN(size) && size <= 100) {
//         const rows = document.querySelectorAll('row');
//         rows.forEach(row => row.remove());
//         createGrid(size);
//     }
// });