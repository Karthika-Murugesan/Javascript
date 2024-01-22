//control statements or looping statements - for, for in ,for each, while, do while


//while
sum=0
console.log("While loop:")
var n=10
while(n>0){
    sum+=n
    n--
}
console.log("sum:",sum)
//do while
console.log("Do while:")
sum=0
n=10
do{
    sum+=n 
    n--
}while(n>0)
console.log("sum:",sum)

//for loop
sum=0
console.log("For loop:")
for(var num=1;num<=10;num++){
    sum+=num
}

//for in loop

console.log("For in loop:")
student={name:"karthika",dep:"csd"}
for(var x in student){
    console.log(x,":",student[x])
}

count=0
//accessing index
arr=[1,2,4,5]
for(let num in arr){
    count++
}
console.log("count:",count)

//accessing elements
sum=0
for(let num in arr){
    sum+=arr[num]
}
console.log("sum:",sum)

//for of
sum=0
//accessing elements 
for(let num of arr){
   sum+=num
}
console.log("sum:",sum)

//for each loop


arr={id:123,college:"kongu"}
for(var key in arr){
    console.log(key)
}
for(var value of arr){
    console.log(value)
}
/*arr.forEach(element => {
    console.log(element)
});
*/
array.forEach(element => {
    
});