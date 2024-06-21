import React from "react";
import './theme-flipper.css'

const ThemeFlipper = () => {
  return (
    <div>
      <div className="uael-main-btn" data-switch-type="round_2">
        <div className="uael-toggle">
          <input
            className="uael-switch-round-2 elementor-clickable"
            type="checkbox"
            id="toggle_2"
          />
          <label for="toggle_2" className="elementor-clickable"></label>
        </div>
      </div>
    </div>
  );
};

export default ThemeFlipper;
