// asynchronous programming >> promise chains >> callback hell
// >> ->  better than
// what is sync in JS ?
//synchronous : code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
//due to asynchronour programming, some important instructions get blocked due to some previous instructions causing a delay in UI. Asnychnous coe execution allows to execute next instructions immediately and doesnt block the flow.
console.log("one");
console.log("two");
console.log("three");
//the above is synchornous => one prints after the previous is done
//some instructions might take a lot of time and it would be better if further instructions get executed when this one is taking time
// API -> is a system made by someone else, to which we can request smthng and it returns it
//fetching data from API might take lot of time, so the instructions after it shouldnt wait, so we go for asynchronous programming
//let us have code1, then code 2, api, then code 3, then code 4. If all codes are independent, then dont wait for API
function hello(){
    console.log("hello");
}
console.log("one");
setTimeout(hello, 4000); //timeout --> executes hello after 4 secs
setTimeout(() => {
    console.log("hello after 2 secs");
},2000);
console.log("four"); // this wont wait for the above two complete
//the above is asynchronous pgmming

//callbacks : functoin passed as an  argument to another fucnction
function sum(a,b){
    return a+b;
}
function calculator(a,b,sum){ //sum is a callback function
    sum(a,b);
}
calculator(1,2,sum); //we shdnt use paranthises here
const hello1 = () =>{
    console.log("hello");
}
setTimeout(hello1,3000);
//callback hell : nested callbacks stacked below one another forming a pyramid structure
//nesting : 
let age = 19;
if(age >=18){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }
}else{
    console.log("non adult");
}
//nesting of callbacks leads to pyramis of doom
//this style of programming becomes diffiuclt and manage
function getData(dataID){ //lets assume that this takes around 3 secs to search, soo we will prefer to do tis asynchronously
    setTimeout(() => {
        console.log( "data",dataID);
    },3000);
}
getData(123); //this runs, and waits for 3 secs, but then asynchronously runs next
getData(1234); //this runs, and waits for 3 secs, but then asynchronously runs next
getData(12345); //this runs, and waits for 3 secs, but then asynchronously runs next
// so we get the whole data for all three at the same
function getData(dataID){ //lets assume that this takes around 3 secs to search, soo we will prefer to do tis asynchronously
    setTimeout(() => {
        console.log( "data",dataID);
    },3000);
}
function getData1(dataID,datacallback){ //lets assume that this takes around 3 secs to search, soo we will prefer to do tis asynchronously
    console.log("getting data...")
    setTimeout(() => {
        console.log( "data",dataID);
        if(datacallback){
            datacallback();
        }
    },3000);
}
//so what we do is : 
getData1(1,() => { //this runs like this : waits 2 secs, runs 1, then waits 2 , then runs 2
    getData1(2);
})
getData1(1,() => { //this runs like this : waits 2 secs, runs 1, then waits 2 , then runs 2, then waits 2 then runs 3 then waits 2 then runs 4
    getData1(2,() => {
        getData1(3,() =>{
            getData1(4);
        })
    });
});
//this is a not very easy way to write, and causes confusion to understand is called callback hell
//so we use promises to resolve callback hell

//promises : promise is for eventual completion of task. it is an objec tin JS.
//it is a solution to callback hell
let promise = new Promise((resolve,reject) => {
    console.log("i am a promise");
    resolve("success"); //automatically created to fulfill promise
})
console.log(promise);
//promise can have 3 states : pending , fulfilled(resolved), rejected => pending comes when we havent reached the resolve functoin yet
let promise1 = new Promise((resolve,reject) => { //resolve and reject are created automatically
    console.log("i am a promise");
    reject("oopsiie"); //callbacks which are automatically created to rejected
})
console.log(promise1);
//geenrally we dont create promises ourselves :  they are given byother APIs and we just ahndle them
function findData(dataID, datacallback){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
        console.log( "data",dataID);
        resolve("success");
        if(datacallback){
            datacallback();
        }
    },10000);
    })
}
let result = findData(123);
//now we learn how to use promises : then and catch
const getPromise = () => { //this is a function to make promises
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        resolve("success");
    });
}
let promisee = getPromise();
promise.then((res) => { //res is by default param of then
    console.log("Promise fulfilled",res);
});
const getPromise1 = () => { //this is a function to make promises
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        reject("errrror");
    });
}
let promiseew = getPromise1();
promiseew.catch((err) => { //the err is by default parameter of catch
    console.log("Rejected",err);
});
//PROMISE  CHAIN
function asyncFunc1(){
    return new Promise((resolve, reject) => { //new promise retuner which will return or reject
        setTimeout(()=>{
            console.log("Some data1");
            resolve("success");
        },2000);
    });
}
function asyncFunc2(){
    return new Promise((resolve, reject) => { //new promise retuner which will return or reject
        setTimeout(()=>{
            console.log("Some data2");
            resolve("success");
        },4000);
    });
}
//we want first data 1 then data 2
let p1 = asyncFunc1();
console.log("Fetching data1......");
p1.then((res)=>{
    console.log(res);
})
let p2 = asyncFunc2();
console.log("Fetching data2......");
p2.then((res)=>{
    console.log(res);
})
//when we write fetchign as above, data1 ad data2 are fetched simulataneuously, but we dont want that, so we use chaining
let p3 = asyncFunc1();
console.log("Fetching data1......");
p3.then((res)=>{
    console.log(res);
    console.log("Fetched data 1");
    p4.then((res)=>{
        console.log(res);
        console.log("Fetched data2")
    })
});
function getData2(dataID){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data is ========",dataID);
            resolve("successesssssssesssssss");
        },2000);
    });
}
getData2(1).then((res)=>{
        return getData2(2);
    }).then((res)=>{
        console.log(res);
    });
//the above is etter than callback hell but not too good when it is filled with commands, so we use Async-Await\
//async-await always returns a promise
//we use async generally with functions, async and await are keywords
async function hello(){ //this automatically returns a promise
    console.log("hellooo");
}
//await pauses the execustion of its surrounding async function until the promise is settled : we keep waiting and pause all async until promise is fulfilled
function api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weater data");
            resolve(200); //200 means success
        })
    })
}
//await api(); //will wait until we get the data but it will throw error as we use this with async
async function getWeather(){
    await api(); //1st call : it will make everything wait
    await api(); //2nd
}
//we can do same for the above getData
async function getAllData(){
    for(let i = 1; i<=5; i++) //clearly no hell
        await getData2(i);
    
}