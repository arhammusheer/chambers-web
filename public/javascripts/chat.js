const socket = io();

let connectedUsers = {};
let userList = document.getElementById("active-user-list");
let userName = document.getElementById("current-user-name").innerHTML;
let userID = document.getElementById("current-user-id").innerHTML;
let messageLog = document.getElementById("message-log");
let sendMessageButton = document.getElementById("send-message-button");
let messageField = document.getElementById("message-field");
let typingStatus = document.getElementById("is-typing-field");
let notificationSound = document.getElementById("notification-sound");
let userColor = document.getElementById("current-user-color").innerText;
let userImage = document.getElementById("user-image").innerText;
let availableColors = [
  "#52db23",
  "#59c037",
  "#ae73ce",
  "#0e97f8",
  "#ee54ce",
  "#6f0ef1",
  "#0628bd",
  "#bbd621",
];

let currentColor =
  availableColors[Math.floor(Math.random() * availableColors.length)];
if (userColor) currentColor = userColor;

const newUserConnected = (user) => {
  socket.emit("new user", {
    userid: userID,
    username: userName,
    userImage: userImage,
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
    newUser.style = "cursor: pointer";
    newUser.setAttribute(
      "data-content",
      `<div class="d-flex justify-content-center align-items-center"><img class="very-rounded" src="${data[reference].userImage.trim()}" height="50"><div>&nbsp;${data[reference].username}</div></div>`
    );
    $(newUser).popover({
      placement: "bottom",
      trigger: "hover",
      html: true,
    });
    userList.appendChild(newUser);
    document.getElementById("connect-sound").play();
  }
});

socket.on("user disconnected", function (user) {
  document.getElementById(`${user.userid}`).remove();
  document.getElementById("disconnect-sound").play();
});

socket.on("chat message", function (data) {
  console.log(data);
  let newMessage = document.createElement("div");
  newMessage.innerHTML = `<span class="badge font-weight-bold text-white" style="background-color: ${data.color}">${data.user.username} : </span> ${data.message}`;
  messageLog.appendChild(newMessage);
  messageLog.scrollTop = messageLog.scrollHeight;
  if (!document.hasFocus()) {
    notificationSound.play();
  }
});

socket.on("typing", function (data) {
  const { isTyping, nick } = data;

  if (isTyping < 1) {
    typingStatus.innerHTML = "";
    return;
  }
  console.log(`${nick} is typing`);
  typingStatus.innerHTML = `${nick} is typing...`;
});

function sendChatMessage(message) {
  data = {
    message: message,
    color: currentColor,
  };
  socket.emit("chat message", data);
  console.log(data);
}

sendMessageButton.onclick = () => {
  if (messageField.value) sendChatMessage(messageField.value);
  messageField.value = "";
  typingStatus.innerHTML = "";
  socket.emit("typing", {
    isTyping: messageField.value.length,
    nick: userName,
  });
};

messageField.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    messageField.value = messageField.value.trim();
    event.preventDefault();
    sendMessageButton.click();
  }
  socket.emit("typing", {
    isTyping: messageField.value.length,
    nick: userName,
  });
  if (messageField.value.length >= 500) {
    alert("🛑 Message limit reached. Keep it cool bruh 🛑");
  }
});

document.addEventListener("keydown", (event) => {
  messageField.focus();
});
