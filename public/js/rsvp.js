var organizer = {};
var partyCode;

$("#rsvpInfo").hide();

$("#rsvpBtn").on("click", function(event) {
  event.preventDefault();
  partyCode = $("#partyCode").val().trim();
  console.log(partyCode);
  if (partyCode === "") {
    console.log("Please enter in your party code.");
    return;
  }
  $.get("/api/rsvp/" + partyCode).then(function(data) {
    if (data.message) {
      // eslint-disable-next-line prettier/prettier
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
      console.log(organizer);
      $("#rsvpForm").hide();
      $("#rsvpInfo").show();
    }
  });
});

$("#rsvpConfirm").on("click", function(event) {
  event.preventDefault();
  $.post("/api/rsvp", organizer).then(function(data) {
    //post on RSVP table
  });
});