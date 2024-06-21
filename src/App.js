import React from "react";
import "./App.css";
import Sidebar2 from "./Components/side-bar/SideBar";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className="App dark">
      <Sidebar2 theme='dark' />
      <MainContent />
    </div>
  );
}

export default App;
