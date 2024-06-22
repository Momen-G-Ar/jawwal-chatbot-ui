import React from "react";
import { MdChatBubbleOutline, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const ChatGroup = ({
    searchTerm,
    groupName,
    items,
    handleChangeChatMessages,
}) => {
    const trimString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        }
        return str;
    };
    const [showContent, setShowContent] = React.useState(true);
    return (
        <div className="record">
            <div className="group">
                <span className="group-name">{groupName}</span>
                {showContent ? (
                    <MdOutlineKeyboardArrowUp
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowContent((old) => !old)}
                    />
                ) : (
                    <MdOutlineKeyboardArrowDown
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowContent((old) => !old)}
                    />
                )}
            </div>
            {showContent && (
                <>
                    {items.map((item) => {
                        const title = trimString(item.title, 32);
                        return (
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    handleChangeChatMessages(item.chatId)
                                }
                            >
                                <div className="chat-title">
                                    <MdChatBubbleOutline />
                                    <span className="pl-3">{title}</span>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ChatGroup;
