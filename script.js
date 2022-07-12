const containerDiv = document.querySelector('#container');
// let mouseDown = false; // this is for mousedown 'hold to write'

// creates the grid
function makeGrid(rows, columns) {
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-columns', columns);
    containerDiv.style.width = '960px';
    containerDiv.style.overflow = 'hidden'; // if squares go over 960px, they'll be hidden on screen
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement('div');
        square.style.minHeight = '0'; // prevents 'auto' function
        square.style.minWidth = '0';
        square.style.overflow = 'hidden'; // prevents css grid spillover
        containerDiv.appendChild(square).className = 'grid-item';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    }
}

makeGrid(16, 16);

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