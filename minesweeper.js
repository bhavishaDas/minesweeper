document.addEventListener('DOMContentLoaded', startGame);
document.addEventListener('click', checkForWin);
document.addEventListener('contextmenu', checkForWin);

// Define your `board` object here!
var board = {
	cells: [
		{
			row: 0,
			col: 0,
			isMine: true,
			hidden: true,
		},
		{
			row: 0,
			col: 1,
			isMine: false,
			hidden: true,
		},
		{
			row: 0,
			col: 2,
			isMine: true,
			hidden: true,
		},
		{
			row: 0,
			col: 3,
			isMine: false,
			hidden: true,
		},
		{
			row: 1,
			col: 0,
			isMine: false,
			hidden: true,
		},
		{
			row: 1,
			col: 1,
			isMine: true,
			hidden: true,
		},
		{
			row: 1,
			col: 2,
			isMine: false,
			hidden: true,
		},
		{
			row: 1,
			col: 3,
			isMine: false,
			hidden: true,
		},
		{
			row: 2,
			col: 0,
			isMine: true,
			hidden: true,
		},

		{
			row: 2,
			col: 1,
			isMine: false,
			hidden: true,
		},
		{
			row: 2,
			col: 2,
			isMine: true,
			hidden: true,
		},
		{
			row: 2,
			col: 3,
			isMine: true,
			hidden: true,
		},
		{
			row: 3,
			col: 0,
			isMine: false,
			hidden: true,
		},
		{
			row: 3,
			col: 1,
			isMine: true,
			hidden: true,
		},
		{
			row: 3,
			col: 2,
			isMine: false,
			hidden: true,
		},
		{
			row: 3,
			col: 3,
			isMine: false,
			hidden: true,
		},
	],
};

function startGame() {
	// Don't remove this function call: it makes the game work!
	var i;
	for (i = 0; i < board.cells.length; i++) {
		// Add surroundingMines property to board.cells
		board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
	}
	lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
	for (const cell of board.cells) {
		if ((cell.isMine && !cell.isMarked) || (!cell.isMine && cell.hidden)) {
			return;
		}
	}
	// You can use this function call to declare a winner (once you've
	// detected that they've won, that is!)
	lib.displayMessage('You win!');
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
	let count = 0;
	var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
	surroundingCells.filter((surroundingCells) =>
		surroundingCells.isMine === true ? count++ : count
	);
	return count;
}
