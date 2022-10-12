import scss from "./carousel.module.scss";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <>
      <div id="prev" onClick={onClick}>
        <img id="arrR" className={scss.arrowR} src="imegs/previous.png" alt="LikesPigS" />
      </div>
    </>
  );
}

export default SamplePrevArrow;
