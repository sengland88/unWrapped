if (!localStorage.getItem("userId")) {
  alert("please log in");
  window.location.href = "/";
};

$("#signOut").on("click", function() {
  localStorage.clear();
});