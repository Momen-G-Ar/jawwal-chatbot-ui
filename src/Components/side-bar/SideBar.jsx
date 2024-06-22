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
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {}, [searchTerm]);
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
                    style={{ cursor: "pointer" }}
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
                    <RiChatNewLine size={22} onClick={handleNewChat} />
                </div>
            </div>
            <div className="side-bar">
                <div>
                    <SearchBar onChange={onChange} value={searchTerm} />
                    <div className="history">
                        <ChatGroup
                            searchTerm={searchTerm}
                            groupName={"Today"}
                            arr={[
                                "Today chat 1",
                                "Today chat 2",
                                "Today chat 3",
                            ]}
                        />
                        <ChatGroup
                            searchTerm={searchTerm}
                            groupName={"Yesterday"}
                            arr={[
                                "Yesterday chat 1",
                                "Yesterday chat 2",
                                "Yesterday chat 3",
                            ]}
                        />
                        <ChatGroup
                            searchTerm={searchTerm}
                            groupName={"Last Week"}
                            arr={[
                                "Last Week chat 1",
                                "Last Week chat 2",
                                "Last Week chat 3",
                            ]}
                        />
                        <ChatGroup
                            searchTerm={searchTerm}
                            groupName={"Previous"}
                            arr={[
                                "Previous chat 1",
                                "Previous chat 2",
                                "Previous chat 3",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar2;
