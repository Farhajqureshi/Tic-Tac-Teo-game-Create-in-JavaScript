const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

// console.log(gameBoard,infoDisplay);

const startCell = ["", "", "", "", "", "", "", "", ""];

let go = "circule";
infoDisplay.textContent = "Circul goes first";


function createBoard(){
    startCell.forEach((cell,index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index; 
        cellElement.addEventListener("click",addGo)
        gameBoard.append(cellElement);

        

    })
}

createBoard();

function addGo(e){
    // console.log(e.target);
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === "circule" ? "cross" : "circule";
    infoDisplay.textContent = "its Now " + go + "s go.";
    e.target.removeEventListener("click",addGo);
    toCheckScore();
}


function toCheckScore(){

 const allSquares = document.querySelectorAll(".square");
//  console.log(allSquares);
    const winnigCommbo = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    winnigCommbo.forEach(array => {
        const circulWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circule'))
            

            if(circulWins){
                infoDisplay.textContent = "CirculWins";
                allSquares.forEach(square => square.replaceChild(square.cloneNode(true)))
                return
            }
    })

    winnigCommbo.forEach(array => {
        const crossWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('cross'))
            

            if(crossWins){
                infoDisplay.textContent = "CrossWins";
                allSquares.forEach(square => square.replaceChild(square.cloneNode(true)))
                return
            }
    })


}
