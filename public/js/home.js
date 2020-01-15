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

  $.get("api/users", userInfo)
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

  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let format = !!(newUserInfo.email.match(regex));

  //need validating for newUserInfo
  //try using functions below.
  if (!format) return

  console.log(newUserInfo)

  $.post("api/users", newUserInfo)
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

function checkUsers() {
  if(userInfo.email !== db.User.email) 
  prompt("If you are not registered, please go register");
}