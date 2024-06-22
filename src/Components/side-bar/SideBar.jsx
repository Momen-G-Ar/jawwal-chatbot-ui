import { RiChatNewLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import SearchBar from "./search-bar/search-bar";
import "./themed-side-bar.css";
import ChatGroup from "../ChatGroup/ChatGroup";

const SideBar2 = ({
    theme,
    setDarkTheme,
    handleNewChat,
    displaySideBar,
    setDisplaySidebar,
    setSearchTerm,
    searchTerm,
    groups,
    handleChangeChatMessages,
}) => {
    const onChange = (e) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div
            className={`sidebar-container ${!theme ? "light" : "dark"}`}
            style={!displaySideBar ? { background: "none" } : {}}
        >
            <div className="sideHeader ">
                <BsList
                    size={25}
                    onClick={(e) => {
                        e.stopPropagation();
                        setDisplaySidebar(!displaySideBar);
                    }}
                    style={{
                        cursor: "pointer",
                        color: "var(--primary-emoji-color)",
                    }}
                />
                <div className="icons">
                    <div className="uael-main-btn" data-switch-type="round_2">
                        <div className="uael-toggle">
                            <input
                                className="uael-switch-round-2 elementor-clickable"
                                type="checkbox"
                                id="toggle_2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDarkTheme((old) => !old);
                                }}
                            />
                            <label
                                for="toggle_2"
                                className="elementor-clickable"
                            ></label>
                        </div>
                    </div>
                    <RiChatNewLine
                        size={22}
                        style={{
                            cursor: "pointer",
                            color: "var(--primary-emoji-color)",
                        }}
                        onClick={handleNewChat}
                    />
                </div>
            </div>
            <div className="side-bar">
                <div>
                    <SearchBar onChange={onChange} value={searchTerm} />
                    <div className="history">
                        {(groups || []).map((group) => {
                            console.log({ group });
                            return (
                                <ChatGroup
                                    handleChangeChatMessages={
                                        handleChangeChatMessages
                                    }
                                    searchTerm={searchTerm}
                                    groupName={group.key}
                                    items={group.items || []}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar2;
