import scss from "./carousel.module.scss";

function SliderHead() {
  return (
    <header>
      <div className={scss.homesForYou}>
        <h1>Homes For You</h1>
        <span className={scss.basedOnHomes}>Based on homes you recently viewed</span>
      </div>
      <br />
      <hr className={scss.hrLine} />
    </header>
  );
}

export default SliderHead;
