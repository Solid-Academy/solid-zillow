import scss from "./carousel.module.scss";
import { useTranslation } from "react-i18next";

function SliderHead() {
  const { t } = useTranslation();
  return (
    <header>
      <div className={scss.homesForYou}>
        <h1>{t("Slider.main_titile")}</h1>
        <span className={scss.basedOnHomes}>{t("Slider.description")}</span>
      </div>
      <br />
      <hr className={scss.hrLine} />
    </header>
  );
}

export default SliderHead;
