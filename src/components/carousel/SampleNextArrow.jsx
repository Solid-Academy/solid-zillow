import scss from "./carousel.module.scss";

function SampleNextArrow({ onClick }) {
  return (
    <>
      <div className="left" onClick={onClick}>
        <img id="arrayLeft" className={scss.arrowLeft} src="images/skip.png" alt="imgicoins" />
      </div>
    </>
  );
}

export default SampleNextArrow;
