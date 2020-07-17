phoneView = document.getElementById("phone-view");
phoneEdit = document.getElementById("phone-edit");
phoneEditButton = document.getElementById("phone-edit-button");

phoneEditButton.onclick = function () {
  phoneView.hidden = true;
  phoneEdit.hidden = false;
};
