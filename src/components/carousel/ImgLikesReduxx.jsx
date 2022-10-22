import { useState } from "react";
import sliderList from "../../constans/slider";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/reducers/slice";
import scss from "./carousel.module.scss";
import React from "react";

function ImgLikesRedux({
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
  const [isOnActive, setIsOnActive] = useState(false);
  const [getLikes, setGetLikes] = useState(JSON.parse(localStorage.getItem("user")) || []);

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

  const dispatch = useDispatch();

  const handleChangeLikes = (id) => {
    setIsOnActive(!isOnActive);
    setGetLikes(sliderList[id - 1]);
    dispatch(userActions.handleLike({ dataLocalStorage }));
    localStorage.setItem("user", JSON.stringify(getLikes));
  };

  return (
    <>
      <img
        key={id}
        className={scss.imgLike}
        src={getLikes ? imgLike : imgLikeT}
        alt="likePigS"
        onClick={() => handleChangeLikes(dispatch(userActions.handleLike({ dataLocalStorage })))}
      />
    </>
  );
}

export default ImgLikesRedux;
