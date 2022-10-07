import React from "react";
import css from "./Main.module.scss";
import { useTranslation } from "react-i18next";
import "../../../i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.container}>
        <div className={css.CardPage}>
          <a href="" className={css.buyhome}>
            <div className={css.card}>
              <img className={css.homeImg} src="images/CardPage/home.png" alt="" />
              <h1 className={css.title}>{t("Main.Buy_home")}</h1>
              <p className={css.text}>{t("Main.text_1")}</p>
              <button className={css.button}> Browce Homes</button>
            </div>
          </a>
          <a href="" className={css.sellhome}>
            <div className={css.card}>
              <img className={css.homeImg} src="images/CardPage/sellhome.png" alt="" />
              <h1 className={css.title}>{t("Main.Sell_home")}</h1>
              <p className={css.text}>{t("Main.text_2")}</p>
              <button className={css.button}> See your options</button>
            </div>
          </a>
          <a href="" className={css.renthome}>
            <div className={css.card}>
              <img className={css.homeImg} src="images/CardPage/renthome.png" alt="" />
              <h1 className={css.title}>{t("Main.Rent_home")}</h1>
              <p className={css.text}>{t("Main.text_3")}</p>
              <button className={css.button}> Find rentals</button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
