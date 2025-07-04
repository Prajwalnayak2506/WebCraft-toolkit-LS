// single line comment
/* Multi 
Line 
Comment */
let a = 5;
let b = 2;
let c,d,e,f,g,h;
console.log("a =",a,"and b=",b);

//arithmetic opertors 
c = a + b;
console.log("a + b =",c);
d = a - b;
console.log("a - b =",d);
e = a * b;
console.log("a * b =",e);
f = a / b;
console.log("a / b =",f);
g = a % b;
console.log("a % b =",g);
h = a ** b;

//unary operators
console.log("a++ =",a++);
console.log("++a =",++a);
console.log("a-- =",a--);
console.log("--a =",--a);

//assignment operators
a=a;
console.log("a=a gives value of a as :",a);
a+=2;
console.log("a+=2 gives value of a as :",a);
a-=2;
console.log("a-=2 gives value of a as :",a);
a*=2;
console.log("a*=2 gives value of a as :",a);
a**=2;
console.log("a**=2 gives value of a as :",a);
a%=2;
console.log("a%=2 gives value of a as :",a);

let i,j,k,l;
//comparison operators
console.log("a==b", a==b);
console.log("a!=b", a!=b);
console.log("a===b", a===b);
console.log("a!==b", a!==b);
//but === means the following : it is a stricter version 
a = "5";
b = 5;
console.log("a==b", a==b); //gives true
console.log("a===b", a===b); //gives false
//we also have <,<=,>,>= as comparison operators

// logical operators
console.log("a==b && a===b ", a==b && a===b);
console.log("a==b || a===b ", a==b || a===b);
console.log("!(a==b && a===b) ", !(a==b && a===b));
