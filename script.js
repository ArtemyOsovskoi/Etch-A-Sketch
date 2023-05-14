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
    squareOne.setAttribute('id', 'squareOne');
    document.getElementById('rowOne').appendChild(squareOne);
    squareOne.style.cssText = 'background:lightgrey; padding:50px; margin:5px;';
    squareOne.style.flex = 1;
}

//second row
const rowTwo = document.createElement('div');
    rowTwo.setAttribute('id', 'rowTwo');
    document.getElementById('gridContainer').appendChild(rowTwo);
    rowTwo.style.display = 'flex';
for (let i = 0; i < 4; i++) {
    const squareTwo = document.createElement('div');
    document.getElementById('rowTwo').appendChild(squareTwo);
    squareTwo.style.cssText = 'background:blue; padding:50px; margin:5px;';
    squareTwo.style.flex = 1;
}

//third row
const rowThree = document.createElement('div');
    rowThree.setAttribute('id', 'rowThree');
    document.getElementById('gridContainer').appendChild(rowThree);
    rowThree.style.display = 'flex';
for (let i = 0; i < 4; i++) {
    const squareThree = document.createElement('div');
    document.getElementById('rowThree').appendChild(squareThree);
    squareThree.style.cssText = 'background:yellow; padding:50px; margin:5px;';
    squareThree.style.flex = 1;
}

//fourth row
const rowFour = document.createElement('div');
    rowFour.setAttribute('id', 'rowFour');
    document.getElementById('gridContainer').appendChild(rowFour);
    rowFour.style.display = 'flex';
for (let i = 0; i < 4; i++) {
    const squareFour = document.createElement('div');
    document.getElementById('rowFour').appendChild(squareFour);
    squareFour.style.cssText = 'background:green; padding:50px; margin:5px;';
    squareFour.style.flex = 1;
}

//create square grid
const grid = document.getElementById('gridContainer');
    grid.style.cssText = 'height: 500px; width: 500px;';

//create click effect
let clickOne = document.getElementById('squareOne');
    clickOne.addEventListener('click', () => {
        document.getElementById('squareOne').style = 'background: pink';
});
    
