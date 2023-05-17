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
//create 16x16 div grid 
function grid (makeRow, makeColumn) {
    makeRow(16);
    makeColumn(16);
};
//fire grid function
console.log(grid(makeRow, makeColumn));

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
            gridSquare.style.cssText = 'background:lightgrey; padding:4px';
            gridSquare.style.display = 'flex';
        };
    };
};

//self check: count divs 
let count = document.querySelectorAll('.square').length;
    console.log(count);



//create hover effect
//first row
//let getSquareOne = document.getElementsByClassName('square_One');
/*console.log(getSquareOne);  returns array like object */
//loop through all array elements 
/* for (let i = 0; i < getSquareOne.length; i++) {
getSquareOne[i].addEventListener('mouseover', () => {
    getSquareOne[i].style = 'background: black; padding:50px;';
    getSquareOne[i].style.flex = 1; 
});
}; */
//second row
/* let getSquareTwo = document.getElementsByClassName('square_Two'); 
for (let i = 0; i < getSquareTwo.length; i++) {
    getSquareTwo[i].addEventListener('mouseover', () => {
        getSquareTwo[i].style = 'background: black; padding:50px;';
        getSquareTwo[i].style.flex = 1; 
    });
}; */
//third row
/* let getSquareThree = document.getElementsByClassName('square_Three');
for (let i = 0; i < getSquareThree.length; i++) {
    getSquareThree[i].addEventListener('mouseover', () => {
        getSquareThree[i].style = 'background: black; padding:50px;';
        getSquareThree[i].style.flex = 1; 
    });
}; */

//fourth row
/* let getSquareFour = document.getElementsByClassName('square_Four');
for (let i = 0; i < getSquareFour.length; i++) {
    getSquareFour[i].addEventListener('mouseover', () => {
        getSquareFour[i].style = 'background: black; padding:50px;';
        getSquareFour[i].style.flex = 1; 
    });
}; */



    
