// import SearchBar from "./search-bar";
import { RiChatNewLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React, { useEffect, useState } from "react";
import SearchBar from "./search-bar/search-bar";
import ThemeFlipper from "./theme-flipper/theme-flipper";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import "./themed-side-bar.css";
import ChatGroup from "../ChatGroup/ChatGroup";

const SideBar2 = ({ theme, setDarkTheme }) => {
    const [displaySideBar, setDisplaySidebar] = useState(true);
    // cosnt dummyHistory = {
    //   Today: [

    //   ], Yesterday: [

    //   ], LastWeek: [

    //   ], Previous: [

    //   ]
    // }

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
                    onClick={() => setDisplaySidebar(!displaySideBar)}
                    className="cursor-pointer"
                />
                <div className="icons">
                    <div className="uael-main-btn" data-switch-type="round_2">
                        <div className="uael-toggle">
                            <input
                                className="uael-switch-round-2 elementor-clickable"
                                type="checkbox"
                                id="toggle_2"
                                onClick={() => setDarkTheme((old) => !old)}
                            />
                            <label
                                for="toggle_2"
                                className="elementor-clickable"
                            ></label>
                        </div>
                    </div>
                    <RiChatNewLine size={22} />
                </div>
            </div>
            <div className="side-bar ">
                {displaySideBar ? (
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
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
};

export default SideBar2;
