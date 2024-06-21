import React from "react";
// import "./search-bar.scss";
import "./search-bar.css";

const SearchBar = () => {
  return (
    <div>
      <div className="search">
        <div>
          <input type="text" placeholder="Search . . ." required />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
