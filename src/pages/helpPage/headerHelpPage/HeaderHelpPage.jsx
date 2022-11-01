import scss from "./headerHelpPage.module.scss";
import { useState } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

function HeaderHelpPage() {
  const { t } = useTranslation();
  const [isModelOpen, setModalOpen] = useState(false);
  const onDropDown = () => {
    setModalOpen(!isModelOpen);
  };
  return (
    <header className={scss.header}>
      <img className={scss.img} src="/images/headerHelp/Zillow.png" alt="" />
      <div className={scss.headerSquare}>
        <button className={scss.burger} onClick={onDropDown}>
          <img className={scss.imgButton} src="/images/headerHelp/burger.webp" alt="" />
        </button>
        {isModelOpen ? <Modal /> : null}
      </div>
      <div className={scss.submitBlock}>
        <a href="#">{t("headerHelper.Submit a request")}</a>
        <a href="#">{t("headerHelper.Sign in")}</a>
      </div>
    </header>
  );
}

export default HeaderHelpPage;
