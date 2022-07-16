const grid = document.querySelector('#grid');
makeGrid(16, 16);

// this is for mousedown 'hold to write'
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// creates the grid
function makeGrid(rows, columns) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        // grid.appendChild(square).className = 'cell';
        // square.addEventListener('mouseover', () => {
        //     square.style.backgroundColor = 'black';
        // })
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mouseDown', changeColor);
        grid.appendChild(square);
    }
}

function changeColor (e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black';
}

// reset button
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
//         if (e.target.className === 'cell') {
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