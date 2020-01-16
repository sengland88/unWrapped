$("#rsvpBtn").on("click", function(event) {
  event.preventDefault();
  
  let partyCode = $("#partyCode").val().trim();
  console.log(partyCode);
  if(partyCode === "") {
    console.log("Please enter in your party code.")
    return;
  }
  $.get("api/parties", partyCode).then(function(data){
    if(data.message) {
      alert("Your party code was not found. Please make sure it is entered correctly.")
    } else {
      console.log(data)
      window.location.href = "/welcome";
      
    }
  })
  });
  

