const containerDiv = document.querySelector('#container');
// let mouseDown = false; // this is for mousedown 'hold to write'

// creates the grid
function makeGrid(rows, columns) {
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement('div');
        containerDiv.appendChild(square).className = 'grid-item';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    }
}

const resetGridBtn = document.querySelector('#resetGridBtn');

resetGridBtn.addEventListener('click', () => resetGrid());

function resetGrid() {
    document.querySelectorAll('.grid-item').forEach(e => e.remove());
    let userInput = prompt('Please enter the number of grid squares per side (max: 100, it will be a square): ');
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