let currentPlayer = 'x'
// const gameWon = false;
const statusEl = document.getElementById("status")
const restartBtn = document.querySelector(".restartBtn")
const cells = document.querySelectorAll(".grid_cell")
let running = false;
const winConditions =[
     [0, 1, 2],  
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
    [2, 4, 6]
]


let theOptions = ["","","","","","","","","",]

InitializeGame()

function InitializeGame() {
    cells.forEach((cell) => 
        {cell.addEventListener('click',  cellClicked)})
restartBtn.addEventListener("click", restartGame)    
    statusEl.textContent = `${currentPlayer}'s playing`
    running = true
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex")
    if(theOptions[cellIndex] != '' || !running) {
        return;
    } 
        updateGame(this, cellIndex);
        
        
        wonFunction()
}

function updateGame(cell, index) {
    theOptions[index] = currentPlayer
    cell.textContent = currentPlayer  
}

function changePlayer() {
    currentPlayer = currentPlayer === 'x' ? '0' : 'x'
    statusEl.textContent = `${currentPlayer}'s turn`
             }


function wonFunction() {
    let gameWon = false
    for(let i = 0; i < winConditions.length; i++) {
        const win = winConditions[i]
        let cellA = theOptions[win[0]]
        let cellB = theOptions[win[1]]
        let cellC = theOptions[win[2]]

        if (cellA == '' || cellB == '' || cellC == ''){
            continue;
        }

        if (cellA === cellB && cellB === cellC){
            gameWon = true;
            
            break;
        }
    }
        
    if (gameWon){
        running = false
        statusEl.textContent = `${currentPlayer} WON!!!`
    }
    else if (!theOptions.includes('')){
        statusEl.textContent = `Draw`
        running = false
    } else {
        changePlayer()
    }
    }




function restartGame() {
    currentPlayer = ''
    theOptions = ["","","","","","","","","",]
    statusEl.textContent = `New Game`
    cells.forEach(cell => cell.textContent = '')
    running = true
}


