import React, { useState, useRef } from "react";
import {
  FaFacebook,
  FaVideo,
  FaNewspaper,
  FaHeartbeat,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import "./MainContent.css";
import VoiceToText from "../VoicetoText/VoicetoText";
import ChatMessage from "../ChatMesssage/ChatMessage";
const MainContent = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const inputRef = useRef(null);

  const handleSend = () => {
    if (message.trim() !== "") {
      setMessages([
        ...messages,
        { msg: message, type: "sent" },
        { msg: "This is a dummy response.", type: "received" },
      ]);
      setMessage("");
    }
  };

  const handleButtonClick = (prompt, index) => {
    setMessage(prompt);
    setActiveButton(index);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(prompt.length, prompt.length);
  };

  return (
    <div
      className="main-content"
      style={{
        backgroundImage: "url('../../../public/imga/JawwalBackground.png')",
      }}
    >
      <header></header>
      {!messages.length && (
        <div className="writing-options">
          <h2 className="Title">Frequently Asked Questions</h2>
          <div className="options-grid">
            <button
              className={activeButton === 0 ? "active" : ""}
              onClick={() => handleButtonClick("Write Social media post ", 0)}
            >
              <FaFacebook size={32} style={{ marginBottom: "10px" }} />
              Write Social media post
            </button>
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick("Create video script ", 1)}
            >
              <FaVideo size={32} style={{ marginBottom: "10px" }} />
              Create video script
            </button>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick("Write a press release ", 2)}
            >
              <FaNewspaper size={32} style={{ marginBottom: "10px" }} />
              Write a press release
            </button>
            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick("Health Tips", 3)}
            >
              <FaHeartbeat size={32} style={{ marginBottom: "10px" }} />
              Health Tips
            </button>
            <button
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleButtonClick("Design a database schema ", 4)}
            >
              <FaDatabase size={32} style={{ marginBottom: "10px" }} />
              Design a database schema
            </button>
            <button
              className={activeButton === 5 ? "active" : ""}
              onClick={() => handleButtonClick("Write frontend code ", 5)}
            >
              <FaCode size={32} style={{ marginBottom: "10px" }} />
              Write frontend code
            </button>
          </div>
        </div>
      )}

      <div className="message-input-container">
        {messages.map((msg) => {
          console.log(msg);
          return (
            <>
              <ChatMessage sender={"user"} theme="light" text={msg.msg} />

              <ChatMessage sender={"assestant"} theme="light" text={msg.msg} />
            </>
          );
        })}
        <div className="message-input">
          <input
            type="text"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <VoiceToText setMessage={setMessage} />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
