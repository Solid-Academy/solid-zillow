import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const [buy, setBuy] = useState(false);
  const [rent, setRent] = useState(false);
  const [sell, setSell] = useState(false);
  const [loans, setLoans] = useState(false);
  const [agent, setAgent] = useState(false);
  const [rental, setRental] = useState(false);
  const [burger, setBurger] = useState(false);

  const block = document.querySelector("body");
  block.addEventListener("click", () => {
    if (burger == true) {
      block.style.position = "fixed";
    } else block.style.position = "static";
  });
  return (
    <>
      <header>
        <div className={burger ? scss.container_active : scss.container}>
          <div>
            <div
              onClick={() => setBurger(!burger)}
              className={burger ? scss.burger_active : scss.header_burger}
            >
              <span></span>
            </div>
            <Link className={burger ? scss.logo_active : scss.logo} to="/">
              <img src="./images/header/z-logo-default.svg" alt="Z-logo-blue" />
              <img src="./images/header/z-logo-white.svg" alt="Z-logo-white" />
            </Link>
            <span className={burger ? scss.sign_active : scss.sign}>
              <Link to="#">{t("header.sign_in.sign_in")}</Link>
            </span>
          </div>
          <nav className={burger ? scss.active_nav : scss.nav}>
            <div className={scss.main_nav}>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.buy.buy")}</Link>
                <button
                  onClick={() =>
                    setBuy(() => {
                      setBuy(!buy);
                      setRent(false);
                      setSell(false);
                      setLoans(false);
                      setAgent(false);
                      setRental(false);
                    })
                  }
                >
                  <span className={buy ? scss.span_buy : scss.span}></span>
                </button>
                <div className={scss.dropdown_content}>
                  <div className={scss.content + (buy ? scss.active : "")}>
                    <div>
                      <h3>{t("header.buy.home")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.buy.home")}</Link>
                          <Link to="#">{t("header.buy.foreclosures")}</Link>
                          <Link to="#">{t("header.buy.owner")}</Link>
                          <Link to="#">{t("header.buy.houses")}</Link>
                        </li>
                        <li>
                          <Link to="#">{t("header.buy.construction")}</Link>
                          <Link to="#">{t("header.buy.coming")}</Link>
                          <Link to="#">{t("header.buy.recent")}</Link>
                          <Link to="#">{t("header.buy.homes")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.buy.selling")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.buy.360")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.buy.resources")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.buy.buyers")}</Link>
                          <Link to="#">{t("header.buy.center")}</Link>
                          <Link to="#">{t("header.buy.app")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.rent.rent")}</Link>
                <button
                  onClick={() =>
                    setRent(() => {
                      setBuy(false);
                      setRent(!rent);
                      setSell(false);
                      setLoans(false);
                      setAgent(false);
                      setRental(false);
                    })
                  }
                >
                  <span className={rent ? scss.span_buy : scss.span}></span>
                </button>
                <div className={scss.dropdown_content}>
                  <div className={scss.content + (rent ? scss.active : "")}>
                    <div>
                      <h3>{t("header.rent.search")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.rent.rental")}</Link>
                          <Link to="#">{t("header.rent.apartments")}</Link>
                          <Link to="#">{t("header.rent.houses")}</Link>
                          <Link to="#">{t("header.rent.listings")}</Link>
                          <Link to="#">{t("header.rent.buildings")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.rent.hub")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.rent.contacted")}</Link>
                          <Link to="#">{t("header.rent.your")}</Link>
                          <Link to="#">{t("header.rent.messages")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.buy.resources")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.rent.calculator")}</Link>
                          <Link to="#">{t("header.rent.guide")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.sell.sell")}</Link>
                <button
                  onClick={() =>
                    setSell(() => {
                      setBuy(false);
                      setRent(false);
                      setSell(!sell);
                      setLoans(false);
                      setAgent(false);
                      setRental(false);
                    })
                  }
                >
                  <span className={sell ? scss.span_buy : scss.span}></span>
                </button>
                <div className={scss.dropdown_content}>
                  <div className={scss.content + (sell ? scss.active : "")}>
                    <div>
                      <h3>{t("header.buy.resources")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.sell.explore")}</Link>
                          <Link to="#">{t("header.sell.zestimate")}</Link>
                          <Link to="#">{t("header.sell.values")}</Link>
                          <Link to="#">{t("header.sell.sellers")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.buy.selling")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.buy.360")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.sell.options")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.sell.find")}</Link>
                          <Link to="#">{t("header.sell.post")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.loans.loans")}</Link>
                <button
                  onClick={() =>
                    setLoans(() => {
                      setBuy(false);
                      setRent(false);
                      setSell(false);
                      setLoans(!loans);
                      setAgent(false);
                      setRental(false);
                    })
                  }
                >
                  <span className={loans ? scss.span_buy : scss.span}></span>
                </button>
                <div className={scss.dropdown_content}>
                  <div className={scss.content + (loans ? scss.active : "")}>
                    <div>
                      <h3>{t("header.loans.shop")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.loans.mortgage")}</Link>
                          <Link to="#">{t("header.loans.lenders")}</Link>
                          <Link to="#">{t("header.loans.rates")}</Link>
                          <Link to="#">{t("header.loans.refinance")}</Link>
                          <Link to="#">{t("header.loans.all")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.loans.calculators")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.loans.Mortgage")}</Link>
                          <Link to="#">{t("header.loans.Refinance")}</Link>
                          <Link to="#">{t("header.loans.Affordability")}</Link>
                          <Link to="#">{t("header.loans.Amortization")}</Link>
                          <Link to="#">{t("header.loans.Debt")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.buy.resources")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.loans.reviews")}</Link>
                          <Link to="#">{t("header.loans.learning")}</Link>
                          <Link to="#">{t("header.loans.app")}</Link>
                          <Link to="#">{t("header.loans.center")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.agent.agent")}</Link>
                <button
                  onClick={() =>
                    setAgent(() => {
                      setBuy(false);
                      setRent(false);
                      setSell(false);
                      setLoans(false);
                      setAgent(!agent);
                      setRental(false);
                    })
                  }
                >
                  <span className={agent ? scss.span_buy : scss.span}></span>
                </button>
                <div className={scss.dropdown_content}>
                  <div className={scss.content + (agent ? scss.active : "")}>
                    <div>
                      <h3>{t("header.agent.pros")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.agent.estate")}</Link>
                          <Link to="#">{t("header.agent.property")}</Link>
                          <Link to="#">{t("header.agent.inspectors")}</Link>
                          <Link to="#">{t("header.agent.other")}</Link>
                        </li>
                        <li>
                          <Link to="#">{t("header.agent.improvement")}</Link>
                          <Link to="#">{t("header.agent.builders")}</Link>
                          <Link to="#">{t("header.agent.real")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.agent.I'm")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.agent.advertising")}</Link>
                          <Link to="#">{t("header.agent.center")}</Link>
                          <Link to="#">{t("header.agent.account")}</Link>
                        </li>
                        <li>
                          <Link to="#">{t("header.agent.plan")}</Link>
                          <Link to="#">{t("header.agent.scripts")}</Link>
                          <Link to="#">{t("header.agent.flyer")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.main_nav}>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.rentals.rentals")}</Link>
                <button
                  onClick={() =>
                    setRental(() => {
                      setBuy(false);
                      setRent(false);
                      setSell(false);
                      setLoans(false);
                      setAgent(false);
                      setRental(!rental);
                    })
                  }
                >
                  <span className={rental ? scss.span_buy : scss.span}></span>
                </button>
                <div className={scss.dropdown_content}>
                  <div className={scss.content + (rental ? scss.active : "")}>
                    <div>
                      <h3>{t("header.rentals.tools")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.rentals.rental")}</Link>
                          <Link to="#">{t("header.rentals.my")}</Link>
                          <Link to="#">{t("header.rent.messages")}</Link>
                          <Link to="#">{t("header.rentals.applications")}</Link>
                          <Link to="#">{t("header.rentals.leases")}</Link>
                          <Link to="#">{t("header.rentals.payments")}</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>{t("header.rentals.more")}</h3>
                      <ul>
                        <li>
                          <Link to="#">{t("header.rentals.zillow")}</Link>
                          <Link to="#">{t("header.rentals.price")}</Link>
                          <Link to="#">{t("header.rentals.resource")}</Link>
                          <Link to="#">{t("header.rentals.center")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.advertise")}</Link>
              </div>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.help")}</Link>
              </div>
              <div className={scss.dropdown}>
                <Link to="#">{t("header.sign_in.sign_in")}</Link>
                <div className={scss.sign_content}>
                  <ul>
                    <li>
                      <Link to="#">{t("header.sign_in.homes")}</Link>
                      <Link to="#">{t("header.sign_in.searches")}</Link>
                      <Link to="#">{t("header.sign_in.your")}</Link>
                      <Link to="#">{t("header.sign_in.hub")}</Link>
                      <Link to="#">{t("header.sign_in.settings")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("header.sign_in.out")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
