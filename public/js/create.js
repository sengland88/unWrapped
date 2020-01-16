console.log(localStorage.getItem("userId"))

$("#createSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("this works"); 

  let name = $("#partyName").val().trim();
  let location = $("#partyLocation").val();
  let type = $("#partyType").val();
  let date = $("#partyDate").val().trim();
  let time = $("#partyTime").val().trim()

  let regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/g;
  let doesMatch = !!(time.match(regex));

  if (!doesMatch) {
    console.log("time?")
    return
    }

  if (name === "" || type === "Choose..." || date === "") {
    console.log("something is blank")
    return
  }

  var newParty = {
    name: name,
    occasion: type,
    location: location,
    date: date,
    time: time,
    UserId: localStorage.getItem("userId")
  }
  
  $.post("api/parties", newParty).then(function(data) {
    $("#createForm").hide()
    $("#createConfirm").text(data)
    console.log(data)
  });
});
