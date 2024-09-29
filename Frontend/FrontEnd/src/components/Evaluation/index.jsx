import React, { Component } from "react";
import Slider from "react-slick";
import People1 from "./peoples/people1";
import People2 from "./peoples/people2";
import People3 from "./peoples/people3";
import People4 from "./peoples/people4";
import People5 from "./peoples/people5";
import People6 from "./peoples/people6";
import "./style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const handleRateUs =()=>{
  window.location.href = "/mainfeedback";
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        right: "0px",
        background: "#22222250",
        height: "100%",
        width: "25px",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 2000,
      slidesToShow: 2,
      slidesToScroll: 5,
      initialSlide: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 940,
          settings: {
            centerMode: true,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 730,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 527,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="avaliacao">
        <button type="button" onClick={handleRateUs} className="btn btn-outline-warning m-2">Rate Us</button>
          <h2>How you rate us...!</h2>
          <div>
            <img
              alt="star"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            />
            <img
              alt="star"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            />
            <img
              alt="star"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            />
            <img
              alt="star"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            />
            <img
              alt="star"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            />
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <People1 />
          </div>
          <div>
            <People2 />
          </div>
          <div>
            <People3 />
          </div>
          <div>
            <People4 />
          </div>
          <div>
            <People5 />
          </div>
          <div>
            <People6 />
          </div>
        </Slider>
      </div>
    );
  }
}
