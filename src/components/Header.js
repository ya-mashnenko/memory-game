import React, { useState } from "react";
import Timer from "./Timer";
import MenuList from "./Menu";
import useSound from "use-sound";

const Header = () => {
  const [isMenuOpen, setMenuCondition] = useState(false);
  const [clickMenu] = useSound("public/sounds/short-click.mp3");
  // const [click] = useSound("public/sounds/water-click.mp3");
  // const [play] = useSound(sound, {
  //   sprite: {
  //     clickMenu: "public/sounds/short-click.mp3",
  //     clickHeader: "public/sounds/water-click.mp3",
  //   },
  // });

  // const playSound = (e) => {
  //   e.preventDefault();
  //   play(e.target.id);
  // };

  const handleClick = (e) => {
    setMenuCondition(!isMenuOpen);
    // playSound(e);
    clickMenu;
  };

  return (
    <header>
      <div className="game-name">Memory Game</div>
      {/* <Timer /> */}
      <div className="menu">
        {/* <button onClick={turnOffSound}>Turn sound off</button> */}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAOUlEQVRoge3XMQEAIAwDQcC/5yCiQ4beKciPOQd2u0nSHjHx2gOmBAAAwF4eWZsAAADYyyNrEwB0feFZDApmsPdrAAAAAElFTkSuQmCC"
          onClick={(e) => handleClick(e)}
        />
        <>{isMenuOpen ? <MenuList /> : null}</>
      </div>
    </header>
  );
};

export default Header;
