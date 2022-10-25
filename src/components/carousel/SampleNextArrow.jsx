import scss from "./carousel.module.scss";

function SampleNextArrow({ onClick }) {
  return (
    <>
      <div id="next" onClick={onClick}>
        <img id="arrL" className={scss.arrowL} src="images/skip.png" alt="imgicoins" />
      </div>
    </>
  );
}

export default SampleNextArrow;
