import scss from "./headerHelpPage.module.scss";
function NavLinks() {
  return (
    <>
      <div className={scss.submitBlock}>
        <a href="#">Submit a request</a>
        <a href="#">Sign in</a>
      </div>
    </>
  );
}

export default NavLinks;
