let box = document.querySelector("#box");
box.onmouseover = (e) => { //event handler //e is the evemt object
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    console.log("You are inside div");
    box.style.backgroundColor = "green";
}