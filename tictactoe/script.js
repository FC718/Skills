// const 
COLORS ={
    'null': 'white',
    '1': 'pink',
    '-1': 'purple'
};

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

/*----STATE VARIABLES -----*/
let board,turn, winner;

/*----- cached elements  -----*/
const message = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');

/*Event Listeners */
document.getElementById('board').addEventListener('click', handleMove);
playAgainBtn.addEventListener('click', initialize);


/* Functions */
initialize();

function initialize() {
    board = [null,null,null,null,null,null,null,null,null];
    turn = 1;
    winner = null;
// render();
}

function handleMove(evt) {
  // obtain index of square
  const idx = parseInt(evt.target.id.replace('sq-', ''));
  // Guards
  if (
    // Didn't click <div> in grid
    isNaN(idx) ||
    // Square already taken
    board[idx] ||
    // Game over
    winner
  ) return;
  // Update state (board, turn, winner)
  board[idx] = turn;
  turn *= -1;
  winner = getWinner();
  // Render updated state
  render();
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {    
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3)
    return board[winningCombos[i][0]];
  } if (board.includes(null)) return null;
  return 'T';
}


function renderMessage() {
    if (winner === 'T') {
        message.innerHtml = 'Tie!'
    } else if (winner) {
        message.innerHTML = `Congrats <span-"color: ${COLOR_LOOKUP[winner]}">${COLOR_LOOKUP[winner].toUpperCase()}</span>!`;
    } else {
        message.innerHTML = `<span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
    }
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
  } if (board.includes(null)) return null;
  return 'T';
}

function render() {
  renderBoard();
  renderMessage();
  // Hide/show PLAY AGAIN button
  playAgainBtn.disabled = !winner;
}

function renderBoard() {
  board.forEach(function(sqVal, idx) {
    const squareEl = document.getElementById(`sq-${idx}`);
    squareEl.style.backgroundColor = COLORS[sqVal];
    // Add class if square available for hover effect
    squareEl.className = !sqVal ? 'avail' : '';
  });
}

function renderMessage() {
  if (winner === 'T') {
    message.innerHTML = 'Tie Game!';
  } else if (winner) {
    message.innerHTML = `Congrats <span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span>!`;
  } else {
    message.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
  }
}