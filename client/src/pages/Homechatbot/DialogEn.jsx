import React from "react";

export default function DialogEn() {
  return (
    <>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-icon="https://i.postimg.cc/hvq6KhLw/png-clipart-internet-bot-chatbot-business-chatbot-avatar-child-face-thumbnail-removebg-preview.png"
        chat-title="Ayush"
        agent-id="08de9e99-9273-4aa7-84f1-5c3746882515"
        language-code="en"
      ></df-messenger>
    </>
  );
}
