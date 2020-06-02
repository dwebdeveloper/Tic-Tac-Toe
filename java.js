let currentPlayer = 'X'; // X is the starting player.

let playerXSelections = [];
let playerOSelections = [];
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll('.grid-cell');
console.log(cellElementArray);
// Loop over each element in our cellElementArray:
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {

    // Set the cell element at cellElementArr+-ay[cellIndex] to the currentCell variable:
    const currentCellElement = cellElementArray[elementIndex]

    // Add an event listener to the currentCellElement:
    currentCellElement.addEventListener('click', function (event) {

        // event.target tells us which element the user clicked (see Resources links below):
        const clickedCellElement = event.target;

        // Log the ID of the cell which was just clicked:
        console.log("You clicked on cell number: " + clickedCellElement.id)

        //if currentPlayer is "X", set the clickedCellElement's innerHTML to "X", else set it to "O"
        //update the currentPlayer variable to the next player ("X" or "O")
        if (currentPlayer === 'X') {
            clickedCellElement.innerHTML = 'X'
            currentPlayer = 'O'
            playerXSelections.push(Number(clickedCellElement.id))
            console.log(playerXSelections)
            if (checkForWin(winningCombinations, playerXSelections)) {
                alert("Player X has Won!")
                window.location.reload()
            }
        } else {
            clickedCellElement.innerHTML = 'O'
            currentPlayer = 'X'
            playerOSelections.push(Number(clickedCellElement.id))
            console.log(playerOSelections)
            if (checkForWin(winningCombinations, playerOSelections)) {
                alert("Player O has Won!")
                window.location.reload()
            }

        }

        if ((playerXSelections.length + playerOSelections.length) === 9) {
            alert("It's a draw. No winnners today")
            window.location.reload()
        }
    });
}
/*
write a function named `checkForWin` and accepts two arguments: `winningCombination` and `playerSelections`
    for every combination in `winningCombination`
        create a `matches` counter variable, which starts at 0
        for every number in the current combination
            if the player's selections array contains the current number
                increment `matches` by 1
            if `matches` is **equal** to 3
                return `true`, because we found a win!
    we got through all combinations without returning `true`, so return `false`, because no win was found
*/

function checkForWin(winningCombination, playerSelections) {
    for (let index = 0; index < winningCombination.length; index += 1) {
        let innerarraylength = winningCombination[index].length;
        let matches = 0
        console.log(index)
        const currentCombination = winningCombination[index]
        console.log(currentCombination)
        for (let insidematches = 0; insidematches < innerarraylength; insidematches += 1) {
            const winningCombo = currentCombination[insidematches]
            if (playerSelections.includes(winningCombo)) {
                matches++
                if (matches === 3) {
                    return true
                }
            }

        }
    }
    return false
}