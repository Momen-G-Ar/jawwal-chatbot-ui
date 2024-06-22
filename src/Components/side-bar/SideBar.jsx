import { RiChatNewLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import SearchBar from "./search-bar/search-bar";
import "./themed-side-bar.css";
import ChatGroup from "../ChatGroup/ChatGroup";

const SideBar2 = ({
    setSearchTerm,
    searchTerm,
    groups,
    handleChangeChatMessages,
    theme,
    setDarkTheme,
    handleNewChat,
    displaySideBar,
    setDisplaySidebar,
    smallScreen,
    setSmallScreen,
    displaySideBarForSmallScreen,
    setDisplaySideBarForSmallScreen,
}) => {
    const onChange = (e) => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 768);
            //   setDisplaySidebar(window.innerWidth > 768);
        };
        console.log("ping...");
        console.log("display side bar: ", displaySideBar);

        // Check the initial screen size
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        // return () => {
        //   window.removeEventListener("resize", handleResize);
        // };
        // eslint-disable-next-line
    }, [window.innerWidth]);
    return (
        <div
            className={`sidebar-container ${!theme ? "light" : "dark"} ${
                !displaySideBar ||
                (smallScreen && !displaySideBarForSmallScreen)
                    ? "hide"
                    : "show"
            }`}
            style={
                !displaySideBar ||
                (smallScreen && !displaySideBarForSmallScreen)
                    ? { background: "none" }
                    : {}
            }
        >
            <div
                className="sideHeader "
                style={
                    !displaySideBar ||
                    (smallScreen && !displaySideBarForSmallScreen)
                        ? { borderBottom: "none" }
                        : {}
                }
            >
                <BsList
                    className=""
                    size={25}
                    // style= {{minWidth: '50px'}}
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log("small screen: ", smallScreen);
                        smallScreen
                            ? setDisplaySideBarForSmallScreen(
                                  !displaySideBarForSmallScreen
                              )
                            : setDisplaySidebar(!displaySideBar);
                    }}
                    style={{
                        cursor: "pointer",
                        minWidth: "40px",
                        zIndex: 2,
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

            <RiChatNewLine
                size={22}
                style={{ cursor: "pointer" }}
                onClick={handleNewChat}
            />
            <div
                className={`side-bar ${
                    !displaySideBar ||
                    (smallScreen && !displaySideBarForSmallScreen)
                        ? "hide"
                        : "show"
                }`}
            >
                <div style={{ width: "100%" }}>
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
