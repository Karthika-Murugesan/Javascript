// // Prmoise - successfull and unsuccessful



// form validation - youtube example,catch - cannot show the content, then for showing the content
// Error message - could not connect to teh internet..refresh after soemtime

//location example
// Promise - successful and unsuccessful
// Form validation - YouTube example, catch - cannot show the content, then for showing the content
// Error message - could not connect to the internet..refresh after some time

// Location example
function isLocationValid(loc) {
    var validLocation = "namakkal";
    return loc === validLocation;
  }
  
  function location() {
    return new Promise(function (resolve, reject) {
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
    .then(function (response) {
      console.log(response);
    })
    .catch(function (errorMessage) {
      console.log(errorMessage);
    });
  