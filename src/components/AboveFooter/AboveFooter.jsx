import { useState } from "react";
import {
  AboveLinks,
  AboveLinksBrowseHomes,
  AboveLinksMortgageRates,
  AboveLinksRental
} from "../../constants/AboveFooter";
import css from "./AboveFooter.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboveFooter() {
  const { t } = useTranslation();
  const [openRealEstate, setOpenRealEstate] = useState(false);
  const [openRentals, setOpenRentals] = useState(false);
  const [openMortgage, setOpenMortGage] = useState(false);
  const [openBrowse, setOpenBrowse] = useState(false);
  return (
    <>
      <div className={css.container}>
        <div>
          <button onClick={() => setOpenRealEstate(!openRealEstate)}>
            {t("aboveFooter.RealEstate")}{" "}
            <img src="./images/footer/icons8-arrow-24.png" alt="arrow" />
          </button>
          {openRealEstate &&
            AboveLinks.map((items) => (
              <Link to="#" key={items.id}>
                {items.link}
              </Link>
            ))}
        </div>
        <hr />
        <div>
          <button onClick={() => setOpenRentals(!openRentals)}>
            {t("aboveFooter.Rentals")} <img src="./images/footer/icons8-arrow-24.png" alt="arrow" />
          </button>
          {openRentals &&
            AboveLinksRental.map((items) => (
              <Link to="#" key={items.id}>
                {items.link}
              </Link>
            ))}
        </div>
        <hr />
        <div>
          <button onClick={() => setOpenMortGage(!openMortgage)}>
            {t("aboveFooter.Mortgage")}{" "}
            <img src="./images/footer/icons8-arrow-24.png" alt="arrow" />
          </button>
          {openMortgage &&
            AboveLinksMortgageRates.map((items) => (
              <Link to="#" key={items.id}>
                {items.link}
              </Link>
            ))}
        </div>
        <hr />
        <div>
          <button onClick={() => setOpenBrowse(!openBrowse)}>
            {t("aboveFooter.Browse")} <img src="./images/footer/icons8-arrow-24.png" alt="arrow" />
          </button>
          {openBrowse &&
            AboveLinksBrowseHomes.map((items) => (
              <Link to="#" key={items.id}>
                {items.link}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
