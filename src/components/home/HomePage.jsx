import React from "react";
import Slider from "react-slick";
import sliderList from "../../constans/slider";
import SliderCard from "../carousel/SliderCard";
import SampleNextArrow from "../carousel/SampleNextArrow";
import SamplePrevArrow from "../carousel/SamplePrevArrow";

function HomePage() {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
        </div>
      </div>
    </>
  );
}

export default HomePage;
