/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'blue',
    '-1': 'purple'
};

/*----- state variables -----*/
let board; /* array of 7 col array*/
let turn; /* 1 or -1 */
let winner; /* null = no winner; 1 or -1 = winner; 'T' = Tie

	/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
// this line of code is a common way to get a reference to an HTML element in JavaScript, so that you can manipulate its properties or respond to events that occur on that element.
const playAgainBtn = document.querySelector('button');
const triangleEls = [...document.querySelectorAll('#triangles > div')];

/*----- event listeners -----*/
document.getElementById('triangles').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/
// Initialize all state, then call render()
function init() {

    board = [
        // To visualize the boards mapping to the Dom, rotate the boards array 90 deg counter clockwise
    /*first col*/[0, 0, 0, 0, 0, 0], //col 0
    /*second col*/[0, 0, 0, 0, 0, 0], //col 1
    /*third col*/[0, 0, 0, 0, 0, 0], //col 2
    /*fourth col*/[0, 0, 0, 0, 0, 0], //col 3
    /*fifth col*/[0, 0, 0, 0, 0, 0], //col 4
    /*sixth col*/[0, 0, 0, 0, 0, 0], //col 5
    /*seventh col*/[0, 0, 0, 0, 0, 0], //col 6
    ];

    turn = 1;
    winner = null;
    render();
}
init();
console.log(board)

// In response to use interaction, update all impacted state, then call render();
function handleDrop(evt) {
    const colIdx = triangleEls.indexOf(evt.target);
    // Guards...
    if (colIdx === -1) return;
    // Shortcut to the column array
    const colArr = board[colIdx];
    // Find the index of the first 0 in colArr
    const rowIdx = colArr.indexOf(0);
    // Update the board state with the cur player value (turn)
    colArr[rowIdx] = turn;
    // switch player turn
    turn *= -1;
    // turn = turn *-1;

    // Check for winner
    winner = getWinner(colIdx, rowIdx);
    render();
}

// Check for winner in board state and return null if no winner, 1/-1 if a player has won, 'T' if tie
function getWinner(colIdx, rowIdx) {
    return checkVerticalWin(colIdx, rowIdx) ||
      checkHorizontalWin(colIdx, rowIdx) ||
      checkDiagonalWinNESW(colIdx, rowIdx) ||
      checkDiagonalWinNWSE(colIdx, rowIdx);
  }
  
  function checkDiagonalWinNWSE(colIdx, rowIdx) {
    const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1);
    const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1);
    return (adjCountNW + adjCountSE) >= 3 ? board[colIdx][rowIdx] : null;
  }
  
  function checkDiagonalWinNESW(colIdx, rowIdx) {
    const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1);
    const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1);
    return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null;
  }
  
  function checkHorizontalWin(colIdx, rowIdx) {
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0);
    const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
    return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null;
  }
  
  function checkVerticalWin(colIdx, rowIdx) {
    return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null;
  }
  
  function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
    // Shortcut variable to the player value
    const player = board[colIdx][rowIdx];
    // Track count of adjancent cells with the same player value
    let count = 0;
    // Initialize new coordinates
    colIdx += colOffset;
    rowIdx += rowOffset;
    while (
      // Ensure colIdx is within bounds of the board array
      board[colIdx] !== undefined &&
      board[colIdx][rowIdx] !== undefined &&
      board[colIdx][rowIdx] === player
    ) {
      count++;
      colIdx += colOffset;
      rowIdx += rowOffset;
    }
    return count;
  }

// Visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    // Hide/show UI elements (controls)
    renderControls();
}
// it is common to identify the necessary functions for rendering a game and then create them separately from the render() function.

function renderBoard() {
    board.forEach(function (colArr, colIdx) {
        // Iterate over the cells in the current column (colArr)
        colArr.forEach(function (cellVal, rowIdx) {
            // console.log(colIdx, rowIdx, cellVal)

            const cellId = `c${colIdx}r${rowIdx}`;
            // cellId is constructed by concatenating the string "c" with the value of colIdx, followed by the string "r" and the value of rowIdx. So, if colIdx is 3 and rowIdx is 4, cellId would be "c3r4".

            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
            // console.log(cellEl);
        });
    });

}
// for each column. we are calling 7

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "Its a tie!";
    } else if (winner) {
        messageEl.innerHTML = `<span style= "color: ${COLORS[winner]}" >${COLORS[winner].toUpperCase()}</span> WINS!!!`;
    } else {
        messageEl.innerHTML = `<span style= "color: ${COLORS[turn]}" >${COLORS[turn].toUpperCase()}</span>'s Turn`;

        //         The string starts with an opening backtick (`) to denote a template literal.
        // // The string then includes an opening <span> tag, which sets an inline style using the style attribute to change the color of the text to the color associated with the current turn.
        // // The dynamic text ${COLORS[turn].toUpperCase()} is included in the middle of the <span> tag, which generates the name of the current player in uppercase text.
        // // Finally, the string includes the text 's Turn' outside of the <span> tag, which indicates that it is the current player's turn.
        // // Overall, this line of code is a way to update the content of an HTML element to provide feedback to the user about the current state of the application, specifically whose turn it is. By using a template literal and dynamically generating the content based on the current state of the application, the code can be more modular and easier to maintain.
    }
}

function renderControls() {
    // Ternary expression is the go to when you want 1 of 2 vaues returned.
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';

    // The ? and : in this code are part of a conditional (ternary) operator, which is a shorthand way of writing an if-else statement. It checks the value of winner and selects one of the two values ('visible' or 'hidden') based on the result of the check.

    // Iterate over the marker elements to hide/show according to the column being full or not
    triangleEls.forEach(function (triangleEl, colIdx) {
        const hideTriangle = !board[colIdx].includes(0) || winner

        // This line of code is written in JavaScript and it sets a variable called hideTriangle to either true or false based on the value of two conditions.
        // The first condition checks if a particular column in a game board does not contain the number 0. The second condition checks if there is a winner in the game.
        // If either of these conditions is true, the value of hideTriangle will be true. If both conditions are false, the value of hideTriangle will be false.
        // This variable is likely used to control whether a triangular shape or indicator is displayed on the game board. If hideTriangle is true, the shape will be hidden, and if it is false, the shape will be displayed.
        triangleEl.style.visibility = hideTriangle ? 'hidden' : 'visible';
    });
}

