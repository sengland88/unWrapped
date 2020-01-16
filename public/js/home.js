var loggedIn = false;

if (!loggedIn) {
  $("#sideBar").hide()
}

$("#userSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("this works");

  let userInfo = {
    email: $("#userEmail").val().trim(),
    password: $("#userPassword").val().trim() 
  }
  console.log(userInfo);
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let format = !!(userInfo.email.match(regex));

  if (userInfo.email === "" || userInfo.password === "" || !format ) {
    console.log("error")
    return
  }

  $.get("api/users", userInfo).then(function(data){
    if(data.message){
      alert("Password or email incorrect. Please try again or register to the site.")
    } else {
      loggedIn = localStorage.setItem("loggedIn", true)
      localStorage.clear();
      localStorage.setItem("name", data.name);
      localStorage.setItem("userId", data.userId);
      window.location.href = "/welcome";
    }
  })
});



$("#userCreate").on("click", function(event) {
  event.preventDefault();
  console.log("this works");

  let newUserInfo = {
    firstName: $("#firstName").val().trim
    lastName: $("#lastName").val().trim(),
    email: $("#userEmail").val().trim(),
    address: $("#userAddress").val().trim(),
    password: $("#userPassword").val().trim(),
  }

  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let format = !!(newUserInfo.email.match(regex));

  //need validating for newUserInfo
  //try using functions below.
  if (!format) return

  $.post("api/users", newUserInfo).then(function(data) {
    loggedIn = localStorage.setItem("loggedIn", true)
  })
  
});


function emailFormat(email) {

  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let format = !!(email.match(regex));

  if (!format) return
}

function checkForEmptyEntries(entry) {
  for (let key in entry) {
    if (entry[key] === "") {
      return false
    }
  }
}

