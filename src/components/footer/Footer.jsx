import { FooterLinks } from "../../constants/FooterLinks";
import css from "./Footer.module.scss";
import LinksCard from "./footerLinks/FooterLinks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className={css.container}>
          <div className={css.FooterLinks}>
            <div className={css.navigateLinks}>
              {FooterLinks.map((items) => (
                <LinksCard key={items.id} {...items} />
              ))}
            </div>
            <Link to="#">{t("footer.informatio")}</Link>
          </div>
          <div className={css.info}>
            <div>
              <p>{t("footer.zillowGroup")}</p>
              <p>
                <Link to="#">{t("footer.letUs")}</Link>
              </p>
            </div>
            <div>
              <p>
                {t("footer.holds")}
                <Link to="#">{t("footer.licenses")}</Link>
                {t("footer.multiple")}
                <Link to="#">{t("footer.licenses")}</Link> {t("footer.multiple")}
              </p>
              <p>
                <Link to="#">{t("footer.standart")}</Link>
              </p>
              <p>
                <Link to="#">{t("footer.fair")}</Link>
              </p>
              <p>
                {t("footer.TREC")}
                <Link to="#">{t("footer.infoAbout")}</Link>
              </p>
              <p>{t("footer.DRE")}</p>
            </div>
            <div>
              <p>{t("footer.ContactZillow")}</p>
            </div>
            <div>
              <p>{t("footer.listings")}</p>
            </div>
            <div className={css.downloader_images}>
              <img src="./images/footer/appstorebadgeenwhite-2x.png" alt="apple" />
              <img src="./images/footer/image.png" alt="google" />
            </div>
            <div className={css.contacts}>
              <img src="./images/footer/z-logo-default.svg" alt="z-logo" />
              <div className={css.webImages}>
                <p>{t("footer.followUs")}</p>
                <img src="./images/footer/Facebook_Logo_(2019).png" alt="" />
                <img src="./images/footer/instagram.svg" alt="" />
                <img src="./images/footer/tiktok-xxl.png" alt="" />
                <img src="./images/footer/Twitter-logo.svg (1).webp" alt="" />
                <p>{t("footer.zillow2006")}</p>
              </div>
            </div>
          </div>
        </div>
        <img src="./images/footer/footer-art.svg" alt="" />
      </footer>
    </>
  );
}
