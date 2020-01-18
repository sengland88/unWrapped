$("#createConfirm").hide();

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
    time:time,
    UserId: localStorage.getItem("userId")
  }
  
  $.post("api/parties", newParty).then(function(data) {
    $("#createForm").hide();
    $("#createConfirm").show();

    let formatDate = moment(newParty.date).format('MMMM Do YYYY');
    let formatTime = moment(newParty.time, "HH:MM").format("LT");
    let partyDiv = $("<div>").addClass("createdParty");
    let photo

    switch (newParty.occasion) {
      case "Wedding":
        photo = "imgs/wedding.jpg"
        break;
        case "Bridal":
          photo = "imgs/bridal.jpg"
        break;
        case "Baby":
          photo = "imgs/baby.jpg"
        break;
        case "Birthday":
          photo = "imgs/ballons.jpg"
        break;
        case "Retirement":
          photo = "imgs/ballons.jpg"
        break;
        case "Retirement":
          photo = "imgs/ballons.jpg"
        break;
      default:
        break;
    }

    let partyThings = $("<p>")
    .addClass("partyInfo")
    .html(`Party Name: ${newParty.name} <br>
    Occasion: ${newParty.occasion} <br>
    Location: ${newParty.location} <br>
    Date: ${formatDate} <br>
    Time: ${formatTime}`)
    
    let theImg = $("<img>")
    .attr("src", photo)
    .attr("alt", "Responsive image")
    .addClass("img-fluid")

    $("#img").append(theImg)

    $("#cardTitle").html(`${newParty.name}`)

    $("#cardText").html(`Occasion: ${newParty.occasion} <br>
    Location: ${newParty.location} <br>
    Date: ${newParty.date} <br>
    Time: ${newParty.time}`)
  });
});
