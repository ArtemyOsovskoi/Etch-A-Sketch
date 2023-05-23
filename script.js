/* Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. 
Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div 
(which can go directly in your HTML).
You need make the divs appear as a grid (versus just one on each line). 
This is a perfect opportunity to apply what you have learned about flexbox.
Be careful with borders and margins, as they can adjust the size of the squares! */

//store variables
let container = document.getElementById('gridContainer');
let rows = document.getElementsByClassName('row');
let columns = document.getElementsByClassName('column');
let squares = document.getElementsByClassName('square');

//create default 16x16 div grid 
function makeGrid () {
    makeRow(16);
    makeColumn(16);
};
//fire grid function
makeGrid(makeRow, makeColumn);

//rows function - create 16 div row containers and append it to main div container
function makeRow (num) {
    for (r = 0; r < num; r++) {
        let gridRow = document.createElement('div');
        gridRow.classList.toggle('row');
        container.appendChild(gridRow);
     /* gridRow.style.display = 'flex';
        gridRow.style.flex = 1; */
    };
};

//columns function - create 16 div squares in each div row with 2 loops
//first loop will go through rows given length
//second loop creates div squares in each row with [i] index help
//because variable rows contains html collection like an array
//so we get an element from that array
//in result we get 256 square divs - 16 in each row (16)
function makeColumn (num) {
    for(c = 0; c < rows.length; c++) {
        for (i = 0; i < num; i++) {
            let gridColumn = document.createElement('div');
            gridColumn.classList.toggle('column');
            let gridSquare = rows[i].appendChild(gridColumn);
            gridSquare.classList.toggle('square');
            gridSquare.style.cssText = 'background:lightgrey;';
        };
    };
};

//self check: count divs 
let count = document.querySelectorAll('.square').length;
    console.log(count);

///hover effect
function hover () {
    let squareHover = document.getElementsByClassName('square');
    for (let i = 0; i < squareHover.length; i++) {
        squareHover[i].addEventListener('mouseover', () => {
            squareHover[i].style.cssText = 'background: black;';
        });
    };
}
hover();

//change grid button
let changeGridButton = document.getElementById('changeGridButton');

changeGridButton.addEventListener('click', () => {
    let getSize = Number(window.prompt('Please set grid size, max 100', ''));
        console.log(getSize+' '+'squares entered');//self check

    //remove old grid with while loop
    //when container.firstChild has no more children - the loop will stop
    //it's removing child divs inside the container while container.firstChild (loop condition) is true
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };

    if (getSize < 100) {
        function changeGrid () {
            makeRow(getSize);
            makeColumn(getSize);
        }
        changeGrid(makeRow, makeColumn);
        hover();
    } else if (getSize > 100) {
        alert('Please enter any number below 100');
    };
});

//eraser button
let eraserButton = document.getElementById('eraser');
eraserButton.addEventListener('click', () => {
    let eraserHover = document.getElementsByClassName('square');
    for (let i = 0; i < eraserHover.length; i++) {
        eraserHover[i].addEventListener('mouseover', () => {
        eraserHover[i].style.cssText = 'background: lightgrey;';
    });
};
});

//clean all function
let cleanButton = document.getElementById('cleanAll');
cleanButton.addEventListener('click', () => {
    let allSquares = document.getElementsByClassName('square');
    for (let i = 0; i < allSquares.length; i++) {  
        allSquares[i].style.cssText = 'background: lightgrey;';
    }
});
