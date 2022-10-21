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
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <>
      <div className={css.container}>
        <div>
          <button onClick={() => setOpen(!open)}>
            {t("aboveFooter.RealEstate")}{" "}
            <img src="./images/footer/icons8-arrow-24.png" alt="arrow" />
          </button>
          {open &&
            AboveLinks.map((items) => (
              <Link to="#" key={items.id}>
                {items.link}
              </Link>
            ))}
        </div>
        <hr style={{ height: "30px", backgroundColor: "rgb(136, 136,136)", width: "0.5px" }} />
        <div>
          <button onClick={() => setOpen2(!open2)}>
            {t("aboveFooter.Rentals")} <img src="./images/footer/icons8-arrow-24.png" alt="arrow" />
          </button>
          {open2 &&
            AboveLinksRental.map((items) => (
              <Link to="#" key={items.id}>
                {items.link}
              </Link>
            ))}
        </div>
        <hr style={{ height: "30px", backgroundColor: "rgb(136, 136,136)", width: "0.5px" }} />
        <div>
          <button onClick={() => setOpen3(!open3)}>
            {t("aboveFooter.Mortgage")}{" "}
            <img src="./images/footer/icons8-arrow-24.png" alt="arrow" />
          </button>
          {open3 &&
            AboveLinksMortgageRates.map((items) => (
              <Link to="#" key={items.id}>
                {items.link}
              </Link>
            ))}
        </div>
        <hr style={{ height: "30px", backgroundColor: "rgb(136, 136,136)", width: "0.5px" }} />
        <div>
          <button onClick={() => setOpen4(!open4)}>
            {t("aboveFooter.Browse")} <img src="./images/footer/icons8-arrow-24.png" alt="arrow" />
          </button>
          {open4 &&
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
