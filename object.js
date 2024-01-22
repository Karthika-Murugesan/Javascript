//objects

arr=[10,20,30]
    console.log(arr)
arr=[10,20,20.5]
    console.log(arr)
arr=[10,20,true,false]
    console.log(arr)
arr=[10,20,"karthika",true]
    console.log(arr)

//method1:

//key:value
var details={name:"karthika",age:20,dep:"csd"} //, at last is optional and key does not hold any double codes as it internally present
console.log("name : ",details.name,", age:",details.age,", dep:",details.dep)
details.year=3
console.log("details:",details)

//method2:

var detail=new Object();
detail.name="karthika"
detail.age=20
detail.dep="csd"
console.log(detail)

//method3:


function det(name,age){
    this.name=name
    this.age=age
}
 var dd=new det("karthika",20)
 
console.log(dd)

