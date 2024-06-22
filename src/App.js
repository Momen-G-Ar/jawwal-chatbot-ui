import React from "react";
import "./App.css";
import Sidebar2 from "./Components/side-bar/SideBar";
import MainContent from "./Components/MainContent/MainContent";

function App() {
    const [darkTheme, setDarkTheme] = React.useState(false);
    const [messages, setMessages] = React.useState([]);
    const [displaySideBar, setDisplaySidebar] = React.useState(true);

    const handleNewChat = () => {};

    return (
        <div className={`App ${darkTheme ? "dark" : "light"}`}>
            {displaySideBar && (
                <Sidebar2
                    theme={darkTheme}
                    handleNewChat={handleNewChat}
                    setDarkTheme={setDarkTheme}
                    displaySideBar={displaySideBar}
                    setDisplaySidebar={setDisplaySidebar}
                />
            )}
            <MainContent
                setDisplaySidebar={setDisplaySidebar}
                messages={messages}
                setMessages={setMessages}
                theme={darkTheme}
                displaySideBar={displaySideBar}
            />
        </div>
    );
}

export default App;
