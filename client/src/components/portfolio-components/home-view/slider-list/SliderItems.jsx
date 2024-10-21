import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from "./items";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import "./SliderItems.css";


const SliderItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Initial number of slides to show
    slidesToScroll: 4, // Initial number of slides to scroll
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Number of slides to show at 1024px and below
          slidesToScroll: 3, // Number of slides to scroll at 1024px and below
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Number of slides to show at 600px and below
          slidesToScroll: 2 // Number of slides to scroll at 600px and below
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Number of slides to show at 480px and below
          slidesToScroll: 1 // Number of slides to scroll at 480px and below
        }
      }
    ]
  };

    // Translation
const { i18n } = useTranslation();
  const sliderItems = items.map(item => {
    if(i18n.language == 'ar') {
      return({
        id: item.id,
        title: item.title_ar,
        icon: item.icon,
      })
    }
    return item;
  });
  return (
    <Box class="w-full HomeSlider">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <Box>
            <Box key={index} className="my-3 flex flex-col justify-center items-center">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderItems;