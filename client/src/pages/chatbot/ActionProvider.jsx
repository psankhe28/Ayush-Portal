import React from 'react';
import { ChatState } from '../../context/ChatProvider';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const {
        user,
        setSelectedChat,
        chats,
        setChats,
        notification,
        setNotification,
      } = ChatState();
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    const handleContacts = async() => {
        const response = await fetch(`/api/user`, {
        // const response = await fetch(`/api/user?search=${search}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const data = await response.json();
          console.log(data[0].email);
        const botMessage = createChatBotMessage(`Contacts - ${data[0].name} -  ${data[0].email}, ${data[1].name} -  ${data[1].email}`);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
     
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleContacts,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;