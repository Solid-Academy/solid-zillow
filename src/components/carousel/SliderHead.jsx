import scss from "./carousel.module.scss";

function SliderHead() {
  return (
    <>
      <div className={scss.divHeader}>
        <h1 className={scss.h1}>Homes For You</h1>
        <p className={scss.p}>Based on homes you recently viewed</p>
      </div>
      <hr className={scss.hr} />
    </>
  );
}

export default SliderHead;
