import scss from "./headerHelpPage.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HeaderHelpPage() {
  const { t } = useTranslation();
  const [isModelOpen, setModalOpen] = useState(false);
  const onDropDown = () => {
    setModalOpen(!isModelOpen);
  };
  return (
    <header className={scss.header}>
      <img className={scss.imgZillow} src="/images/headerHelp/Zillow.png" alt="logo image" />
      <div className={scss.headerSquare}>
        <button className={scss.burger} onClick={onDropDown}>
          <img className={scss.imgButton} src="/images/headerHelp/burger.webp" alt="button image" />
        </button>
        {isModelOpen ? (
          <div className={scss.wrapper}>
            <hr />
            <br />
            <Link href="#">{t("headerHelper.Submit a request")}</Link>
          </div>
        ) : null}
      </div>
      <div className={scss.submitBlock}>
        <Link href="#">{t("headerHelper.Submit a request")}</Link>
        <Link href="#">{t("headerHelper.Sign in")}</Link>
      </div>
    </header>
  );
}

export default HeaderHelpPage;
