import scss from "./carousel.module.scss";

function SliderCard({ img, id, price, description, descriptionUnder }) {
  return (
    <>
      <div id={scss.square} className={scss.wrapper}>
        <img src={img} key={id} alt="pig" />
        <div className={scss.title}>
          <div className={scss.price}>{price}</div>
          <div>{description}</div>
          <div className={scss.descriptionUnder}>{descriptionUnder}</div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
