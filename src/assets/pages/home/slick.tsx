import React from "react";
import Slider from "react-slick";
import {
    StyledSlider,
    StyledSliderItem,
    StyledSliderImg
} from './StyledSlick'
import img1 from '/public/image/Banner1.avif'
import img2 from '/public/image/Banner2.avif'
import img3 from '/public/image/Banner3.avif'




export default function SimpleSlider() {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,       // 開啟置中模式
    centerPadding: '0px',  // 兩側留白的距離，若要完全置中單張可設為 0

  };
  return (
    <>
    <StyledSlider>
        <Slider {...settings}>
        <StyledSliderItem>
            <StyledSliderImg src={img1} alt="" />
        </StyledSliderItem>
        <StyledSliderItem>
            <StyledSliderImg src={img2} alt="" />
        </StyledSliderItem>
        <StyledSliderItem>
            <StyledSliderImg src={img3} alt="" />
        </StyledSliderItem>
        <StyledSliderItem>
            <StyledSliderImg src={img1} alt="" />
        </StyledSliderItem>
        <StyledSliderItem>
            <StyledSliderImg src={img2} alt="" />
        </StyledSliderItem>
        <StyledSliderItem>
            <StyledSliderImg src={img3} alt="" />
        </StyledSliderItem>
        </Slider>

    </StyledSlider>
    </>
  );
}