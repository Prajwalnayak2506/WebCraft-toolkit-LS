//question 1
let h2 = document.querySelector("h2");
h2.innerText += " fron Apna College students";

//question 2
let divs = document.querySelectorAll(".box");
console.dir(divs);
divs[0].innerText = "UniqueTExt1";
divs[1].innerText = "UniqueTExt2";
divs[2].innerText = "UniqueTExt3";
//better : 
let idx = 0;
for(let div of divs){
    idx++;
    console.log(div);
    div.innerText=`UniqueDiv ${idx}`;
}
