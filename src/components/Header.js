import React from "react";
import CheckboxListSecondary from "./Menu";

const Header = () => {
  return (
    <header>
      <div className="game-name">Memory Game</div>
      <div className="menu">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAOUlEQVRoge3XMQEAIAwDQcC/5yCiQ4beKciPOQd2u0nSHjHx2gOmBAAAwF4eWZsAAADYyyNrEwB0feFZDApmsPdrAAAAAElFTkSuQmCC" />
      </div>
      {/* <CheckboxListSecondary /> */}
    </header>
  );
};

export default Header;
