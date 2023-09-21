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
    const handleInvestors = async() => {
        const response = await fetch(`http://localhost:5000/api/user`, {

        // const response = await fetch(`/api/user?search=${search}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const data = await response.json();
          console.log(data);
          const ci = [];
          for(let i=0;i<data.length;i++){
            if(data[i].userType == "investor"){
              ci.push(data[i]);
            }
          }
          
        const botMessage = createChatBotMessage(`Investors - ${ci[0].name} - ${ci[0].email}`);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    const handleStartups = async() => {
        const response = await fetch(`http://localhost:5000/api/user`, {
        // const response = await fetch(`/api/user?search=${search}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const data = await response.json();
          console.log(data);
          const ci = [];
          for(let i=0;i<data.length;i++){
            if(data[i].userType == "startUp"){
              ci.push(data[i]);
            }
          }
          
        const botMessage = createChatBotMessage(`Startups - ${ci[0].name} - ${ci[0].email}`);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    const handleMentors = async() => {
        const response = await fetch(`http://localhost:5000/api/user`, {
        // const response = await fetch(`/api/user?search=${search}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const data = await response.json();
          console.log(data);
          const ci = [];
          for(let i=0;i<data.length;i++){
            if(data[i].userType == "mentor"){
              ci.push(data[i]);
            }
          }
          
        const botMessage = createChatBotMessage(`Mentors - ${ci[0].name} - ${ci[0].email}`);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
     
    const handleIncubators = async() => {
        const response = await fetch(`http://localhost:5000/api/user`, {
        // const response = await fetch(`/api/user?search=${search}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const data = await response.json();
          console.log(data);
          const ci = [];
          for(let i=0;i<data.length;i++){
            if(data[i].userType == "incubator"){
              ci.push(data[i]);
            }
          }
          
        const botMessage = createChatBotMessage(`Incubators - ${ci[0].name} - ${ci[0].email}`);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
     
  return (
    <div background="purple">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleInvestors,
            handleStartups,
            handleMentors,
            handleIncubators,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;