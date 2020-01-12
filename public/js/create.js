var randomize = require("randomatic");

$("#createSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("this works");

  let name = $("#createName").val().trim();
  let type = $("#createType").val();
  let date = $("#createDate").val().trim();

  console.log(name)
  console.log(type)
  console.log(date)  

  console.log(code)

});
