import React from "react";
import Slider from "react-slick";
import array from "../carousel/slider";
import SliderCard from "../carousel/SliderCard";
import scss from "./dashboard.module.scss";
import SampleNextArrow from "../carousel/SampleNextArrow";
import SamplePrevArrow from "../carousel/SamplePrevArrow";

function Dashboard() {
  const settings = {
    duts: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1.5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div id="container">
        <div className={scss.container}>
          <Slider {...settings}>
            {array.map((item) => (
              <SliderCard
                img={item.img}
                key={item.id}
                price={item.price}
                description={item.description}
                descriptionUnder={item.descriptionUnder}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
