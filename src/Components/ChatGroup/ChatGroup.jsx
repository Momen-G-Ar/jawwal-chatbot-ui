import React from "react";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const ChatGroup = ({ searchTerm, groupName, arr }) => {
    const [showContent, setShowContent] = React.useState(true);
    return (
        <div className="record ">
            <div className="group ">
                <span className="group-name">{groupName}</span>
                <MdOutlineKeyboardArrowDown
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowContent((old) => !old)}
                />
            </div>
            {showContent && (
                <>
                    {arr.map((name) => {
                        return (
                            <>
                                {`${name}`
                                    .trim()
                                    .toLowerCase()
                                    .includes(
                                        searchTerm.toLowerCase().trim()
                                    ) ? (
                                    <div className="chat-title ">
                                        <MdChatBubbleOutline />
                                        <span className="pl-3">{name}</span>
                                    </div>
                                ) : (
                                    <span></span>
                                )}
                            </>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ChatGroup;
