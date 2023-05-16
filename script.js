/* Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. 

Don’t try making them by hand with copy and pasting in your HTML file!

It’s best to put your grid squares inside another “container” div 
(which can go directly in your HTML).

You need make the divs appear as a grid (versus just one on each line). 

This is a perfect opportunity to apply what you have learned about flexbox.

Be careful with borders and margins, as they can adjust the size of the squares! */

//create 16 divs with for loop
//first row
const rowOne = document.createElement('div');
    rowOne.setAttribute('id', 'rowOne');
    document.getElementById('gridContainer').appendChild(rowOne);
    rowOne.style.display = 'flex';
for (let i = 0; i < 4; i++) {
    const squareOne = document.createElement('div');
    squareOne.classList.toggle('square_One');
    document.getElementById('rowOne').appendChild(squareOne);
    squareOne.style.cssText = 'background:lightgrey; padding:50px;';
    squareOne.style.flex = 1;
}
//second row
const rowTwo = document.createElement('div');
    rowTwo.setAttribute('id', 'rowTwo');
    document.getElementById('gridContainer').appendChild(rowTwo);
    rowTwo.style.display = 'flex';
for (let i = 0; i < 4; i++) {
    const squareTwo = document.createElement('div');
    squareTwo.classList.toggle('square_Two');
    document.getElementById('rowTwo').appendChild(squareTwo);
    squareTwo.style.cssText = 'background:lightgrey; padding:50px;';
    squareTwo.style.flex = 1;
}
//third row
const rowThree = document.createElement('div');
    rowThree.setAttribute('id', 'rowThree');
    document.getElementById('gridContainer').appendChild(rowThree);
    rowThree.style.display = 'flex';
for (let i = 0; i < 4; i++) {
    const squareThree = document.createElement('div');
    squareThree.classList.toggle('square_Three');
    document.getElementById('rowThree').appendChild(squareThree);
    squareThree.style.cssText = 'background:lightgrey; padding:50px;';
    squareThree.style.flex = 1;
}
//fourth row
const rowFour = document.createElement('div');
    rowFour.setAttribute('id', 'rowFour');
    document.getElementById('gridContainer').appendChild(rowFour);
    rowFour.style.display = 'flex';
for (let i = 0; i < 4; i++) {
    const squareFour = document.createElement('div');
    squareFour.classList.toggle('square_Four');
    document.getElementById('rowFour').appendChild(squareFour);
    squareFour.style.cssText = 'background:lightgrey; padding:50px;';
    squareFour.style.flex = 1;
}

//create square grid container
const grid = document.getElementById('gridContainer');
    grid.style.cssText = 'max-height: 400px; max-width: 400px; margin-left: auto; margin-right: auto;';
    grid.style.boxShadow = '2px 2px 2px 2px grey';
    grid.style.alignSelf = 'center';

//create hover effect
//first row
let getSquareOne = document.getElementsByClassName('square_One');
/*console.log(getSquareOne);  returns array like object */
//loop through all array elements 
for (let i = 0; i < getSquareOne.length; i++) {
getSquareOne[i].addEventListener('mouseover', () => {
    getSquareOne[i].style = 'background: black; padding:50px;';
    getSquareOne[i].style.flex = 1; 
});
};
//second row
let getSquareTwo = document.getElementsByClassName('square_Two'); 
for (let i = 0; i < getSquareTwo.length; i++) {
    getSquareTwo[i].addEventListener('mouseover', () => {
        getSquareTwo[i].style = 'background: black; padding:50px;';
        getSquareTwo[i].style.flex = 1; 
    });
};
//third row
let getSquareThree = document.getElementsByClassName('square_Three');
for (let i = 0; i < getSquareThree.length; i++) {
    getSquareThree[i].addEventListener('mouseover', () => {
        getSquareThree[i].style = 'background: black; padding:50px;';
        getSquareThree[i].style.flex = 1; 
    });
};

//fourth row
let getSquareFour = document.getElementsByClassName('square_Four');
for (let i = 0; i < getSquareFour.length; i++) {
    getSquareFour[i].addEventListener('mouseover', () => {
        getSquareFour[i].style = 'background: black; padding:50px;';
        getSquareFour[i].style.flex = 1; 
    });
};



    
