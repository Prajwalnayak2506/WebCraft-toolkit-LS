//we use the currency converter api 
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const dropdowns = document.querySelectorAll(".dropdown select")

for (curr in countryList) {
    console.log(curr);
}
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText =  currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD"){
            newOption.selected="selected";
        }
        else if (select.name === "to" && currCode === "INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    })
}
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const btn = document.querySelector("button");
const msg = document.querySelector(".msg");
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault(); //remove default behaviour on clicking button
    upddateExchange();
})

async function upddateExchange(){
     let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    console.log(amtValue);
    if (amtValue === "" || amtValue<1){
        amtValue = 1;
        amount.value="1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtValue*rate;
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}
window.addEventListener("load",upddateExchange());