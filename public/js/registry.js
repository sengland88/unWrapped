if (!localStorage.getItem("userId")) {
  alert("please log in");
  window.location.href = "/";
}

$("#registrybtn").on("click", function(event) {
  event.preventDefault();
  getGuests();

  function getGuests() {
    $.get("/api/guests", function(data) {
      guests = data;
    });
  }
});
