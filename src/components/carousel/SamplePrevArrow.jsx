import scss from "./arrow.module.scss";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <>
      <div id="prev" onClick={onClick}>
        <img id="arrR" className={scss.arrowR} src="imegs/1243939.png" alt="LikesPigS" />
      </div>
    </>
  );
}

export default SamplePrevArrow;
