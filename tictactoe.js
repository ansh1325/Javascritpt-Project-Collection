const prompt =require("prompt-sync")()

function makemove(turn,board){
    while (true){
        const row= parseInt(prompt("ENTER THE ROW "))
        const col= parseInt(prompt("ENTER THE COLUMN "))
        if(isNaN(row)|| row>3|| row<1) console.log("INVALID ROW")
        else if (isNaN(col)|| col>3|| col<1) console.log("Invalid Col")
        else if (board[row-1][col-1] != "") console.log("Invalid Position")
        else{ board[row-1][col-1]=turn; break}
    }
}

function printboard(board){
    for(let i=0; i<board.length; i++){
        const row=board[i]
        let stringofrow=''
        for (let j=0; j<row.length;j++){
            stringofrow+=row[j]
            if(j!=row.length-1) stringofrow+=" | "
        }
        console.log(stringofrow)
        if(i!=board.length-1) console.log("----------")
    }


}
const board=[
    ['','',''],
    ['','',''],
    ['','','']
]


function checkWin(board,turn) {
    const lines = [
        // Rows
        [[0, 0], [0, 1], [0, 2]], // row 0
        [[1, 0], [1, 1], [1, 2]], // row 1
        [[2, 0], [2, 1], [2, 2]], // row 2

        // Columns
        [[0, 0], [1, 0], [2, 0]], // col 0
        [[0, 1], [1, 1], [2, 1]], // col 1
        [[0, 2], [1, 2], [2, 2]], // col 2

        // Diagonals
        [[0, 0], [1, 1], [2, 2]], // diagonal 1
        [[0, 2], [1, 1], [2, 0]]  // diagonal 2
    ];
for (let line of lines){
    let win=true
    for(let pos of line){
        const [row,col]=pos
        if (board[row][col]!=turn){
            win=false
        }

    }
    if (win) return true
}
return false
}

let win=false
let turn="X"
let turncount=0
printboard(board)
console.log()
while(turncount<9){
    console.log(turn,"players turn")
    makemove(turn,board)
    printboard(board)
    console.log()
    win= checkWin(board,turn)
    if (win) { console.log(turn,"has won");break}

    if(turn==="X") turn="O"
    else turn="X"
    turncount++

}
if(!win){ console.log("No one won")}