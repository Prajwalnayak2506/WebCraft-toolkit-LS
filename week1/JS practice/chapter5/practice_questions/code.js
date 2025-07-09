//question 1
function vowelCount(str){
    let count = 0;
    for(let alphabet of str){
        if(alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u' || alphabet == 'A' ||alphabet == 'E' ||alphabet == 'I' || alphabet == 'O' || alphabet == 'U'){
            count++;
        }
    }
    return count;
}
console.log(vowelCount("ereeI"));
//question 2
const vowels = (stg) => {
    let count = 0;
    for(let alphabet of str){
        if(alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u' || alphabet == 'A' ||alphabet == 'E' ||alphabet == 'I' || alphabet == 'O' || alphabet == 'U'){
            count++;
        }
    }
    return count;
}
console.log(vowelCount("Charming Prince"));
//question 3
let array = [22,25,26,10,20,30,40,50,100];
array.forEach((val) => {
    console.log(val**2);
});

//quesiton 4
let marks = [23,54,76,45,17,90,15,100,90.1];
aGrade = marks.filter((val) =>{
    return val>90;
});
console.log(aGrade);

//question 5
let n = prompt("Enter a number:");
let arr = [];
for(let i=1;i<=n;i++){
    arr.push(i);
}
console.log(arr);
let sumOfArray = arr.reduce((prev, curr) => {
    return prev + curr;
});
let prodOfArray = arr.reduce((prev, curr) => {
    return prev * curr;
});
console.log(`The sum is ${sumOfArray} and the product is ${prodOfArray}`);