import scss from "./carousel.module.scss";

function SliderHead() {
  return (
    <>
      <div className={scss.header}>
        <h1>Homes For You</h1>
        <p className={scss.basedOnHomes}>Based on homes you recently viewed</p>
      </div>
      <hr className={scss.hrLine} />
    </>
  );
}

export default SliderHead;
