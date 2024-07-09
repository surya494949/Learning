let count =0;
// for double click button
nodeHandler = document.body.querySelector("#DblClkBtn");
nodeHandler.ondblclick = (evt) => {
    count=count+1;
    console.log("button click count = "+count*2);
    console.log(evt);//evt is object of event which whave details of event like
    console.log(evt.type); //type of event occure
    console.log(evt.target); // node on which event is occure
}

nodeHandler1 = document.body.querySelector("#div001");
nodeHandler1.onmouseover = () =>{
    console.log("mouse is on block of learning");
}

// Call Event Listener
nodeHandler2 = document.body.querySelector("#ListenerCall");
nodeHandler2.addEventListener("click",()=>{
    console.log("listener is working");
})
//we can add multiple eventListeners for single node
nodeHandler2.addEventListener("click",()=>{
    console.log("Event Listener is Hit 2 times")
})

// now if i want to remove second listener i can't do it inn this way to remove 
// listener we have to define function first like below

callFunction = () => {
    console.log("Event Listener is Hit 3rd time");
}

nodeHandler2.addEventListener("click",callFunction); // eventlistener added
nodeHandler2.removeEventListener("click",callFunction); //event listener Removed

// Dark Mode button background black vs text black
let isDark = false;

let modeButton = document.body.querySelector("#modeHandler");

modeButton.addEventListener("click",()=>{
    if(isDark){
        isDark = false;
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }
    else{
        isDark = true;
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    }
})
