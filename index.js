let boxes = document.querySelectorAll("#Box");
let resbt = document.querySelector("#res-bt");
let newGameb = document.querySelector("#ngb");
let winMsg = document.querySelector("#msg");
let msgContainer  = document.querySelector(".msg-container");


let turn0 = true;
  
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],  
    [6,7,8], 
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer .classList.add("hide");
}

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        console.log("Box Was Click");
        if(turn0){
            Box.innerText = "0";
            turn0 = false;
        }
        else {
            Box.innerText = "x";
            turn0 = true;
        }
        Box.disabled = true;

        checkwinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    winMsg.innerText = `🎉 Congratulation! Winner is ${winner}`;
    msgContainer .classList.remove("hide");
    disableBoxes();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let vul1 = boxes[pattern[0]].innerText;
        let vul2 = boxes[pattern[1]].innerText; 
        let vul3 = boxes[pattern[2]].innerText;   

        if (vul1 != "" && vul2 != "" && vul3 != ""){
            if (vul1 === vul2 && vul2 === vul3){
                console.log("Winner", vul1);
                showwinner(vul1);
            }
        }
    }
};

newGameb.addEventListener("click", resetGame);
resbt.addEventListener("click", resetGame);