phoneView = document.getElementById("phone-view");
phoneEdit = document.getElementById("phone-edit");
phoneEditButton = document.getElementById("phone-edit-button");
phonoeEditCancelButton = document.getElementById("cancel-button");

phoneEditButton.onclick = function () {
  $("#phone-view").fadeOut();
  $("#phone-edit").fadeIn();
  //phoneView.hidden = true;
  phoneEdit.hidden = false;
};
phonoeEditCancelButton.onclick = function(){
  $("#phone-view").fadeIn();
  $("#phone-edit").fadeOut();
  //phoneView.hidden = true;
  phoneEdit.hidden = true;
}

$("#user-nickname").keypress(function (e) {
  var length = this.value.length;
  if (length > 30) {
    e.preventDefault();
    alert("Max limit: 30 characters");
  }
});