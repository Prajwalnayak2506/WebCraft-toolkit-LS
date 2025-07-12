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
