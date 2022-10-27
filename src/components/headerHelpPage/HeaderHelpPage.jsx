import Burger from "./Burger";
import scss from "./headerHelpPage.module.scss";
import NavLinks from "./NavLinks";

function HeaderHelpPage() {
  return (
    <header className={scss.header}>
      <div>
        <img className={scss.img} src="/images/headerHelp/Zillow.png" alt="" />
      </div>
      <Burger />
      <NavLinks />
      {/* {
            ? <div className={scss.submitBlock}>
          <NavLinks />
        </div>
          :
          <div className={scss.submitBlock}>
            <Burger />
          </div>
      } */}
    </header>
  );
}

export default HeaderHelpPage;
