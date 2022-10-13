import scss from "./carousel.module.scss";
import { useState } from "react";
import sliderList from "../../constans/slider";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
function SliderCard({
  img,
  id,
  price,
  descriptionA,
  descriptionB,
  descriptionUnder,
  imgLikeT,
  imgLike,
  descriptionC,
  descriptionD
}) {
  const [isActive, setIsActive] = useState(false);
  const [liked, setLiked] = useState(null);

  const handleLike = (index) => {
    setIsActive(!isActive);
    setLiked(sliderList[index - 1]);
    console.log(liked);
    localStorage.setItem("user", JSON.stringify(liked));
  };

  return (
    <>
      <img
        className={scss.imgLike}
        src={isActive ? liked?.imgLikeT : imgLike}
        alt="likePigS"
        onClick={() => handleLike(id)}
      />
      <div id={scss.square} className={scss.wrapper}>
        <img src={img} key={id} alt="pig" />
        <div className={scss.title}>
          <div className={scss.price}>{price}</div>
          <div className={scss.desc}>
            <div>{descriptionA}</div>
            <div className={scss.opacity}>|</div>
            <div>{descriptionB}</div>
            <div className={scss.opacity}>|</div>
            <div>{descriptionC}</div>
            <div className={scss.opacity}>|</div>
            <div>{descriptionD}</div>
          </div>
          <div className={scss.descriptionUnder}>{descriptionUnder}</div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
