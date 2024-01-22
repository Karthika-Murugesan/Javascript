//a fucntion is embedded inside by another funtion through parameter
//set time out for the function-within this time,complete the task and report the result,if not,then move on to the next function to be executed

function kk(name,callback){
         setTimeout(function(){
        console.log(name)
        callback()
         },2000)
}
function mk(){
    console.log("I dont need hello")
}
kk("Hello ",mk)
