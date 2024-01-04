const cells=document.querySelectorAll(".cell");
const statusTexts=document.querySelector("#statusText");
const resartBtns=document.querySelector("#restartBtns");
const winnerCondtion=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
];
let option=["","","","","","","","",""];
let currentPlayer="X";
let running=false;
initializeGame();
function initializeGame(){
    cells.forEach(cell=>cell.addEventListener("click",cellClick));
    resartBtns.addEventListener("click",restartGame);
    statusTexts.textContent=`${currentPlayer}'s Turn`;
     running=true;
}
function cellClick(){
     const cellIndex=this.getAttribute("cellIndex");
     if(option[cellIndex] !="" || !running){
      return;
     }
     UpdateCell(this,cellIndex);
     
     checkWinner();
}
function UpdateCell(cell,index){
   option[index]=currentPlayer;
   cell.textContent=currentPlayer;
}
function changePlayer(){
    currentPlayer=(currentPlayer=="X") ? "0":"X";
    statusTexts.textContent=`${currentPlayer}'s Turn`;

}
function checkWinner(){
      let roundWon=false;
      for(let i=0;i<winnerCondtion.length;i++){
        const condition=winnerCondtion[i];
        const cellA=option[condition[0]];
        const cellB=option[condition[1]];
        const cellC=option[condition[2]];

        if(cellA=="" || cellB=="" || cellC==""){
            continue;
        }
      if(cellA==cellB && cellB==cellC){
        roundWon=true;
        break;
      }

      }
      if(roundWon){
        statusTexts.textContent=`${currentPlayer} Win's !!`;
         running=false;
    }
    else if(!option.includes("")){
        statusTexts.textContent=`Draw !!`
         running=false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
   currentPlayer="X";
   option=["","","","","","","","",""];
   statusTexts.textContent=`${currentPlayer}'s Turn`;
   cells.forEach(cell=>cell.textContent="");
   running=true;
}