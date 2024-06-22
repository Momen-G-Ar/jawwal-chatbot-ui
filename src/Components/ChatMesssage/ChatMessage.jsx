import React from "react";
import {
    AiOutlineDislike,
    AiOutlineLike,
    AiFillLike,
    AiFillDislike,
} from "react-icons/ai";
import "./styles.css"; // Make sure to import the CSS file
import { IoCopyOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { LuExternalLink } from "react-icons/lu";
import PDFDialog from "../PDFDialog/PDFDialog";
import CONSTANTS from "../../constants";
const ChatMessage = (props) => {
    const [show, setShow] = React.useState(false);
    const [liked, setLiked] = React.useState("steady");
    const handleLike = () => {
        if (liked === "liked") {
            setLiked("steady");
        } else {
            setLiked("liked");
        }
    };
    const handleDisLike = () => {
        if (liked === "disliked") {
            setLiked("steady");
        } else {
            setLiked("disliked");
        }
    };
    const handleShowDialog = () => {
        setShow(true);
    };
    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(props.text);
        window.speechSynthesis.speak(utterance);
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.text).then(
            () => {
                console.log("Copied!");
            },
            () => {
                console.log("Failed to copy!");
            }
        );
    };

    const handleClickOpen = () => {
        setShow(true);
    };
    const handleOpenPdf = (pdfName) => {
        window.open(CONSTANTS.pdfMap[pdfName], "_blank");
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleOpenPDF = (pdfName) => {
        setShow(false);
        handleOpenPdf(pdfName);
    };
    return (
        <div
            style={{
                flexDirection:
                    props.sender === "assistant" ? "row" : "row-reverse",
            }}
            className={`chat-message-container ${props.theme}`}
        >
            <PDFDialog
                candidates={props.candidates}
                show={show}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                handleOpenPDF={handleOpenPDF}
            />
            <div className="chat-message-image-container">
                <div
                    className="chat-message-image"
                    style={{
                        backgroundImage: `url(${
                            props.sender === "assistant"
                                ? "https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/b6/51/7b/b6517bbf-877b-3f7e-9b37-b0bdc16b3858/source/256x256bb.jpg"
                                : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                        })`,
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:
                        props.sender === "assistant"
                            ? "flex-start"
                            : "flex-end",
                    rowGap: "10px",
                }}
            >
                <div
                    className="chat-message-text"
                    style={{
                        border: "1px solid var(--bot-message-chat-color)",
                        color: `${
                            props.sender === "assistant"
                                ? "var(--bot-text-chat-color)"
                                : "var(--user-text-chat-color)"
                        }`,
                        backgroundColor: `${
                            props.sender === "assistant"
                                ? "var(--bot-background-chat-color)"
                                : "var(--user-background-chat-color)"
                        }`,
                    }}
                >
                    {props.text}&nbsp;
                </div>
                {props.sender === "assistant" && (
                    <div className="emojis-container">
                        <HiOutlineSpeakerWave
                            className="emoji-itself"
                            onClick={handleSpeak}
                            style={{
                                color: "var(--primary-emoji-color)",
                                cursor: "pointer",
                            }}
                            size={20}
                            title="Speak"
                        />

                        <IoCopyOutline
                            onClick={copyToClipboard}
                            className="emoji-itself"
                            style={{
                                color: "var(--primary-emoji-color)",
                                cursor: "pointer",
                            }}
                            size={20}
                            title="Copy"
                        />
                        {liked === "liked" ? (
                            <AiFillLike
                                onClick={handleLike}
                                className="emoji-itself"
                                style={{
                                    color: "var(--user-background-chat-color)",
                                    cursor: "pointer",
                                }}
                                size={20}
                                title="Like"
                            />
                        ) : (
                            <AiOutlineLike
                                onClick={handleLike}
                                className="emoji-itself"
                                style={{
                                    color: "var(--primary-emoji-color)",
                                    cursor: "pointer",
                                }}
                                size={20}
                                title="Like"
                            />
                        )}
                        {liked === "disliked" ? (
                            <AiFillDislike
                                onClick={handleDisLike}
                                className="emoji-itself"
                                style={{
                                    color: "var(--user-background-chat-color)",
                                    cursor: "pointer",
                                }}
                                size={20}
                                title="Dislike"
                            />
                        ) : (
                            <AiOutlineDislike
                                onClick={handleDisLike}
                                className="emoji-itself"
                                style={{
                                    color: "var(--primary-emoji-color)",
                                    cursor: "pointer",
                                }}
                                size={20}
                                title="Dislike"
                            />
                        )}
                        {props.sender === "assistant" &&
                        props.text !==
                            "I'm sorry, I don't have the information you are looking for. Do you want real person support?" ? (
                            <LuExternalLink
                                color="green"
                                className="emoji-itself"
                                size={20}
                                style={{
                                    cursor: "pointer",
                                }}
                                onClick={handleShowDialog}
                                title="Show Relevant Sources"
                            />
                        ) : (
                            <LuExternalLink
                                color="green"
                                className="emoji-itself"
                                size={20}
                                style={{
                                    cursor: "pointer",
                                }}
                                title="Jawwal Team Support"
                                onClick={() =>
                                    window.open(
                                        "https://jawwalbot.jawwal.ps/Jawwalwebchat",
                                        "_blank"
                                    )
                                }
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatMessage;
