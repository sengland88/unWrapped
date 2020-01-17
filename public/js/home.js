$("#userSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("this works");

  let userInfo = {
    email: $("#userEmail").val().trim(),
    password: $("#userPassword").val().trim() 
  }
  console.log(userInfo);
  let isEmailValid = emailFormat(userInfo.email)

  if (!isEmailValid || !userInfo.password) {
    alert("Please complete all fields.")
    return
  }

  $.get("api/users", userInfo).then(function(data){
    if(data.message) {
      alert("Password or email incorrect. Please try again or register to the site.")
    } else {
      loggedIn = localStorage.setItem("loggedIn", true);
      $("#sideBar").show()
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
    firstName: $("#firstName").val().trim(),
    lastName: $("#lastName").val().trim(),
    email: $("#userEmail").val().trim(),
    address: $("#userAddress").val().trim(),
    password: $("#userPassword").val().trim(),
  }

  let isEmailValid = emailFormat(newUserInfo.email)
  let isEmptyString = checkForEmptyEntries(newUserInfo)

  if (!isEmailValid) {
    alert("Please complete all fields.")
    return
  }

  $.post("api/users", newUserInfo).then(function(data) {
    console.log(data)
    localStorage.setItem("name", data.firstName);
    localStorage.setItem("userId", data.id);
    window.location.href = "/welcome";
  });
  
});


function emailFormat(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let format = (email.match(regex));  
  if (!email || !format ) {
    return false
  }
  return true
}

function checkForEmptyEntries(entry) { 
  for (let key in entry) {
    if (!entry[key]) {
      return false
    }
  }
}

