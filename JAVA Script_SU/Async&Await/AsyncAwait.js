// get data function which return the Promise
function getData(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data= ", input);
            resolve(200);                  //resolve 200 means success in case of API
        }, 2000)                           
    })
}
let p1 = getData(8697);

// now we want call this function one time after that completed next call 
// we can do it using callBackHell & Promise Chains but those are diffucult to understand
// so We use async await

async function dataGettingFromSever(){
    await getData(1);     // untill promise return by this function is completed we will wait here
    await getData(2);
    await getData(3);
}
dataGettingFromSever();

// Now here we can see to make this async await we need to write one extra function and call to that function
// eg. dataGettingFromServer and call to that function
// for that we have IIFE functions which execute immidetly
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
})();