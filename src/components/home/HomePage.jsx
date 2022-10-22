import React from "react";
import Slider from "react-slick";
import sliderList from "../../constans/slider";
import SliderCard from "../carousel/SliderCard";
import SampleNextArrow from "../carousel/SampleNextArrow";
import SamplePrevArrow from "../carousel/SamplePrevArrow";

function HomePage() {
  // const likeSelector = useSelector((state) => state.user.data);
  // console.log(likeSelector);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div id="container">
        <div>
          <Slider {...settings}>
            {sliderList.map((item) => (
              <SliderCard key={item.id} {...item} />
            ))}
          </Slider>
          {/* {likeSelector.map((item) => (
            <SliderCard key={item.id} {...item} />
          ))} */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
