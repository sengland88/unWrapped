$("#registrybtn").on("click", function(event) {
  event.preventDefault();
  getGuests();

  function getGuests() {
    $.get("/api/guests", function(data) {
      guests = data;
    });
  }
});
