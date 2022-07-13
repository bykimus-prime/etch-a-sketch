const grid = document.querySelector('#grid');
makeGrid(16, 16);
// let mouseDown = false; // this is for mousedown 'hold to write'

// creates the grid
function makeGrid(rows, columns) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement('div');
        grid.appendChild(square).className = 'cell';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    }
}

const resetGridBtn = document.querySelector('#resetGridBtn');

resetGridBtn.addEventListener('click', () => resetGrid());

function resetGrid() {
    document.querySelectorAll('.cell').forEach(e => e.remove());
    let userInput = prompt('Please enter the number of grid squares per side (length x width, max: 100): ');
    if (userInput > 100) {
        alert('ERROR! You specified a grid size larger than the max of 100.');
        return;
    }
    rows = userInput;
    columns = userInput;
    makeGrid(rows, columns)
}

// this is for mousedown 'hold to write'
// document.addEventListener('mouseover', function (e) {
//     if (mouseDown) {
//         if (e.target.className === 'grid-item') {
//             e.target.style.backgroundColor = 'black';
//         }
//     }
// })

// window.addEventListener('mousedown', () => {
//     mouseDown = true;
// })
// window.addEventListener('mouseup', () => {
//     mouseDown = false;
// })