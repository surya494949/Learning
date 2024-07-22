
function setDelay(){
    console.log("Delay of "+3000/1000+" sec is added befour function")
}

// setTimeout function is used to eecute function after somme delay
// here we cannot use setTimeout(setDelay(),300) if we use () after function it will execute without delay.
let delay = 3000;
setTimeout(setDelay,3000); // note setDelay is just name no use of setDelay()   

//with arrow fuction

setTimeout(() => {
    console.log("call from arrow function")
},2000);

// callback functions
// function is pass to anotherr function as argument is called callback function

function sum(a,b){
    console.log("SUM is "+(a+b));
}
function calculator(a,b,performCallBack)
{
    performCallBack(a,b);
}

calculator(6,5,sum); //sum is callback function

////////////////// CALL BACK HELL //////////////////////
// print somthing in 2sec delay after that 2 sec again print somthing using CallBack (IMP)

function getData(id,nextData){
    setTimeout(()=>{
        console.log("Data ID is  = " + id);
        if(nextData){
            nextData()
        }
    },2000)
}

getData(143443,()=>{
    getData(585587575,()=>{
        getData(576567576)
    });
});

// Explanation Of code
// 1. getData is a function which accept two arguments first as ID and second as getData function with anoter id.
// 2. first call with id = 143443 go to getData and after 2sec it print first ID 
// 3. then it goes to if condition in this we arre again calling nextData and that nextData contain instance of arrow function
// 4. which hold the getData method with Id= 585587575 againg call that mathod and aftter 2 sec it will print 585587575 
// //////////////// CALL BACK HELL END //////////////////////
// thhis is not understable code and it is very complex to solve this problem We have Promices


// start with Promises

// function which rerurn Password for ID in some delay acts as API & Server
function getSQLData(id){
    let temp =   new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let passWord = Math.random();
            resolve(id + " : " + passWord);
            console.log(id + " : " + passWord);
        },2000)
    });
    return temp;
}

function getApiData(request){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log(request,"this request is processed");
            resolve(request+" Done");},5000)
    })
}

let sqlPromise = getSQLData("ttyymy3454") // from this call we get Promis return
sqlPromise.then((res) =>{                   // if that promise is resolved then it will call this method
    console.log(res+" this is returned by promise")
})

//Promise chain example
let p1 = getApiData("part=123");
p1.then((res)=>{
    console.log("p1= "+res);
    console.log("fetching next data....");
    let p2 = getApiData("P1= "+res); // we call next promise when first is fullfilled.
    p2.then((res2)=>{
        console.log("p2= "+res2)
    })
})

// another way to write this this is prefferred and known as promise chains
getApiData("123").then((res)=>{      // first then
    return getApiData(res + " 456");// call 2
}).then((res2)=>{                   // second then
    console.log(res2);
})
//expalin above code first request to function is id go with 123 
// if that fullfiled means print "123 this request is processed"
// and return "123 Done" for successful request
// then it will trigger then for first time in that then we are again calling getApiData with 
// previous result + 456 means (123 Done 456) this will again retun promise
//and this return promise again returned b first then 
// then we apply second then to promise returned by first then and print result that willbe 
// result from second promise which is 123 Done 456 + Done (final result)