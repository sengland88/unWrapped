$("#rsvpBtn").on("click", function(event) {
  event.preventDefault();
  let guestName = $("#guestName").val().trim();
  let guestAddress = $("#guestAddress").val().trim();
  let guestEmail = $("#guestEmail").val().trim();
  let partyCode = $("#partyCode").val().trim();

  if(guestName === "" || guestAddress === "" || guestEmail === "" || partyCode === "") {
    console.log("Please fill out all the fields.")
    return;
  }
  if(partyCode === PartyPartyCode) {
  let newGuest = {
    guestName: guestName,
    guestAddress: guestAddress,
    guestEmail: guestEmail
  }
  console.log("You have RSVP has been made!")
  $.post("api/guests", newGuest)
}
});
