//Set elements to variables
const cell0 = document.getElementById("0");
const cell1 = document.getElementById("1");
const cell2 = document.getElementById("2");
const cell3 = document.getElementById("3");
const cell4 = document.getElementById("4");
const cell5 = document.getElementById("5");
const cell6 = document.getElementById("6");
const cell7 = document.getElementById("7");
const cell8 = document.getElementById("8");
const restartButton = document.getElementById("game--restart");
const allCells = document.querySelectorAll(".cell");
const gameStatus = document.querySelector(".game--status");

//Turn counter
let turn = 0;

//Add bootstrap alert to game--status
const addAlert = () => {
  gameStatus.setAttribute("class", "alert alert-danger text-center");
};

//Function to reset starting items
const restartGame = () => {
  turn = 0;
  for (const cell of allCells) {
    cell.innerHTML = "";
  }

  gameStatus.removeAttribute("class", "alert alert-success");
  gameStatus.setAttribute("class", "text-center");
  gameStatus.innerHTML = "Player 1's turn to place an X";
};

//Button to listen for click
restartButton.addEventListener("click", () => {
  restartGame();
});

//Cells to listen for click
cell0.addEventListener("click", () => {
  checkForEmptyCell(cell0);
});
cell1.addEventListener("click", () => {
  checkForEmptyCell(cell1);
});
cell2.addEventListener("click", () => {
  checkForEmptyCell(cell2);
});
cell3.addEventListener("click", () => {
  checkForEmptyCell(cell3);
});
cell4.addEventListener("click", () => {
  checkForEmptyCell(cell4);
});
cell5.addEventListener("click", () => {
  checkForEmptyCell(cell5);
});
cell6.addEventListener("click", () => {
  checkForEmptyCell(cell6);
});
cell7.addEventListener("click", () => {
  checkForEmptyCell(cell7);
});
cell8.addEventListener("click", () => {
  checkForEmptyCell(cell8);
});

//Function to change the value of cell, game status message, and increment turn and check for winner
const xOrO = (clickedCell) => {
  if (turn % 2 == 0) {
    clickedCell.innerHTML = "X";

    gameStatus.innerHTML = "Player 2's turn to place an O";
    turn++;
  } else {
    clickedCell.innerHTML = "O";

    gameStatus.innerHTML = "Player 1's turn to place an X";
    turn++;
  }
  checkForWinner();
};

//Function to make sure a cell has not been taken
const checkForEmptyCell = (clickedCell) => {
  if (clickedCell.innerHTML != "") {
    gameStatus.innerHTML =
      "You must choose an empty cell to place your mark in";
  } else {
    xOrO(clickedCell);
  }
};

//Function that checks for winning conditions or draw
const checkForWinner = () => {
  if (
    (cell0.innerHTML == "X" &&
      cell1.innerHTML == "X" &&
      cell2.innerHTML == "X") ||
    (cell3.innerHTML == "X" &&
      cell4.innerHTML == "X" &&
      cell5.innerHTML == "X") ||
    (cell6.innerHTML == "X" &&
      cell7.innerHTML == "X" &&
      cell8.innerHTML == "X") ||
    (cell0.innerHTML == "X" &&
      cell3.innerHTML == "X" &&
      cell6.innerHTML == "X") ||
    (cell1.innerHTML == "X" &&
      cell4.innerHTML == "X" &&
      cell7.innerHTML == "X") ||
    (cell2.innerHTML == "X" &&
      cell5.innerHTML == "X" &&
      cell8.innerHTML == "X") ||
    (cell0.innerHTML == "X" &&
      cell4.innerHTML == "X" &&
      cell8.innerHTML == "X") ||
    (cell2.innerHTML == "X" && cell4.innerHTML == "X" && cell6.innerHTML == "X")
  ) {
    gameStatus.innerHTML = `The X's have it....Player 1 wins!!!`;
    addAlert();
    setTimeout(function () {
      alert(`Player 1 has won!!

      Play again?`);
      restartGame();
    });
  } else if (
    (cell0.innerHTML == "O" &&
      cell1.innerHTML == "O" &&
      cell2.innerHTML == "O") ||
    (cell3.innerHTML == "O" &&
      cell4.innerHTML == "O" &&
      cell5.innerHTML == "O") ||
    (cell6.innerHTML == "O" &&
      cell7.innerHTML == "O" &&
      cell8.innerHTML == "O") ||
    (cell0.innerHTML == "O" &&
      cell3.innerHTML == "O" &&
      cell6.innerHTML == "O") ||
    (cell1.innerHTML == "O" &&
      cell4.innerHTML == "O" &&
      cell7.innerHTML == "O") ||
    (cell2.innerHTML == "O" &&
      cell5.innerHTML == "O" &&
      cell8.innerHTML == "O") ||
    (cell0.innerHTML == "O" &&
      cell4.innerHTML == "O" &&
      cell8.innerHTML == "O") ||
    (cell2.innerHTML == "O" && cell4.innerHTML == "O" && cell6.innerHTML == "O")
  ) {
    gameStatus.innerHTML = `The O's have it....Player 2 wins!!!`;
    addAlert();
    setTimeout(function () {
      alert(`Player 2 has won!!
      
      Play again?`);
      restartGame();
    });
  } else if (
    cell0.innerHTML != "" &&
    cell1.innerHTML != "" &&
    cell2.innerHTML != "" &&
    cell3.innerHTML != "" &&
    cell4.innerHTML != "" &&
    cell5.innerHTML != "" &&
    cell6.innerHTML != "" &&
    cell7.innerHTML != "" &&
    cell8.innerHTML != ""
  ) {
    gameStatus.innerHTML = "The game is a DRAW!!!!";
    addAlert();
    setTimeout(function () {
      alert(`The game is a draw!!
      
      Play again?`);
      restartGame();
    });
  }
};
