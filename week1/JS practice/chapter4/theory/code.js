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