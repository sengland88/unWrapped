$("#createSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("this works");

  let name = $("#partyName").val().trim();
  let type = $("partyType").val();
  let location = $("#partyLocation").val();
  let date = $("#partyDate").val().trim();
  let time = $("#partyTime").val().trim();

  console.log(name);
  console.log(type);
  console.log(location);
  console.log(date);
  console.log(time);

  if (name === "" || type === "Choose..." || date === "") {
    console.log("something is blank")
    return
  }

  // var newOrganizer = {
  //   name: name,
  //   type: type,
  //   date: date
  // }

  // console.log("Success!")

  
  // $.post("api/parties", newOrganizer)   
});
