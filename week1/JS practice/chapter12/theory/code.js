//fetch api
//API is a system which we send requests to,and it sends us an accurate response in the form of some data.
//it works on request and responses
//we learn to fetch data form APIs
//API = Application Programming Interface
//The fetch AP provides an interface for fetching (sending/receiving) resources.
//It uses Request and Response objects
//the fetch() methods is used to fetch a resource (data).
//free APIs : we will have a lot of APIs : all APIs generally have their own documentation
//let us choose https://dog.ceo/api/breeds/image/random
const URL = "https://dog.ceo/api/breeds/image/random";
const image = document.querySelector("#peekabu");
const btn = document.querySelector("#btn");

const getImages = async () => {
    console.log("getting data");
    let promise = await fetch(URL); //this fetch returns a promise
    console.log(promise);
}
//whenever we use fetch and do not send any options, then it sends somehting called GET request. The request which ony gets a response, is called a GET request, we r not sending any data
//Understadning terms
//AJAX is asynchronous JS and XML => once upon a time, a request used to come as XML format, but nowadays, it is json
//JSON is javascript object notation
//json() method : returns a second promise that resolves with the result of parsing the response bpdy text as JSON(input is JSON, output is JS object)
//when we get a response, it is json formation, we want to cinvert it into a javascipt object, to do that, we use json() method
const getImagesNew = async () => {
    console.log("getting data");
    let promise = await fetch(URL); //this fetch returns a promise
    console.log(promise);
    let data = await promise.json(); //makes the promies readable
    console.log(data.message);
    image.src = data.message;
}
btn.addEventListener("click",getImagesNew);
//HTTP Verbs : hypertext transfer protocol :GET : only retieve, POST : to send data, DELETE : delete request, PATCH : partial modifications to a thing
//status codes : 200 : successful 
//if we have sent a request to some link which doenst exist : our error : 4xx erros
// if api has some erros in then then 5xx erros
//can read this on mdn
//HTTP response headers also contain addditional info