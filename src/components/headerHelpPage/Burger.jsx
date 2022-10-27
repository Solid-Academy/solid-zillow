import scss from "./headerHelpPage.module.scss";
import { useState } from "react";

function Burger() {
  const [isActive, setIsActive] = useState(false);
  const handleState = () => {
    setIsActive(!isActive);
    alert("clicked");
  };
  return (
    <button onClick={() => handleState()}>
      <img className={scss.imgButton} src="/images/headerHelp/burger.webp" alt="" />
    </button>
  );
}

export default Burger;
