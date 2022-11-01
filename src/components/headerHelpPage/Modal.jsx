import scss from "./headerHelpPage.module.scss";
import { useTranslation } from "react-i18next";

function Modal() {
  const { t } = useTranslation();
  return (
    <div className={scss.wrapper}>
      <hr />
      <br />
      <a href="#">{t("headerHelper.Submit a request")}</a>
    </div>
  );
}

export default Modal;
