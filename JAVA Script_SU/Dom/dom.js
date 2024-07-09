 let paraElement = document.body.getElementsByTagName('p');
 debugger;
 paraElement[0].style.background = "gray";
document.body.querySelectorAll("h2")[2].innerText = document.body.querySelectorAll("h2")[2].innerText  + " From Suraj Mate";
divNods = document.body.querySelectorAll(".box");
count = 10000001;
for(div of divNods){
    div.innerText = `Unique Id ${count} 
    ${div.innerText}`;
    count = count+1;
}
//Dom-2 
//insert Elements
//insert button in first box after list
//1.Create button
debugger;
let okButton = document.createElement("button");
okButton.innerText = "OK";
okButton.style.width = "80px"
okButton.style.backgroundColor = "lightgreen";
okButton.style.border = "solid gold 4px"
//2. insert in DOM
let firstDiv = document.body.querySelector("div");
// firstDiv.append(okButton);//apent button inside div at the end
// firstDiv.prepend(okButton);//apend burron inside div at the top
// firstDiv.before(okButton);//apend button outside and before the Div
firstDiv.after(okButton);//apend button outside and after the Div

// take paragrabh element append class new-class to question-class
let para = document.body.getElementsByClassName("question-class")[0];
// // here i have tried to append two classes but this is wrong for that we use Classlist below
// let className = para.getAttribute("class"); 
// className = className + " new-Class";
// para.setAttribute("class",className);

//Class List
para.classList.add("new-class");
