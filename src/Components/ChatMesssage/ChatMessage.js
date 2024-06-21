import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import "./styles.css"; // Make sure to import the CSS file
import { IoCopyOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
const ChatMessage = (props) => {
  return (
    <div
      style={{
        flexDirection: props.sender === "assestant" ? "row" : "row-reverse",
      }}
      className={`chat-message-container `}
    >
      <div className="chat-message-image-container">
        <div
          className="chat-message-image"
          style={{
            backgroundImage: `url(${
              props.sender === "assestant"
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
          alignItems: props.sender === "assestant" ? "flex-start" : "flex-end",
          rowGap: "10px",
        }}
      >
        <div
          className="chat-message-text"
          style={{
            border: "1px solid var(--bot-message-chat-color)",
            color: `${
              props.sender === "assestant"
                ? "var(--bot-text-chat-color)"
                : "var(--user-text-chat-color)"
            }`,
            backgroundColor: `${
              props.sender === "assestant"
                ? "var(--bot-background-chat-color)"
                : "var(--user-background-chat-color)"
            }`,
          }}
        >
          {props.text}
        </div>
        {props.sender === "assestant" && (
          <div className="emojis-container">
            <HiOutlineSpeakerWave
              className="emoji-itself"
              style={{
                color: "var(--primary-emoji-color)",
                cursor: "pointer",
              }}
              size={20}
            />
            <IoCopyOutline
              className="emoji-itself"
              style={{
                color: "var(--primary-emoji-color)",
                cursor: "pointer",
              }}
              size={20}
            />
            <AiOutlineLike
              className="emoji-itself"
              style={{
                color: "var(--primary-emoji-color)",
                cursor: "pointer",
              }}
              size={20}
            />
            <AiOutlineDislike
              className="emoji-itself"
              style={{
                color: "var(--primary-emoji-color)",
                cursor: "pointer",
              }}
              size={20}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
