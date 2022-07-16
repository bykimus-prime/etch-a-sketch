const grid = document.querySelector('#grid');
makeGrid(16);

// this is for 'hold to write' functionality
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// creates the grid
function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', changeColor);
        grid.appendChild(square);
        square.classList.add('border-top-left'); // add class to help prevent double borders
    }

    // add a right border to the right most items, prevent double borders
    const rightItems = document.querySelectorAll(`.cell:nth-child(${size}n)`);
    for (let i = 0; i < rightItems.length; i++) {
        rightItems[i].setAttribute('data-right', 'true');
        rightItems[i].classList.toggle('border-right');
    }

    // add a bottom border to the bottom most items, prevent double borders
    let gridItems = document.querySelectorAll('.cell');
    const lastItems = Array.from(gridItems).slice(-`${size}`);
    for (let i = 0; i < lastItems.length; i++) {
        lastItems[i].setAttribute('data-bottom', 'true');
        lastItems[i].classList.toggle('border-bottom');
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
    let userInput = prompt('Please enter the number of grid squares per side (length x width, max: 40): ');
    if (userInput > 40) {
        alert('ERROR! You specified a grid size larger than the max of 40.');
        return;
    }
    size = userInput;
    makeGrid(size);
}