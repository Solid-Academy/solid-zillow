import scss from "./carousel.module.scss";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/reducers/slice";
import { useState } from "react";
import sliderList from "../../constans/slider";

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
  const dispatch = useDispatch();

  const dataLocalStorage = [
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
  ];

  const [isOnActive, setIsOnActive] = useState(false);
  const [getLikes, setGetLikes] = useState(JSON.parse(localStorage.getItem("user")) || []);

  const handleChangeLikes = (index) => {
    setIsOnActive(!isOnActive);
    setGetLikes(sliderList[index - 1]);
    console.log(getLikes);
    localStorage.setItem("user", JSON.stringify(getLikes));
  };

  const handleReduxLike = () => {
    dispatch(userActions.handleLike({ dataLocalStorage }));
    localStorage.setItem("user", JSON.stringify(dataLocalStorage));
  };

  return (
    <>
      <div className={scss.button} onClick={() => handleReduxLike({ dataLocalStorage })}>
        <img
          className={scss.imgLike}
          src={getLikes ? imgLike : imgLikeT}
          alt="likePigS"
          onClick={() => handleChangeLikes(dispatch(userActions.handleLike({ id })))}
        />
      </div>
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
