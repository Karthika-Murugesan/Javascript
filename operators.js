console.log("Hello ECE and CSD B2 of Kongu College!!!")
var a=19
var b=10

if(a>b){
    console.log("true")
}
else{
    console.log("false")
}

a='a';
console.log("General type value is ",a)
var b='var'
console.log("this belongs to type var value is ",b)
let c='let'
console.log("this belongs to type let value is ",c)
const d='const'
console.log("\n")
console.log("this belongs to type const value is ",d)



//Assignment operator

var a=10
a*=10
a-=10
a/=10
a%=10
console.log("Assignment Operator:",a)


//Arithmetic operator - +,-,/,*,%

a=10
b=10

console.log("Arithmetic operator +:",a+b)
console.log("Arithemetic operator -:",a-b)
console.log("Arithemtic operator *:",a*b)
console.log("Arithemtic operator /:",a/b)
console.log("Arithemtic operator %:",a%b)
console.log("Type of a",typeof(a));
a=0
b=20
console.log(a/b);

//Logical operator - &&,||,!
console.log("Logical operator &&: ",a&&b)
console.log("Logical operator !: ",!a)
console.log("Logical operator ||: ",a||b)
console.log("logical operartor:",100||10&&0);
console.log()

//relational operator  - <,>,<=,>=,===,!==

a=10
b=20

console.log("Greater than: ",a>b);
console.log("less than : ",a<b);
console.log("Greater than or equal to : ",a>=b);
console.log("less than or equal to : ",a<=b);
console.log("Equal to : ",a===b);
console.log("Not equal to : ",a!==b);
console.log("Not equal to : ",a!=b);

//Bitwise operator  -&,|,^,~,>>,<<

console.log("and : ",a&b);
console.log("or : ",a|b);
console.log("Xor : ",a^b);
console.log("not : ",~a);
console.log("right shift : ",a>>b);
console.log("Left shift: ",a<<b);


