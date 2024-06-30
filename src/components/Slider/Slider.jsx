import React from "react";
import Slider from "react-slick";
import './Slider.css';

import rate from '../../Image/icons8-rating-30.png';
import increase from '../../Image/icons8-chart-arrow-rise-64.png';
import moviedata from '../../data';

export default function Middle({ selectedGenre, setSelectedGenre }) {
  const genre = (value) => {
    setSelectedGenre(value);
  };

  const filteredMovies = selectedGenre === "allmovies" 
    ? moviedata 
    : moviedata.filter(movie => movie.gen && movie.gen.toLowerCase().includes(selectedGenre.toLowerCase()));

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    button: false,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 877,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="middle-container">
      <div className="heading-1">
        <img src={increase} alt="Trends" />
        <h1>Trends Now</h1>
      </div>
      <ul className="button">
        <li>
          <button onClick={() => genre('allmovies')}>All Movies</button>
          <button onClick={() => genre('action')}>Action</button>
          <button onClick={() => genre('adventure')}>Adventure</button>
          <button onClick={() => genre('animation')}>Animation</button>
          <button onClick={() => genre('thriller')}>Thriller</button>
          <button onClick={() => genre('crime')}>Crime</button>
          <button onClick={() => genre('comedy')}>Comedy</button>
          <button onClick={() => genre('si-fi')}>Si-Fi</button>
          <button onClick={() => genre('drama')}>Drama</button>
          <button onClick={() => genre('horror')}>Horror</button>
        </li>
      </ul>
      <Slider {...settings}>
        {filteredMovies.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.thumbnail} alt={movie.title} />
            <div className="info">
              <div className="title">
                <h2>{movie.title}</h2>
              </div>
              <div className="rating">
                <h3>{movie.year}</h3>
                <div className="star">
                  <img src={rate} alt="Rating" />
                  <h3>{movie.rating}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <hr />
    </div>
  );
}
