import { ChatIcon } from "@chakra-ui/icons";
import { background } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import './YetToBeDone.css'

const YetToBeDone = () => {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/chats");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Yet to be done</h1>

      {/* <Bot /> */}
      <div className="adminActions">
        <input type="checkbox" name="adminToggle" className="adminToggle" />
        <a className="adminButton" href="#!">
          <i className="fa fa-bars"></i>
        </a>
        <div className="adminButtons">
          {/* <a href="/chats" title="Add Company"><i class="fas fa-comments"></i></a> */}
          <a href="/bot" title="Bot">
            <FaRobot style={{margin:"auto"}} size={32}/>
          </a>{" "}
          {/* <a href="#" title="Add User"><i class="fa fa-user-plus"></i></a> */}
          <a href="/chats" title="Chat">
            <i className="fa fa-comments"></i>
          </a>
          {/* <a href="/chats" title='Chat'><BiCommentDetail/></a> */}
        </div>
      </div>
      {/* <div style={{ borderRadius: '100%', position: 'fixed', bottom: '10px', padding: '1rem', right: '10px', backgroundColor: 'white', }}>
        <ChatIcon boxSize={6} color="blue" onClick={submitHandler} />
      </div> */}
    </>
  );
};

export default YetToBeDone;
