import { useState } from "react";
import { useTranslation } from "react-i18next";
import scss from "./SearchBlock.module.scss";

export default function SearchBlock() {
  const [openActive, setOpenActive] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className={scss.container}>
        <div className={scss.searchBlock__content}>
          <h1>{t("searchBlock.FindIt")}</h1>
          <div className={scss.inputs__content}>
            <input
              onClick={(e) => {
                setOpenActive(true);
                e.stopPropagation();
              }}
              type="text"
              placeholder={t("searchBlock.EnterAnAddress")}
            />
            {openActive && (
              <div className={scss.currentLocation__wrapper} onClick={(e) => e.stopPropagation()}>
                <p>{t("searchBlock.CurrentLocation")}</p>
              </div>
            )}
            <div
              onClick={() => setOpenActive(false)}
              className={scss.overlay + " " + (openActive ? scss.active : "")}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
