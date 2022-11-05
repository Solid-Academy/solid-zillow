import css from "./Navigate.module.scss";
import { NavLinks, HomeLinks } from "../../constants/NavigateLinks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Navigate() {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.container}>
        <div className={css.NavBlock}>
          <div className={css.left}>
            {NavLinks.map((item) => (
              <div className={css.link}>
                <Link to={item.puth} key={item.id}>
                  {t("navigate." + item.title)}
                </Link>
              </div>
            ))}
          </div>
          <div className={css.right}>
            {HomeLinks.map((item) => (
              <div className={css.link}>
                <Link to={item.puth} key={item.id}>
                  {t("navigate." + item.title)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={css.border}></div>
    </>
  );
}

export default Navigate;
