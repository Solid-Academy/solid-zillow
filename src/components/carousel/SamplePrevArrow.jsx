import scss from "./carousel.module.scss";

function SamplePrevArrow({ onClick }) {
  return (
    <>
      <div id="prev" onClick={onClick}>
        <img id="arrR" className={scss.arrowR} src="images/previous.png" alt="LikesPigS" />
      </div>
    </>
  );
}

export default SamplePrevArrow;
