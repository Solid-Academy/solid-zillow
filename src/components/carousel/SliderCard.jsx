import scss from "./carousel.module.scss";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/reducers/slice";
import React from "react";
import { useSelector } from "react-redux";

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
  descriptionD,
  descriptionF,
  imgDesk
}) {
  const dataLocalStorage = {
    img,
    id,
    price,
    descriptionA,
    descriptionB,
    descriptionUnder,
    imgLikeT,
    imgLike,
    descriptionC,
    descriptionD,
    descriptionF,
    imgDesk
  };
  const likeSelector = useSelector((getRedux) => getRedux.user.data);
  const isLiked = likeSelector.filter((item) => item.id === id).length;
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(userActions.removeLike(id));
  };

  const handleReduxLike = () => {
    if (isLiked) {
      onDelete();
    } else {
      dispatch(userActions.handleLike(dataLocalStorage));
    }
  };

  return (
    <div>
      <div className={scss.button} onClick={handleReduxLike}>
        <img className={scss.imgLike} src={isLiked ? imgLikeT : imgLike} alt="likes" />
      </div>
      <div id={scss.square} className={scss.wrapper}>
        {imgDesk ? (
          <div className={scss.imgDesk}>
            <div className={scss.imgDeskWord}>{imgDesk}</div>
          </div>
        ) : (
          ""
        )}
        <img className={scss.imgSlider} src={img} key={id} alt="slider" />
        <div className={scss.title}>
          <div className={scss.price}>{price}</div>
          <div className={scss.whiteBlock}>
            <div>{descriptionA}</div>
            <div className={scss.opacity}>|</div>
            <div>{descriptionB}</div>
            <div className={scss.opacity}>|</div>
            <div>{descriptionC}</div>
            <div className={scss.opacity}>|</div>
            <div>{descriptionD}</div>
          </div>
          <div className={scss.descriptionUnder}>{descriptionUnder}</div>
          <div className={scss.descriptionF}>{descriptionF}</div>
        </div>
      </div>
    </div>
  );
}
export default SliderCard;
