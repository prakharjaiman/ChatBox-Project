const backBtnIcon = document.querySelector(".back-btn-icon");
const messageBar = document.querySelectorAll(".message-bar");
const search = document.querySelector(".search");
const chatTitle = document.querySelector(".chat-title");
const messageList = document.querySelector(".message-list");
const messagesContainer = document.querySelector(".messages-container");

const backBtnFunction = () => {
  search.classList.remove("hide-div");
  messageList.classList.remove("hide-div");
  chatTitle.classList.add("hide-div");
  messagesContainer.classList.add("hide-div");
};

const chatOpenFunction = () => {
  search.classList.add("hide-div");
  messageList.classList.add("hide-div");
  chatTitle.classList.remove("hide-div");
  messagesContainer.classList.remove("hide-div");
};

backBtnIcon.addEventListener("click", backBtnFunction);
messageList.addEventListener("click", chatOpenFunction);
