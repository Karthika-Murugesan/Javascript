//without argument and without return type

function fun(){
    console.log("Function")
}
fun()

//with argument without return type

function f(a,b){
    for(var i=a;i<b;i++){
        if(i%2==0) console.log("The number",i,"is even")
        else console.log("The number",i,"is odd")
    }
}
f(1,20)

//With argument with return type

function w(a) {
    fa=1
     for(var i=1;i<=a;i++){
        fa*=i
     }
     return fa
}

var fa=w(5)
console.log("Factorial of 5: "+fa)

//without argument with return type
function fac(){
    fact=1
    for(var i=1;i<=5;i++){
        fact*=i
    }
    return fact
}

var f=fac()
console.log(f)