import scss from "./arrow.module.scss";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <>
      <div id="next" onClick={onClick}>
        <img id="arrL" className={scss.arrowL} src="imegs/arrowRight.png" alt="imgicoins" />
      </div>
    </>
  );
}

export default SampleNextArrow;
