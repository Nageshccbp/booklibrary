import React from "react";
import Slider from "react-slick";
import list from "../../public/list.json"; // Update the path if needed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

const FreeBooks = () => {
  const FilterData = list.filter((data) => data.categeory === "Free");
  console.log(FilterData);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor et
            totem. Temporea Mahatma Gandhi said a book can change hundreds of
            lives and inspire many people.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {FilterData.map((book) => (
              <Cards item={book} key={book.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBooks;
