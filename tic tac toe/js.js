let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 =true
const winpattrn=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let count=0;
const resetGame = () => {
  turn0 = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("button clicked")
        if(turn0){
            box.innerText="O"
            turn0=false
        }
        else{
            box.innerText="X"
            turn0=true
        }
        count++;
        box.disabled=true;    //so that box value not change by clicking again on it
        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

  
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const checkwinner=() =>{
            for(let pattern of winpattrn){
                let p1=boxes[pattern[0]].innerText;
                let p2=boxes[pattern[1]].innerText;
                let p3=boxes[pattern[2]].innerText;
                if(p1!="" && p2!="" && p3!=""){
                    if(p1===p2 && p2===p3){
                        console.log("winner is",p1)
                        showWinner(p1)
                        return true;
                    }
                }
            }
        }
        newGameBtn.addEventListener("click", resetGame);
        resetbtn.addEventListener("click", resetGame);