$("#userSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("this works");

  let userInfo = {
    email: $("#userEmail").val().trim(),
    password: $("#userPassword").val().trim() 
  }

  console.log(userInfo)

    //insert get method
});

$("#userCreate").on("click", function(event) {
  event.preventDefault();
  console.log("this works");

  let newUserInfo = {
    firstName: $("#firstName").val().trim(),
    lastName: $("#lastName").val().trim(),
    address: $("#userAddress").val().trim(),
    emailAddress: $("#userEmail").val().trim(),
    password: $("#userPassword").val().trim(),
  }

  console.log(newUserInfo)

  //insert post method
});


