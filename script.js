const gridSize = document.getElementById('grid-size');
const oneColor = document.getElementById('one-color');
const getColor = document.getElementById('get-color');
const allColors = document.getElementById('all-colors');
const container = document.getElementById('container');

window.onload = function() {
    oneColor.checked = true;
}

gridSize.addEventListener('click', function() {
    resetGrid();
    getGridSize();
});

oneColor.addEventListener('change', () => {
    allColors.checked = false;
});

allColors.addEventListener('change', () => {
    oneColor.checked = false;
});

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getGridSize() {
    let rows = prompt('How many Rows? From 1 to 70.', 20);
    let cols = prompt('How many Columns? From 1 to 70.', 30);

    if (rows < 1 || rows > 70 || cols < 1 || cols > 70) {
        alert('Chose a number from 1 to 70.');

    } else {

        for (c = 0; c < (rows * cols); c++) {
            const cell = document.createElement('div');   
            cell.className = 'grid-cell';
            
            cell.addEventListener("mouseover", fillCell);

            container.appendChild(cell);
        };

        gridMaxWidth = `${cols * 20}px`;
        document.getElementById('container').style.maxWidth = gridMaxWidth;

        gridMaxHeight = `${rows * 20}px`;
        document.getElementById('container').style.maxHeight = gridMaxHeight;
        
}};

function fillCell(event) {
    if (oneColor.checked) {
        const color = getColor.value;
        event.target.style.backgroundColor = color;
    } else if (allColors.checked) {
        const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        event.target.style.backgroundColor = color;
    }
  }