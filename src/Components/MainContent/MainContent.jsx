import React, { useState } from "react";
import "./MainContent.css";
import VoiceToText from "../VoicetoText/VoicetoText";
import ChatMessage from "../ChatMesssage/ChatMessage";
import axios from "axios";
import { BsList } from "react-icons/bs";
import CONSTANTS from "./../../constants";
const MainContent = ({
  theme,
  messages,
  setMessages,
  displaySideBar,
  setDisplaySidebar,
  smallScreen,
  setSmallScreen,
  displaySideBarForSmallScreen,
  setDisplaySideBarForSmallScreen,
}) => {
  const [message, setMessage] = useState({
    prompt: "",
    chatId: undefined,
    sender: undefined,
    candidates: [],
  });
  console.log("small screen: ", smallScreen);
  console.log("display bar: ", displaySideBar);
  const [loading, setLoading] = React.useState(false);
  const handleSend = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMessages([...messages, { ...message, sender: "user", candidates: [] }]);
    setMessage((old) => ({ ...old, prompt: "", candidates: [] }));
    try {
      if (message.prompt.trim() !== "") {
        setLoading(true);
        const chatResponse = await sendMessage();
        console.log({ chatResponse });
        setMessages((oldState) => [
          ...oldState,
          {
            prompt: chatResponse.text,
            sender: "assistant",
            chatId: chatResponse.chatId,
            candidates: chatResponse.candidates,
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleButtonClick = (e) => {
    setMessage((old) => ({ ...old, prompt: e }));
  };
  const handleInput = (e) => {
    setMessage((old) => ({ ...old, prompt: e.target.value }));
  };

  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const response = await axios.post(`${CONSTANTS.baseURL}/api/chat`, {
      ...message,
    });
    console.log(response);
    return response.data;
  };

  return (
    <div
      style={{
        width: !displaySideBar || window.innerWidth < 768 ? "100%" : "80%",
      }}
      className={`main-content  ${!theme ? "light" : "dark"} ${
        !displaySideBar ||
        (window.innerWidth < 768 && !displaySideBarForSmallScreen)
          ? "hide"
          : "show"
      }`}
    >
      {!displaySideBar && (
        <BsList
          size={25}
          onClick={(e) => {
            e.stopPropagation();
            setDisplaySidebar(!displaySideBar);
          }}
          style={{ cursor: "pointer" }}
        />
      )}
      <header></header>
      {!messages.length && (
        <div className="writing-options">
          <img
            className="jawwal-icon"
            alt="Jawwal Icon"
            src="https://www.jawwal.ps/img/no-image.png"
          />
          <h2 className="Title">Frequently Asked Questions</h2>
          <div className="options-grid">
            <button
              className={"FAQ-button"}
              onClick={() => handleButtonClick("What is the eSIM service?")}
            >
              What is the eSIM service?
            </button>
            <button
              className={"FAQ-button"}
              onClick={() => handleButtonClick("How to install an eSIM?")}
            >
              How to install an eSIM?
            </button>
            <button
              className={"FAQ-button"}
              onClick={() =>
                handleButtonClick(
                  "How can I inquire about the package details?"
                )
              }
            >
              How can I inquire about the package details?
            </button>
            {window.innerWidth > 768 && (
              <button
                className={"FAQ-button"}
                onClick={() =>
                  handleButtonClick("What is the Missed Call Alert service?")
                }
              >
                What is the Missed Call Alert service?
              </button>
            )}
            {window.innerWidth > 768 && (
              <button
                className={"FAQ-button"}
                onClick={() =>
                  handleButtonClick("What are the features of the service?")
                }
              >
                What are the features of the service?
              </button>
            )}
            {window.innerWidth > 768 && (
              <button
                className={"FAQ-button"}
                onClick={() =>
                  handleButtonClick("How can I subscribe to the Ranli service?")
                }
              >
                How can I subscribe to the Ranli service?
              </button>
            )}
          </div>
        </div>
      )}

      <div className="message-input-container">
        <div
          className="chat-container"
          ref={scrollRef}
          style={{ overflow: "auto", paddingRight: "10px" }}
        >
          {messages.map((msg, ind) => {
            return (
              <>
                <ChatMessage
                  candidates={msg.candidates}
                  key={ind + "" + Math.random()}
                  sender={msg.sender}
                  text={msg.prompt}
                />
              </>
            );
          })}
          {loading && <ChatMessage sender={"assistant"} text={"typing..."} />}
        </div>
        <div className="message-input">
          <form
            style={{ display: "flex", width: "100%" }}
            onSubmit={handleSend}
          >
            <input
              type="text"
              value={message.prompt}
              onChange={handleInput}
              placeholder="Write a question"
            />
          </form>
          <VoiceToText
            setMessage={(e) => setMessage((old) => ({ ...old, prompt: e }))}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
