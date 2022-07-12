const containerDiv = document.querySelector('#container');
// let mouseDown = false; // this is for mousedown 'hold to write'

function makeRows(rows, columns) {
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

makeRows(16, 16);

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