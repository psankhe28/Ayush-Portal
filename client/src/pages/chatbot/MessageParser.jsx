import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
        actions.handleHello();
    }
    if (message.includes('contacts-investors')) {
        actions.handleInvestors();
    }
    if (message.includes('contacts-startups')) {
        actions.handleStartups();
    }
    if (message.includes('contacts-mentors')) {
        actions.handleMentors();
    }
    if (message.includes('contacts-incubators')) {
        actions.handleIncubators();
    }
    
  };

  return (
    <div >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;