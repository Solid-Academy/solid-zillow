import React from "react";
import css from "./Card.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";
import { CardList } from "../../constants/CardList";

function Card() {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.container}>
        <div className={css.CardPage}>
          <a href="" className={css.buyhome}>
            {CardList.map((element) => (
              <div className={css.card} key={element.id}>
                <div>
                  <img className={css.homeImg} src={element.img} alt="" />
                </div>
                <div>
                  <h1 className={css.title}>{t("Main." + element.title)}</h1>
                  <p className={css.text}>{t("Main." + element.text)}</p>
                  <button className={css.button}> Browce Homes</button>
                </div>
              </div>
            ))}
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
