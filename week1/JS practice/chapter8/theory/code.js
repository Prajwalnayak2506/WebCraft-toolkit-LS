let box = document.querySelector("#box");
box.onmouseover = (e) => { //event handler //e is the evemt object
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    console.log("You are inside div");
    box.style.backgroundColor = "green";
}
//better way : Event listeners :
let boxes = document.querySelector(".boxes");
boxes.addEventListener("click", () =>{
    console.log("pooja, what is this behaviour!? im sorry i kciked it by mistake. you cant kick it by mistake. then pick it up if it bothers you.NO YOU WILL PICK IT UP. you dont tell me what to do. I can tell you what to do. YOU DO NOT TLL ME WHAT TO DO.Dusbin aise nhi fek sakti pooja. YOU DO NOT TELL ME WHAT TO DO. Or what, are you gonna hit me? Do u want it, cause u r asking for it!! YOU ARE DYING FOR IT!! Get off my back!! GOT IT?");
});
const handler1 = () => {
    console.log("Handler1");
    handler2;
};
const handler2 = () => {
    console.log("Handler2");
    let n = prompt("Enter 3 or 4:");
    if(n==3){
        boxes.removeEventListener("click",handler3);
    }
    else{ 
        boxes.removeEventListener("click",handler4);
    }
    handler3;
};
const handler3 = () => {
    console.log("Handler3");
    handler4;
};
const handler4 = () => {
    console.log("Handler4");
};
boxes.addEventListener("click",handler1);
boxes.addEventListener("click",handler2);
boxes.addEventListener("click",handler3);
boxes.addEventListener("click",handler4);