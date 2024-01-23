// // Prmoise - successfull and unsuccessful



// form validation - youtube example,catch - cannot show the content, then for showing the content
// Error message - could not connect to teh internet..refresh after soemtime

//location example
// Promise - successful and unsuccessful
// Form validation - YouTube example, catch - cannot show the content, then for showing the content
// Error message - could not connect to the internet..refresh after some time

// Location example
 var isLocationValid=(loc)=> {
    var validLocation = "namakkal";
    return loc === validLocation;
  }
  
  var location=()=> {
    return new Promise((resolve, reject)=>{
      setTimeout(function () {
        var loc = "namakkal";
        console.log(loc);
        if (isLocationValid(loc)) {
          resolve("Location found");
        } else {
          reject("Location not found");
        }
      }, 2000);
    });
  }
  
  location()
    .then((response)=> {
      console.log(response);
    })
    .catch((errorMessage)=> {
      console.log(errorMessage);
    });
  