const { registerUser, authUser, allUsers } = require("./userControllers");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("./chatControllers");
const { sendMessage, allMessages } = require("./messageControllers");
const { promptMessage } = require("./promptControllers");
module.exports = {
  registerUser,
  authUser,
  allUsers,

  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,

  sendMessage,
  allMessages,

  promptMessage,
};
