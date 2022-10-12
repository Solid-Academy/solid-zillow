import { FooterLinks } from "../../constants/FooterLinks";
import css from "./Footer.module.scss";
import LinksCard from "./footerLinks/FooterLinks";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className={css.container}>
        <div className={css.FooterLinks}>
          <div className={css.navigateLinks}>
            {FooterLinks.map((items) => (
              <LinksCard key={items.id} {...items} />
            ))}
          </div>
          <Link to="#">Do Not Sell My Personal Information →</Link>
        </div>
        <div className={css.info}>
          <div>
            <p>
              Zillow Group is committed to ensuring digital accessibility for individuals with
              disabilities. We are continuously working to improve the accessibility of our web
              experience for everyone, and we welcome feedback and accommodation requests. If you
              wish to report an issue or seek an accommodation, please
            </p>
            <p>
              <Link to="#">let us know</Link>
            </p>
          </div>
          <div>
            <p>
              Zillow, Inc. holds real estate brokerage <Link to="#">licenses</Link> in multiple
              states. Zillow (Canada), Inc. holds real estate brokerage <Link to="#">licenses</Link>{" "}
              in multiple provinces.
            </p>
            <p>
              <Link to="#">§ 442-H New York Standard Operating Procedures</Link>
            </p>
            <p>
              <Link to="#">§ New York Fair Housing Notice</Link>
            </p>
            <p>
              TREC:{" "}
              <Link to="#">Information about brokerage services, Consumer protection notice</Link>
            </p>
            <p>California DRE #1522444</p>
          </div>
          <div>
            <p>
              <Link to="#" id={css.Link}>
                Contact Zillow, Inc. Brokerage
              </Link>
            </p>
          </div>
          <div>
            <p>
              For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are
              controlled by The Canadian Real Estate Association (CREA) and identify real estate
              professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service®
              and the associated logos are owned by CREA and identify the quality of services
              provided by real estate professionals who are members of CREA. Used under license.
            </p>
          </div>
          <div className={css.downloader_images}>
            <img src="./images/footer/appstorebadgeenwhite-2x.png" alt="apple" />
            <img src="./images/footer/image.png" alt="google" />
          </div>
          <div className={css.contacts}>
            <img src="./images/footer/z-logo-default.svg" alt="z-logo" />
            <div className={css.webImages}>
              <p>Follow us:</p>
              <img src="./images/footer/Facebook_Logo_(2019).png" alt="" />
              <img src="./images/footer/instagram.svg" alt="" />
              <img src="./images/footer/tiktok-xxl.png" alt="" />
              <img src="./images/footer/Twitter-logo.svg (1).webp" alt="" />
              <p>© 2006-2022 Zillow</p>
            </div>
          </div>
        </div>
      </div>
      <img src="./images/footer/footer-art.svg" alt="" />
    </footer>
  );
}
