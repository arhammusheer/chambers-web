const socket = io();

let connectedUsers = {};
let userList = document.getElementById("active-user-list");
let userName = document.getElementById("current-user-name").innerHTML;
let userID = document.getElementById("current-user-id").innerHTML;
let messageLog = document.getElementById("message-log");
let sendMessageButton = document.getElementById("send-message-button");
let messageField = document.getElementById("message-field");

const newUserConnected = (user) => {
  socket.emit("new user", {
    userid: userID,
    username: userName,
  });
};

// new user is created so we generate nickname and emit event
newUserConnected();

socket.on("new user", function (data) {
  connectedUsers = data;
  userList.innerHTML = "";
  for (reference in data) {
    let newUser = document.createElement("div");
    newUser.className = "badge badge-pill badge-success";
    newUser.id = data[reference].userid;
    newUser.innerHTML = data[reference].username;
    userList.appendChild(newUser);
  }
});

socket.on("user disconnected", function (user) {
  document.getElementById(`${user.userid}`).remove();
});

socket.on("chat message", function (data) {
  console.log(data);
  let newMessage = document.createElement("div");
  newMessage.innerHTML = `<span class="text-success font-weight-bold">${data.user.username} : </span> ${data.message}`;
  messageLog.appendChild(newMessage);
});

function sendChatMessage(message) {
  data = message;
  socket.emit("chat message", data);
  console.log(data);
}

sendMessageButton.onclick = () => {
  if (messageField.value) sendChatMessage(messageField.value);
  messageField.value = "";
};

messageField.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessageButton.click();
  }
});
