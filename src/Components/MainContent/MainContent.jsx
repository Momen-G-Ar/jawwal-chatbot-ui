import React, { useState } from "react";
import "./MainContent.css";
import VoiceToText from "../VoicetoText/VoicetoText";
import ChatMessage from "../ChatMesssage/ChatMessage";
import axios from "axios";
import { BsList } from "react-icons/bs";
const MainContent = ({
    theme,
    messages,
    setMessages,
    displaySideBar,
    setDisplaySidebar,
}) => {
    const [message, setMessage] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (message.trim() !== "") {
            setMessages([...messages, { msg: message, type: "sent" }]);
            setMessage("");
        }
        setMessage("");
    };

    const handleButtonClick = (e) => {
        setMessage(e);
    };
    const handleInput = (e) => {
        setMessage(e.target.value);
    };

    const scrollRef = React.useRef(null);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const getChat = async () => {
        const response = await axios.get();
    };

    return (
        <div
            style={{ width: displaySideBar ? "80%" : "100%" }}
            className={`main-content  ${!theme ? "light" : "dark"}`}
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
                            onClick={() =>
                                handleButtonClick("What is the eSIM service?")
                            }
                        >
                            What is the eSIM service?
                        </button>
                        <button
                            className={"FAQ-button"}
                            onClick={() =>
                                handleButtonClick("How to install an eSIM?")
                            }
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
                        <button
                            className={"FAQ-button"}
                            onClick={() =>
                                handleButtonClick(
                                    "What is the Missed Call Alert service?"
                                )
                            }
                        >
                            What is the Missed Call Alert service?
                        </button>
                        <button
                            className={"FAQ-button"}
                            onClick={() =>
                                handleButtonClick(
                                    "What are the features of the service?"
                                )
                            }
                        >
                            What are the features of the service?
                        </button>
                        <button
                            className={"FAQ-button"}
                            onClick={() =>
                                handleButtonClick(
                                    "How can I subscribe to the Ranli service?"
                                )
                            }
                        >
                            How can I subscribe to the Ranli service?
                        </button>
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
                                    key={ind + "" + Math.random()}
                                    sender={"user"}
                                    text={msg.msg}
                                />

                                <ChatMessage
                                    key={ind + "" + Math.random()}
                                    sender={"assistant"}
                                    theme="light"
                                    text={msg.msg}
                                />
                            </>
                        );
                    })}
                </div>
                <div className="message-input">
                    <form
                        style={{ display: "flex", width: "100%" }}
                        onSubmit={handleSend}
                    >
                        <input
                            type="text"
                            value={message}
                            onChange={handleInput}
                            placeholder="Write a question"
                        />
                    </form>
                    <VoiceToText setMessage={setMessage} />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
