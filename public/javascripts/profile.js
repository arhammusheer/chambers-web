nickView = document.getElementById("nickname-view");
nickEdit = document.getElementById("nickname-edit");
nickEditButton = document.getElementById("nickname-edit-button");
nickEditCancelButton = document.getElementById("cancel-button");
userNicknameInput = document.getElementById("user-nickname");
colorView = document.getElementById("color-view");
colorEdit = document.getElementById("color-edit");
colorEditButton = document.getElementById("color-edit-button");
colorEditCancelButton = document.getElementById("color-cancel-button");
userColorInput = document.getElementById("user-color");

nickEditButton.onclick = function () {
  $("#nickname-view").fadeOut();
  $("#nickname-edit").fadeIn();
  nickEdit.hidden = false;
};
nickEditCancelButton.onclick = function () {
  $("#nickname-view").fadeIn();
  $("#nickname-edit").fadeOut();
  nickEdit.hidden = true;
};

colorEditButton.onclick = function () {
  $("#color-view").fadeOut();
  $("#color-edit").fadeIn();
  colorEdit.hidden = false;
};
colorEditCancelButton.onclick = function () {
  $("#color-view").fadeIn();
  $("#color-edit").fadeOut();
  colorEdit.hidden = true;
};
userNicknameInput.addEventListener("keypress", (e) => {
  var length = userNicknameInput.value.length;
  if (length > 30) {
    e.preventDefault();
    alert("Max limit: 30 characters");
  }
});
