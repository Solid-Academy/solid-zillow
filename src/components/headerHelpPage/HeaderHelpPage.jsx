import Burger from "./Burger";
import scss from "./headerHelpPage.module.scss";
import NavLinks from "./NavLinks";

function HeaderHelpPage() {
  return (
    <header className={scss.header}>
      <img className={scss.img} src="/images/headerHelp/Zillow.png" alt="" />
      <Burger />
      <NavLinks />
    </header>
  );
}

export default HeaderHelpPage;
