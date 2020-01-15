$("#rsvpBtn").on("click", function(event) {
  event.preventDefault();
  
  let partyCode = $("#partyCode").val().trim();
  console.log(partyCode);
  if(partyCode === "") {
    console.log("Please enter in your party code.")
    return;
  }
  });
  

