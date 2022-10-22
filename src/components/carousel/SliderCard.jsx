import scss from "./carousel.module.scss";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/reducers/slice";
import React from "react";
// import ImgLikesRedux from "./ImgLikesReduxx";
import { useSelector } from "react-redux";
// import sliderList from "../../constans/slider";

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
    descriptionD
  };

  const likeSelector = useSelector((state) => state.user.data);
  const isLiked = likeSelector.filter((item) => item.id === id).length;
  console.log("35============>", likeSelector);
  const dispatch = useDispatch();

  const handleReduxLike = () => {
    if (isLiked) {
      alert("Delete card from basket");
    } else {
      dispatch(userActions.handleLike(dataLocalStorage));
    }
  };

  return (
    <>
      <div className={scss.button} onClick={() => handleReduxLike({ dataLocalStorage })}>
        {/* <ImgLikesRedux {...item} /> */}
        <div>{isLiked ? "Liked" : "Like"}</div>
        {/* {sliderList.map((item) => (
          <ImgLikesRedux key={item.id} {...item} />
        ))} */}
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
