//scope - local,global,block

var a=10 //block variable
for(let k=0;k<5;k++){ //local variable
           var i=5
}

//console.log(k)

var a=10
console.log(a)
{
let a=5
let b=10
console.log(a)
console.log(b)
}
console.log(a)

//local - holds the accessibility till the block ends
//