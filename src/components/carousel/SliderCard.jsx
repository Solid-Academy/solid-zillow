import scss from "./carousel.module.scss";
// import { useState } from "react";
// import sliderList from "../../constans/slider";
import { useDispatch } from "react-redux";
// import { basketActions } from "../../redux";
// import { useEffect } from "react";
import { userActions } from "../../redux/reducers/slice";

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
  // const redux = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const data = [
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
  const handleOnLike = () => {
    dispatch(
      userActions.handleLike({
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
      })
    );
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <>
      {/* {redux.map((redux) => (
        <img className={scss.imgLike} src={redux.imgLike} alt="likePigS" onClick={handleOnLike} />
      ))} */}
      <img className={scss.imgLike} src={imgLike} alt="likePigS" onClick={handleOnLike} />
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
