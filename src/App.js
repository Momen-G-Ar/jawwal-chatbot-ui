import React from "react";
import "./App.css";
import Sidebar2 from "./Components/side-bar/SideBar";
import MainContent from "./Components/MainContent/MainContent";
import { dark } from "@mui/material/styles/createPalette";

function App() {
    const [darkTheme, setDarkTheme] = React.useState(false);
    console.log(darkTheme);
    return (
        <div className={`App ${dark ? "dark" : "light"}`}>
            <Sidebar2 theme={darkTheme} setDarkTheme={setDarkTheme} />
            <MainContent theme={darkTheme} />
        </div>
    );
}

export default App;
