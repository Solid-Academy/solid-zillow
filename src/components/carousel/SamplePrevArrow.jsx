import scss from "./carousel.module.scss";

function SamplePrevArrow({ prevArrow }) {
  return (
    <>
      <div id="prev" onClick={prevArrow}>
        <img id="arrR" className={scss.arrowR} src="imegs/previous.png" alt="LikesPigS" />
      </div>
    </>
  );
}

export default SamplePrevArrow;
