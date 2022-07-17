const grid = document.getElementById('grid');
const defaultColor = 'black';
const defaultMode = 'color'
makeGrid(16);
let currentColor = defaultColor;
let currentMode = defaultMode;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}

// button panel
const defaultColorBtn = document.getElementById('defaultColorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const shadeBtn = document.getElementById('shadeBtn');
const eraserBtn = document.getElementById('eraserBtn');
const resetGridBtn = document.getElementById('resetGridBtn');

// button click events
defaultColorBtn.addEventListener('click', () => setCurrentMode('color'));
rainbowBtn.addEventListener('click', () => setCurrentMode('rainbow'));
shadeBtn.addEventListener('click', () => setCurrentMode('shade'));
eraserBtn.addEventListener('click', () => setCurrentMode('eraser'));
resetGridBtn.addEventListener('click', () => resetGrid());

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

// changes color of paint
function changeColor (e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = 'black';
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}

// reset grid
function resetGrid() {
    document.querySelectorAll('.cell').forEach(e => e.remove());
    let userInput = prompt('Please enter the number of grid squares per side (length x width, max: 60): ');
    if (userInput > 60) {
        alert('ERROR! You specified a grid size larger than the max of 60.');
        return;
    }
    size = userInput;
    makeGrid(size);
}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
        defaultColorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active')
    }

    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
        defaultColorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active')
    }
}

window.onload = () => {
    activateButton(defaultMode);
}