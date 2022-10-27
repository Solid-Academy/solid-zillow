import scss from "./headerHelpPage.module.scss";
import NavLinks from "./NavLinks";

function HeaderHelpPage() {
  return (
    <header className={scss.header}>
      <div>
        <img className={scss.img} src="/images/headerHelp/Zillow.png" alt="" />
      </div>
      <NavLinks />
    </header>
  );
}

export default HeaderHelpPage;
