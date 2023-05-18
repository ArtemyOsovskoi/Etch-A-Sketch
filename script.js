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
//create default 16x16 div grid 
function gridContainer (makeRow, makeColumn) {
    makeRow(16);
    makeColumn(16);
};
//fire grid function
console.log(gridContainer(makeRow, makeColumn));

//rows function - create 16 div row containers and append it to main div container
function makeRow (num) {
    for (r = 0; r < num; r++) {
        let gridRow = document.createElement('div');
        gridRow.classList.toggle('row');
        container.appendChild(gridRow);
        gridRow.style.display = 'flex';
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
            /* gridColumn.classList.toggle('column'); */
            let gridSquare = rows[i].appendChild(gridColumn);
            gridSquare.classList.toggle('square');
            gridSquare.style.cssText = 'background:lightgrey; padding:12px';
            gridSquare.style.display = 'flex';
        };
    };
};

//self check: count divs 
let count = document.querySelectorAll('.square').length;
    console.log(count);

///hover effect
let squareHover = document.getElementsByClassName('square');
for (let i = 0; i < squareHover.length; i++) {
    squareHover[i].addEventListener('mouseover', () => {
        squareHover[i].style.cssText = 'background: black; padding:12px';
    });
};

//change grid size button - get popup after click, enter the number and get new grid size
/* Add a button that will send the user a popup asking for the number of squares per side for the new grid. 
Once entered, the existing grid should be removed and a new grid should be generated 
in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad

Tip: Set the limit for the user input to a maximum of 100. 
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used. */
//access button
let changeGridButton = document.getElementById('changeGridButton');

//change grid button
changeGridButton.addEventListener('click', () => {
    let askSize = Number(window.prompt('Please enter the number of squares less than 100', ''));
    console.log(askSize);
    if (askSize < 100) {
        function gridContainer (makeRow, makeColumn) {
            makeRow(askSize);
            makeColumn(askSize);
        };
        return gridContainer(makeRow, makeColumn);
    } else if (askSize > 100) {
        alert('Please enter any number below 100');
    };
});



