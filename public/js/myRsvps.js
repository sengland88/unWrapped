if (!localStorage.getItem("userId")) {
  alert("please log in");
  window.location.href = "/";
}

$(document).ready(function() {
  let user = localStorage.getItem("userId");

  console.log(user)

  $.get("/api/myRsvps/" + user).then(function(data) {

    $("tbody").empty(); 

    
    
    for (let i = 0; i < data.dbRsvps.length; i++) {
      let party = data.dbRsvps[i].Party
      console.log(`${party.name}
                      ${party.occasion}
                      ${party.location}
                      ${party.date}
                      ${party.time}`)

      let partyName = $("<td class='align-middle'>").html(`${party.name}`);
      let occasion = $("<td class='align-middle'>").html(`${party.occasion}`);
      let location = $("<td class='align-middle'>").html(`${party.location}`);
      let date = $("<td class='align-middle'>").html(party.date);
      let time = $("<td class='align-middle'>").html(party.time);
      
      let tRow = $("<tr>");

      tRow.append(
        partyName,
        occasion,
        location,
        date,
        time
      );

      $("#myRsvpsList").append(tRow);
    }
  });

  //delete method
  // $(document).on("click", ".delete", function() {
  //   let id = $(this).attr("id");

  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/parties/" + id
  //   }).then(function(data) {
  //     location.reload();
  //   });
  // });
}); // document ready end bracket