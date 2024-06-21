import React from "react";
import { FaRegComments, FaPlus } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="conversation-header">
        <h3>Conversation History</h3>
        <div className="new-conversation">
          <button>
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="conversation-history">
        <ul>
          <li>
            <FaRegComments /> Stress & Anxiety Everytime
          </li>
          <li>
            <FaRegComments /> Not Having Enough Money
          </li>
          <li>
            <FaRegComments /> Mental Health
          </li>
          <li>
            <FaRegComments /> Food Industry case study
          </li>
          <li>
            <FaRegComments /> Team Management Plan
          </li>
          <li>
            <FaRegComments /> Form validation code
          </li>
        </ul>
      </div>
      <div className="profile">
        <img src="./imga/man.jpg" alt="Profile" />
        <p>Alex Wagon</p>
      </div>
    </div>
  );
};

export default Sidebar;
