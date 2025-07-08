//arrays
let marks =[12,45,65,43,22 ]; //is an object
console.log(marks.length);
console.log(typeof marks);
//array indices
console.log(marks[2]);
console.log(marks[9]);
//strings are immutable but arrays are mutable
marks[1] = 0;
console.log(marks);
//printing all elements in an arrray
for(let idx=0;idx<marks.length;idx++){
    console.log(marks[idx]);
}
for(let el of marks){
    console.log(el);
}
for(let el in marks){
    console.log(marks[el]);
}
//methods in array
let veggies =["potato","tomato","onion","spinach"];
veggies.push("sprouts","beetroot");//push
console.log(veggies);
let deletedItem = veggies.pop();//returns the delted value in the array
console.log(veggies);
console.log(`The deleted item is ${deletedItem}`);
console.log(veggies.toString());//to string
console.log(veggies);
roots = ["carrot","beetroot","radish"];
let allVeggies = veggies.concat(roots); //concat
console.log(allVeggies);
console.log(veggies);
console.log(roots);
let val1 = veggies.shift();//shift
console.log(`deleted ${val1}`);
console.log(veggies);
let val2 = veggies.unshift("potato");//unshift 
console.log(val2,veggies);
let slicedArray = veggies.slice(1,3);//slice
console.log(veggies,slicedArray);
veggies.splice(2,2,"ginger","garlic","cinnamon");//splice
console.log(veggies);