import { ChatIcon } from "@chakra-ui/icons";
import { background } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Startup = () => {

  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/chats");
  }

  return (
    <>
      <h1 style={{textAlign:'center',fontSize:'2rem'}}>Startups</h1>

      {/* <Bot /> */}
      <div class="adminActions">
        <input type="checkbox" name="adminToggle" class="adminToggle" />
        <a class="adminButton" href="#!"><i class="fa fa-bars"></i></a>
        <div class="adminButtons">
          {/* <a href="/chats" title="Add Company"><i class="fas fa-comments"></i></a> */}
          <a href="/bot" title="Bot"><i class="fas fa-robot"></i></a>
          {/* <a href="#" title="Add User"><i class="fa fa-user-plus"></i></a> */}
          <a href="/chats" title="Chat"><i class="fas fa-comments"></i></a>
        </div>
      </div>
      {/* <div style={{ borderRadius: '100%', position: 'fixed', bottom: '10px', padding: '1rem', right: '10px', backgroundColor: 'white', }}>
        <ChatIcon boxSize={6} color="blue" onClick={submitHandler} />
      </div> */}
    </>
  );
};

export default Startup;
