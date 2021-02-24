import React, { useState } from "react";
import Timer from "./Timer";
import MenuList from "./Menu";

const Header = () => {
  const [isMenuOpen, setMenuCondition] = useState(false);

  const handleClick = () => {
    setMenuCondition(!isMenuOpen);
  };

  return (
    <header>
      <div className="game-name">Memory Game</div>
      {/* <Timer /> */}
      <div className="menu">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAOUlEQVRoge3XMQEAIAwDQcC/5yCiQ4beKciPOQd2u0nSHjHx2gOmBAAAwF4eWZsAAADYyyNrEwB0feFZDApmsPdrAAAAAElFTkSuQmCC"
          onClick={handleClick}
        />
        <>{isMenuOpen ? <MenuList /> : null}</>
      </div>
    </header>
  );
};

export default Header;
