import React from "react";
import scss from "./Search_Help.module.scss";
import { useTranslation } from "react-i18next";

function Search_Help() {
  const { t } = useTranslation();
  return (
    <>
      <section className={scss.main}>
        <div className={scss.search_container}>
          <img src="./images/searcHelp/search_icon.svg" alt="search icon" />
          <form>
            <input type="text" placeholder={t("search")} />
          </form>
        </div>
      </section>
    </>
  );
}

export default Search_Help;
