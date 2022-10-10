import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RespSlider(props) {

  const [selectedDateIndex, setSelectedDateIndex] = useState(26)
  const onButtonPress = (x) => {
    props.setDate(x)
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div className={className} style={{ background: "#002169", marginTop: "0px" }} onClick={onClick}>
        {/* <img
          style={{ width: "20px" }}
          src="https://www.pngfind.com/pngs/m/302-3023323_arrow-pointing-to-right-comments-right-arrow-png.png"
        /> */}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ background: "#002169", marginTop: "0px" }} onClick={onClick}>
        {/* <img
          style={{ width: "20px" }}
          src="https://toppng.com/uploads/preview/arrow-pointing-to-the-left-115501167743epfu1fapc.png"
        /> */}
      </div>
    );
  }


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let array = [
    "Aug 29",
    "Aug 30",
    "Aug 31",
    "Sept 1",
    "Sept 2",
    "Sept 3",
    "Sept 4",
    "Sept 5",
    "Sept 6",
    "Sept 7",
    "Sept 8",
    "Sept 9",
    "Sept 10",
    "Sept 11",
    "Sept 12",
    "Sept 13",
    "Sept 14",
    "Sept 15",
    "Sept 16",
    "Sept 17",
    "Sept 18",
    "Sept 19",
    "Sept 20",
    "Sept 21",
    "Sept 22",
    "Sept 23",
    "Sept 24",
    "Sept 25",
    "Sept 26",
    "Sept 27"
  ]

  return (
    <div>
      <div>
        <Slider {...settings}>
          {
            array.map((ele, ind) => (
              <div onClick={() => {
                setSelectedDateIndex(ind)
                onButtonPress(ind)
              }}>
                <h3
                  style={{
                    backgroundColor: ind === selectedDateIndex ? "#fcd800" : "#fff",
                    padding: "20px 0px 20px 0px",
                    color: ind === selectedDateIndex ? "#fff" : "#000",
                    borderRadius: "10px"
                  }}
                >
                  {ele}
                </h3>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}
