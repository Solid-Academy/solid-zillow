import scss from "./headerHelpPage.module.scss";
import { useState } from "react";
import Modal from "./Modal";

function Burger() {
  const [isModelOpen, setModalOpen] = useState(false);
  const onDropDown = () => {
    setModalOpen(!isModelOpen);
  };
  return (
    <div className={scss.headerSquare}>
      <button className={scss.burger} onClick={onDropDown}>
        <img className={scss.imgButton} src="/images/headerHelp/burger.webp" alt="" />
      </button>
      {isModelOpen ? <Modal /> : null}
    </div>
  );
}

export default Burger;
