//while loop
for(let i=1;i<=5;i++){
    console.log("Hi");
}

//calculate sum of frst 5 numbers
let sum=0;
for (let i =1;i<6;i++){
    sum+=i;
}
console.log(sum);

//print i 5 times -->block vs gobal scope
for (let i=1; i<=5;i++){
    console.log("i=",i);
}
// console.log(i); gives an error since i is let variable so it has gloal scope but if i has var type, then it would not have an error since i is given global scope and then i would be print as 6
//explained infintie loop
//while loop
let j=1;
while(j<6){
    console.log("j=",j);
    j++;
}
let k=0;
//do while loop
do{
    console.log("k=",k);
    k++;
}while(k===1);

//for-of
let str = "google";
for(let p of str){
    console.log(p);
}

//for-in
let student={
    name: "rahul",
    age: 20,
    cgpa: 7.54,
    isPass: true,
};
for(let key in student){
    console.log("key=",key,"   value=",student[key]); //prints key
}

//strings in JS
let strr = "praJwal nAyak    "
console.log(strr);
console.log(strr.length);
console.log(strr[8]);
console.log(strr[9]);
console.log(strr[10]);
console.log(strr[11]);
console.log(strr[12]);
str1=strr.toUpperCase();
console.log(str1);
str2=strr.toLowerCase();
console.log(str2);
str3 = str2.trim();
console.log(str3); //removes extra outside whitespace

//string interpolation
let objex = {
    item: "pen",
    price: 20,
};
let specialString = `the item is ${objex.item} and its cost is ${objex.price}`;
let specialString1 = `the sum of 1,2,3 is ${1+2+3}`;