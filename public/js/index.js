var loggedIn = localStorage.setItem("loggedIn", false);

if (!loggedIn) {
  $("#sideBar").hide()
};
