$("#createSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("this works");

  let name = $("#createName").val().trim();
  let type = $("#createType").val();
  let date = $("#createDate").val().trim();

  if (name === "" || type === "Choose..." || date === "") {
    console.log("something is blank")
    return
  }

  var newOrganizer = {
    name: name,
    type: type,
    date: date
  }

  console.log("Success!")

  $.post("api/parties", newOrganizer)   
});
