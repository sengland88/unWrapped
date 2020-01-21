if (!localStorage.getItem("userId")) {
  alert("please log in");
  window.location.href = "/";
}

$(document).ready(function() {
  let user = localStorage.getItem("userId");

  $.get("/api/myRsvps/" + user).then(function(data) {

    $("tbody").empty(); 
    
    for (let i = 0; i < data.dbRsvps.length; i++) {
      let party = data.dbRsvps[i].Party

      let formatDate = moment(party.date).format("MMMM Do YYYY");
      let formatTime = moment(party.time, "HH:MM").format("LT");

      let partyName = $("<td class='align-middle'>").html(`${party.name}`);
      let occasion = $("<td class='align-middle'>").html(`${party.occasion}`);
      let location = $("<td class='align-middle'>").html(`${party.location}`);
      let date = $("<td class='align-middle'>").html(formatDate);
      let time = $("<td class='align-middle'>").html(formatTime);

      let deleteBtn = $("<button>");

      deleteBtn.attr("id", data.dbRsvps[i].id);
      deleteBtn.addClass("delete");
      deleteBtn.addClass("btn btn-danger");
      deleteBtn.addClass("btn-sm");
      deleteBtn.text(" Delete ");

      let applyDelete = $("<td class='align-middle'>").html(deleteBtn);
      
      let tRow = $("<tr>");

      tRow.append(
        partyName,
        occasion,
        location,
        date,
        time,
        applyDelete
      );

      $("#myRsvpsList").append(tRow);
    }
  });

  //delete method
  $(document).on("click", ".delete", function() {
    let id = $(this).attr("id");

    $.ajax({
      method: "DELETE",
      url: "/api/myRsvps/" + id
    }).then(function(data) {
      location.reload();
    });
  });
}); // document ready end bracket