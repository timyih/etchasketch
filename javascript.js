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



    const grid = document.createElement('div');
    container.appendChild(grid);

    grid.setAttribute('style', `display: grid; grid-template-columns: repeat(${gridSize}, 50px); grid-template-rows: repeat(${gridSize}, 50px); grid-gap: 5px;`);

    for (let i = 0; i < gridSize*gridSize; i++) {
        var div = document.createElement('div');
        grid.appendChild(div);
    }
}

createGrid(16);