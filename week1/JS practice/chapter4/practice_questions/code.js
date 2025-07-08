//question 1
let marks = [85,97,44,37,76,60];
let sum = 0;
for (let i of marks){
    sum+=i;
}
let n = marks.length;
console.log(`The average of the students are: ${sum/n}`);

//question 2
let ogPrices = [250,645,300,900,50];
for (let price in ogPrices){
    ogPrices[price] = ogPrices[price] - 0.1*ogPrices[price]; 
}
console.log(ogPrices);