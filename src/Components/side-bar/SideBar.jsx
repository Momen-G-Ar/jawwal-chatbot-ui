// import SearchBar from "./search-bar";
import { RiChatNewLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import { TbProgressHelp } from "react-icons/tb";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import SearchBar from "./search-bar/search-bar";
import "./themed-side-bar.css";

const SideBar2 = (props) => {
  const [displaySideBar, setDisplaySidebar] = useState(true);
  const theme = props.theme;
  // cosnt dummyHistory = {
  //   Today: [

  //   ], Yesterday: [

  //   ], LastWeek: [

  //   ], Previous: [

  //   ]
  // }

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {}, [searchTerm]);

  return (
    <div
      className={`sidebar-container ${theme === "light" ? "light" : "dark"}`}
      style={!displaySideBar ? { background: "none" } : {}}
    >
      <div className="sideHeader ">
        <BsList
          size={25}
          onClick={() => setDisplaySidebar(!displaySideBar)}
          className="cursor-pointer"
        />
        <div className="icons">
          <TbProgressHelp size={22} />
          <RiChatNewLine size={22} />
        </div>
      </div>
      <div className="side-bar ">
        {displaySideBar ? (
          <div>
            <SearchBar />
            <div className="history">
              <div className="record ">
                <div className="group ">
                  <span className="group-name ">Today</span>
                  <MdOutlineKeyboardArrowDown />
                </div>
                {"Today chat 1"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title ">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Today chat 1</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Today chat 2"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Today chat 2</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Today chat 3"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Today chat 3</span>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="record ">
                <div className="group">
                  <span className="group-name">Yesterday</span>
                  <MdOutlineKeyboardArrowDown />
                </div>
                {"Yesterday chat 1"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Yesterday chat 1</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Yesterday chat 2"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Yesterday chat 2</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Yesterday chat 3"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Yesterday chat 3</span>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="record">
                <div className="group ">
                  <span className="group-name">Last week</span>
                  <MdOutlineKeyboardArrowDown />
                </div>
                {"Last week chat 1"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Last week chat 1</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Last week chat 2"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Last week chat 2</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Last week chat 3"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Last week chat 3</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Last week chat 3"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Last week chat 3</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Last week chat 3"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Last week chat 3</span>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="record">
                <div className="group ">
                  <span className="group-name">Last month</span>
                  <MdOutlineKeyboardArrowDown />
                </div>
                {"Last month chat 1"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Last month chat 1</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Last month chat 2"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Last month chat 2</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Last month chat 3"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Last month chat 3</span>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="record">
                <div className="group ">
                  <span className="group-name">Previous</span>
                  <MdOutlineKeyboardArrowDown />
                </div>
                {"Previous chat 1"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Previous chat 1</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Previous chat 2"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Previous chat 2</span>
                  </div>
                ) : (
                  <span></span>
                )}
                {"Previous chat 3"
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ? (
                  <div className="chat-title">
                    <MdChatBubbleOutline />
                    <span className="pl-3">Previous chat 3</span>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
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
