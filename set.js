
//set
console.log("set")
s=new Set(["aiadmk","bjp","congress"])
s.add("dmk")
s.add("aiadmk")

for(let val of s){
    console.log(val)
}

for(let val in s){
    console.log(val)
}
//console.log()

console.log("map")
//map - key value pair
m=new Map([["id","1"],["name","karthika"],["pn","8778838303"]]);

for(let val of m){
    console.log(val)
}

m.delete("8778838303")
for(let val of m){
    console.log(val)
}
//console.log(m)
console.log(m.has("name"))

