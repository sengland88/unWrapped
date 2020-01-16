$(document).ready(function() {
  $("#test").text("Hey");

  let user = localStorage.getItem("userId")

  console.log(user)

  $.get("/api/parties/" + user).then(function(data) {    

    let db = data.dbParties

    for (let i = 0; i < db.length; i++) {
      console.log("looping")
      console.log(db[i].name)

      let tRow = $("<tr>")

      let partyName = $("<td class='align-middle'>").html(db[i].name)
      let occasion = $("<td class='align-middle'>").html(db[i].occasion)
      let location = $("<td class='align-middle'>").html(db[i].location)
      let date = $("<td class='align-middle'>").html(db[i].date)
      let time = $("<td class='align-middle'>").html(db[i].time)
      let partyCode = $("<td class='align-middle'>").html(db[i].partyCode);

      var updateBtn = $("<button>");

      updateBtn.attr("id", db[i].id);
      updateBtn.addClass("update")
      updateBtn.addClass("btn btn-danger")
      updateBtn.addClass("btn-sm")
      updateBtn.text(" * ");

      var deleteBtn = $("<button>");

      deleteBtn.attr("id", db[i].id);
      deleteBtn.addClass("delete")
      deleteBtn.addClass("btn btn-danger")
      deleteBtn.addClass("btn-sm")
      deleteBtn.text(" X ");

      let applyUpdate = $("<td class='align-middle'>").html(updateBtn);
      let applydelete = $("<td class='align-middle'>").html(deleteBtn);

  
      tRow.append(partyName, occasion, location, date, time, partyCode, applyUpdate, applydelete)
  
      $("#saved").prepend(tRow)  
    }

  });

  $(document).on("click", ".update", function() {
    // let id = $(this).attr("id");
    window.location.href = "/updateParty";
    // $.ajax({
    //   method: "PUT",
    //   url: "/api/parties" + id,
    //   data: party      
    // }).then(function() {
    //   window.location.href = "/myParties";
    // });
  });

  $(document).on("click", ".delete", function() {
    let id = $(this).attr("id");

    $.ajax({
      method: "DELETE",
      url: "/api/parties/" + id
    }).then(function(data) {
      console.log(data)
      location.reload();
    });  
  });
}); // document ready end bracket
