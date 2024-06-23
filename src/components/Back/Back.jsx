import React from "react";
import Slider from "react-slick";
import './Back.css';
import { Button } from "@mui/material";

export default function Back() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    button: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/15423.jpg" alt="Movie Poster 1" />
          <h1>Godzilla x Kong: The New Empire"</h1>
          <p className="para">
          </p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16995.jpg" alt="Movie Poster 2" />
          <h1>Venom: The Last Dance</h1>
          <p className="para">
          </p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16582.jpg" alt="Movie Poster 3" />
          <h1>Kingdom of the Planet of the Apes</h1>
          <p className="para"> </p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16730.jpg" alt="Movie Poster 4" />
          <h1>Fallout</h1>
          <p className="para"></p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16295.jpg" alt="Movie Poster 5" />
          <h1>Ghostbusters: Frozen Empire </h1>
          <p className="para"></p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16293.jpg" alt="Movie Poster 6" />
          <h1>The Garfield Movie</h1>
          <p className="para"></p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/13699.jpg" alt="Movie Poster 7" />
          <h1>Aquaman: The Last Kingdom</h1>
          <p className="para"></p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16172.jpg" alt="Movie Poster 8" />
          <h1>IF movie</h1>
          <p className="para"></p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16952.jpg" alt="Movie Poster 9" />
          <h1>Mona 2</h1>
          <p className="para"></p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/15003.jpg" alt="Movie Poster 10" />
          <h1>Dune Part-2 </h1>
          <p className="para"></p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/15545.jpg" alt="Movie Poster 11" />
          <h1>Kung Fu Panda 4</h1>
          <p className="para"></p>
        </div>
      </Slider>
      <hr />
    </div>
  );
}
