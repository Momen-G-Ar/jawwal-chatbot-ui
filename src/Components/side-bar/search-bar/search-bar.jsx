import React from "react";
// import "./search-bar.scss";
import "./search-bar.css";

const SearchBar = ({ onChange, value }) => {
    return (
        <div>
            <div className="search">
                <div style={{ width: "94%" }}>
                    <input
                        onChange={onChange}
                        value={value}
                        type="text"
                        placeholder="Search..."
                        required
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
