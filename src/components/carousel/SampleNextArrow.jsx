import scss from "./carousel.module.scss";

function SampleNextArrow({ nextArrow }) {
  return (
    <>
      <div id="next" onClick={nextArrow}>
        <img id="arrL" className={scss.arrowL} src="imegs/skip.png" alt="imgicoins" />
      </div>
    </>
  );
}

export default SampleNextArrow;
