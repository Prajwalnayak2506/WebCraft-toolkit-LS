let button = document.querySelector("button");
let mode = document.querySelectorAll(".light");
let curMode ="light";
button.addEventListener("click",() =>{
    console.log("You are trying to change modes.")
    if(curMode === "light"){
        curMode = "dark";
        for(let el of mode){
            el.setAttribute("class","dark");
        }
    }
    else{
        curMode = "light";
        for(let el of mode){
            el.setAttribute("class","light");
        }
    }

});