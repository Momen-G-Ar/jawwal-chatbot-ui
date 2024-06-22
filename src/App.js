import React from "react";
import "./App.css";
import Sidebar2 from "./Components/side-bar/SideBar";
import MainContent from "./Components/MainContent/MainContent";
import axios from "axios";
import CONSTANTS from "./constants";

function App() {
    const [darkTheme, setDarkTheme] = React.useState(false);
    const [messages, setMessages] = React.useState([]);
    const [displaySideBar, setDisplaySidebar] = React.useState(true);
    const [groups, setGroups] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [message, setMessage] = React.useState({
        prompt: "",
        chatId: undefined,
        sender: undefined,
        candidates: [],
    });
    const handleNewChat = () => {
        setMessages([]);
        setMessage({
            prompt: "",
            chatId: undefined,
            sender: undefined,
            candidates: [],
        });
    };
    const handleChangeChatMessages = async (chatId) => {
        const response = await axios.get(
            `${CONSTANTS.baseURL}/api/chat/${chatId}`
        );
        const newMessages = response.data.history.flatMap((item) => {
            return [
                {
                    prompt: item.prompt,
                    chatId: chatId,
                    sender: "user",
                    candidates: item.candidates,
                },
                {
                    prompt: item.text,
                    chatId: chatId,
                    sender: "assistant",
                    candidates: item.candidates,
                },
            ];
        });
        setMessages(newMessages);
    };

    React.useEffect(() => {
        const getGroups = async () => {
            const groupsResponse = await axios(
                `${CONSTANTS.baseURL}/api/chat/`,
                {
                    params: {
                        query: searchTerm,
                        page: 1,
                        page_size: 10,
                    },
                }
            );
            console.log({ groups: groupsResponse.data.result });
            setGroups(groupsResponse.data.result);
        };
        getGroups();
    }, [searchTerm, messages]);

    return (
        <div className={`App ${darkTheme ? "dark" : "light"}`}>
            {displaySideBar && (
                <Sidebar2
                    groups={groups}
                    theme={darkTheme}
                    handleNewChat={handleNewChat}
                    setDarkTheme={setDarkTheme}
                    displaySideBar={displaySideBar}
                    setDisplaySidebar={setDisplaySidebar}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleChangeChatMessages={handleChangeChatMessages}
                />
            )}
            <MainContent
                setDisplaySidebar={setDisplaySidebar}
                messages={messages}
                setMessages={setMessages}
                theme={darkTheme}
                displaySideBar={displaySideBar}
                message={message}
                setMessage={setMessage}
            />
        </div>
    );
}

export default App;
