import React from "react";
import "./App.css";
import Sidebar2 from "./Components/side-bar/SideBar";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  const [theme, setTheme] = React.useState('light')
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
  }
  return (
    <div className={`App ${theme}`}>
      <Sidebar2 theme={theme} setTheme={handleThemeChange} />
      <MainContent />
    </div>
  );
}

export default App;
