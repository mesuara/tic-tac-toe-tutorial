/*----- constants -----*/


/*----- app's state (variables) -----*/
let board;
let turn = 'X';

function init() {
board = [
'', '', '',
'', '', '',
'', '', ''
];

  render();
};

init();

function render() {
board.forEach(function(mark, index){

  squares[index].textContent = mark;

console.log(mark, index);
});
};

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/


/*----- functions -----*/
function handleTurn(event) {
let idx = squares.findIndex(function(square) {
return square === event.target;
});
};

