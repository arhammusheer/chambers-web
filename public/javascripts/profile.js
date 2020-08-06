nickView = document.getElementById("nickname-view");
nickEdit = document.getElementById("nickname-edit");
nickEditButton = document.getElementById("nickname-edit-button");
nickEditCancelButton = document.getElementById("cancel-button");
userNicknameInput = document.getElementById("user-nickname");

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

userNicknameInput.addEventListener("keypress", (e) => {
  var length = userNicknameInput.value.length;
  if (length > 30) {
    e.preventDefault();
    alert("Max limit: 30 characters");
  }
});
