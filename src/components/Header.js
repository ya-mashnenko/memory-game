import React, { useState } from "react";
import Timer from "./Timer";
import MenuList from "./Menu";
import useSound from "use-sound";

const Header = () => {
  const [isMenuOpen, setMenuCondition] = useState(false);
  const [clickMenu] = useSound("public/sounds/short-click.mp3");
  const [click] = useSound("public/sounds/water-click.mp3");

  const handleClick = () => {
    setMenuCondition(!isMenuOpen);
    clickMenu();
  };

  return (
    <header>
      <div className="game-name" onClick={click}>
        Memory Game
      </div>
      {/* <Timer /> */}
      <div className="menu">
        {/* <button onClick={turnOffSound}>Turn sound off</button> */}
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
