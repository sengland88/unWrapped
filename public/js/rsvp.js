var organizer = {};
var partyCode;

$("#rsvpInfo").hide();

$("#rsvpBtn").on("click", function(event) {
  event.preventDefault();
  partyCode = $("#partyCode").val().trim();
  if (partyCode === "") {
    return;
  }
  $.get("/api/rsvp/" + partyCode).then(function(data) {
    if (data.message) {
      alert("Your party code was not found. Please make sure it is entered correctly.");
    } else {
      organizer = {
        id: data.partyId,
        name: data.name,
        occasion: data.occasion,
        location: data.location,
        date: data.date,
        time: data.time,
        user: localStorage.getItem("userId")
      };

      $("#rsvpForm").hide();
      $("#rsvpInfo").show();
      $(".rsvpMessage").hide()      

      let photo;

      switch (organizer.occasion) {
        case "Wedding":
          photo = "imgs/createWedding.jpg"
          break;
          case "Bridal":
            photo = "imgs/createBridal.jpg"
          break;
          case "Baby":
            photo = "imgs/createBaby.jpg"
          break;
          case "Birthday":
            photo = "imgs/createBirthday.jpg"
          break;
          case "Graduation":
            photo = "imgs/createGraduation.jpg"
          break;
          case "Retirement":
            photo = "imgs/createRetirement.jpg"
          break;
        default:
          break;
      }

      let formatDate = moment(organizer.date).format('MMMM Do YYYY');
      let formatTime = moment(organizer.time, "HH:MM").format("LT");

      let theImg = $("<img>")
      .attr("src", photo)
      .attr("alt", "Responsive image")
      .addClass("img-fluid")
  
      $("#img").append(theImg)
  
      $("#cardTitle").html(`${organizer.name}`)
  
      $("#cardText").html(`Occasion: ${organizer.occasion} <br>
      Location: ${organizer.location} <br>
      Date: ${formatDate} <br>
      Time: ${formatTime}`)
    }
  });
});

$("#rsvpConfirm").on("click", function(event) {
  event.preventDefault();
  $.post("/api/rsvp", organizer).then(function(data) {
    $("#rsvpMessage").text("You've RSVP'd!")
  });
});