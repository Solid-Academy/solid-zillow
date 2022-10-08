import scss from "./arrow.module.scss";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <>
      <div id="prev" onClick={onClick}>
        <img className={scss.arrowR} src="imegs/arrowLeft.jpg" alt="LikesPigS" />
      </div>
    </>
  );
}

export default SamplePrevArrow;
