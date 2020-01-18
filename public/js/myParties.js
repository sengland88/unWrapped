if (!localStorage.getItem("userId")) {
  alert("please log in");
  window.location.href = "/";
}

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
    $(".table").hide();
    $(".updateParty").show()
   let id = $(this).attr("id")
   console.log(id)

   localStorage.setItem("partyId", id);

   $.get("/api/parties/update/" + id).then(function(data){
    db = data.dbParty;
    console.log(db)
    
    let partyInfo = {      
      partyName: db.name,
      occasion: db.occasion.value,
      location: db.location,
      date: db.date,
      time: db.time,
     }
    //  $("#partyName1").append(partyName);
    //  console.log(partyName);
    //  $("#partyLocation1").append(location);
    //  console.log(location);
    //  $("#partyType1").append(occasion);
    //  console.log(occasion);
    //  $("#partyDate1").append(date);
    //  $("#partyTime1").append(time);
    //  console.log("this is the then.")
    //  console.log(partyInfo)
   });     
   });

   // updated button and form
   $("#updateSubmit").on("click", function(event){
     console.log("button working")  
     event.preventDefault() 

     var updatedInfo = {
      id: localStorage.getItem("partyId"),
      name: $("#updatedName").val().trim(),
      occasion: $("#updatedType").val(),
      location: $("#updatedLocation").val().trim(),
      date: $("#updatedDate").val().trim(),
      time: $("#updatedTime").val().trim(),

    }
    console.log(updatedInfo)     
    $.ajax({
      method: "PUT",
      url: "/api/parties/update/party",
      data: updatedInfo
    }).then(function(data) {
      console.log(data)
    });
   });

   //delete method
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
