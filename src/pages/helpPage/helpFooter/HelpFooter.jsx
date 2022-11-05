import css from "./HelpFooter.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HelpFooter() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className={css.container}>
      <div className={css.footer__content}>
        <Link to="#">{t("HelpFooter.HelpCenter")}</Link>
        <div className={css.footer_language_selector}>
          <div className={css.dropdown}>
            <button onClick={() => setOpen(!open)}>
              {t("HelpFooter.Language")}{" "}
              <img src="./images/footer/icons8-chevron-down-24.png" alt="arrow_icon" />
            </button>
            {open && (
              <span className={css.dropdown_menu}>
                <button>{t("HelpFooter.LanguageSpanish")}</button>
                <button>{t("HelpFooter.LanguageChines")}</button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
