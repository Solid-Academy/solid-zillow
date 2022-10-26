import scss from "./carousel.module.scss";

function SamplePrevArrow({ onClick }) {
  return (
    <div id="right" onClick={onClick}>
      <img id="rightArray" className={scss.arrowRight} src="images/previous.png" alt="arrow" />
    </div>
  );
}

export default SamplePrevArrow;
