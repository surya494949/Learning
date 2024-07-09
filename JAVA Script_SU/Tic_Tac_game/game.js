let turn = "X";
let buttons = document.querySelectorAll(".box");
let reSetButton = document.querySelector(".reset");
let validate = (evt) => {
    let x_array = [];
    let y_array = [];
    let buttonData = [];
    let x_winner = false;
    let y_winner = false;
    debugger;
    for (let count = 0; count < buttons.length; count++) {
        if (buttons[count].innerText == "X") {
            x_array.push(count);
        }
        if (buttons[count].innerText == "O") {
            y_array.push(count);
        }
    }
    let x_case = x_array.join(",");
    let y_case = y_array.join(",");

    switch (true) {
        case x_case.includes("0,1,2"):
        case x_case.includes("3,4,5"):
        case x_case.includes("6,7,8"):
        case x_case.includes("0,3,6"):
        case x_case.includes("1,4,7"):
        case x_case.includes("2,5,8"):
            x_winner = true;
            break;
        default:
            x_winner = false;
    }
    switch (true) {
        case y_case.includes("0,1,2"):
        case y_case.includes("3,4,5"):
        case y_case.includes("6,7,8"):
        case y_case.includes("0,3,6"):
        case y_case.includes("1,4,7"):
        case y_case.includes("2,5,8"):
            y_winner = true;
            break;
        default:
            y_winner = false;
    }
    if (x_winner) {
        alert("Congratulations X you are Winner");
    }
    if (y_winner) {
        alert("Congratulations O you are Winner");
    }
}
buttons.forEach(element => {
    element.addEventListener("click", (evt) => {
        turn = turn == "X" ? "O" : "X";
        evt.target.innerText = turn;
        evt.target.disabled = true
        
    })
    element.addEventListener("click", validate)
});

reSetButton.addEventListener("click", () => {
    buttons.forEach(element => {
        element.innerText = "";
        element.disabled = false;
    })
})