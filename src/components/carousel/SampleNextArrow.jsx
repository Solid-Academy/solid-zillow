import scss from "./carousel.module.scss";

function SampleNextArrow({ onClick }) {
  return (
    <div className="left" onClick={onClick}>
      <img id="arrayLeft" className={scss.arrowLeft} src="images/skip.png" alt="arrow" />
    </div>
  );
}

export default SampleNextArrow;
