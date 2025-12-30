let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let turnO= true; //playerX or playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box Clicked");
        if(turnO){ //player Y
            box.innerText = "O";
            turnO = false;
        }else{ //player X
            box.innerText = "X"
            turnO = true;
        }    
        box.disabled = true; //  jaise hi ek bar click ho gya fir uske baad wo change nhi ho isliye box.disabled=true diya.     
        checkWinner();           
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""; // boxes ke text ko hatane ke liye
    }
};
function showAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}


const checkWinner = () => {   //arrow function
    for(let pattern of winPatterns){ //check for every patterns and using these patterns we find the avlues also. 
            let pos1Val = boxes[pattern[0]].innerText
            let pos2Val = boxes[pattern[1]].innerText
            let pos3Val = boxes[pattern[2]].innerText
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){ 
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showAlert(`Winner is ${pos1Val}`);
                // alert(`Congratulations! winner is ${pos1Val}`)
                disableBoxes();// Disable all boxes when a winner is found
                setTimeout(resetGame, 100);// Reset the game after milli seconds
                return; // Exit the function early since we already have a winner
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

