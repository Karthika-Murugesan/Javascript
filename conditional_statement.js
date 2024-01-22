//Conditional statement - if,if else,Nested if,if else if else, switch
//jump statements - break,continue

//if
a=10;
if(a>20){
    console.log("a is greater")
}

//if,else

if(a>b){
    console.log("true")
}
else{
    console.log("false")
}

//if,else if

if(a>10){
    console.log("a is greater than 10")
}
else if(a==b){
    console.log("a is equal to 10")
}
else{
    console.log("a is less than 10")
}

//nested if
a=10
b=20
c=49
if(a>b){
    if(a>c){
        console.log("a is greater ")
    }
    else{
        console.log("c is greater")
    }
}
else if(b>c){
    console.log("b is graeter")
}

//switch

var choice = 5
switch(choice){
    case 1:
        console.log("1")
        break
    case 2:
        console.log("2")
        break
    case 3:
        console.log("3")
        break
    case 4:
        console.log("4")
        break
    case 5:
        console.log("5")
        break
    default:
        console.log("wrong choice")
}


