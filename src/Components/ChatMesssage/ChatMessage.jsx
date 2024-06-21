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
    const handleOpenPdf = () => {
        window.open(
            "https://drive.google.com/file/d/1oRS67dGoU3y56Iv5OxctNzdIO767MQav/view",
            "_blank"
        );
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleOpenPDF = () => {
        setShow(false);
        handleOpenPdf();
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
                    {props.sender === "assistant" && (
                        <LuExternalLink
                            color="green"
                            size={14}
                            style={{ cursor: "pointer" }}
                            onClick={handleShowDialog}
                        />
                    )}
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
                        />

                        <IoCopyOutline
                            onClick={copyToClipboard}
                            className="emoji-itself"
                            style={{
                                color: "var(--primary-emoji-color)",
                                cursor: "pointer",
                            }}
                            size={20}
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
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatMessage;
