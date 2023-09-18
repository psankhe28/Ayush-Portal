import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { CloseIcon } from '@chakra-ui/icons';
import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import { useNavigate } from "react-router-dom";

const Bot = () => {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/home");
  }
  return (
    <div style={{margin:'auto'}}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      {/* <div style={{ borderRadius: '100%', position: 'fixed', bottom: '10px', padding: '1rem', right: '10px', backgroundColor: 'white', }}>
        <CloseIcon boxSize={5} color="red" onClick={submitHandler} />
      </div> */}
      <div class="adminActions">
        <input type="checkbox" name="adminToggle" class="adminToggle" />
        <a class="adminButton" href="#!"><i class="fa fa-bars"></i></a>
        <div class="adminButtons">
          {/* <a href="/chats" title="Add Company"><i class="fas fa-comments"></i></a> */}
          <a href="/home" title="Cancel"><i class="fa fa-close"></i></a>
          {/* <a href="#" title="Add User"><i class="fa fa-user-plus"></i></a> */}
          <a href="/chats" title="Chat"><i class="fas fa-comments"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Bot;
