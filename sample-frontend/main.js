const txtName = document.getElementById("username");
const btn = document.getElementById("btnDisplayName");

const divMessage = document.getElementById("divMessage");
const divMessageText = document.getElementById("divMessageText");
const btCloseMessage = document.getElementById("btCloseMessage");

function displayName() {
  divMessageText.innerHTML = txtName.value;
  divMessage.style.display = "block";
}

function closeMessage() {
  divMessage.style.display = "none";
}
