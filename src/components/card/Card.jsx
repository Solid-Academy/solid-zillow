import React from "react";
import css from "./Card.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";
import { CardList } from "../../constants/CardList";

function Card() {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.background}>
        <div className={css.container}>
          <div className={css.CardPage}>
            <a href="" className={css.buyhome}>
              {CardList.map((element) => (
                <div className={css.card} key={element.id}>
                  <div>
                    <img className={css.homeImg} src={element.img} alt="img" />
                  </div>
                  <div className={css.cardText}>
                    <h1 className={css.title}>{t("card." + element.title)}</h1>
                    <p className={css.text}>{t("card." + element.text)}</p>
                    <button className={css.button}>{t("card." + element.btn)}</button>
                  </div>
                </div>
              ))}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
