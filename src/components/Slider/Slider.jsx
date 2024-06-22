import React from "react";
import Slider from "react-slick";
import './Slider.css';

import rate from '../../Image/icons8-rating-30.png'
import increase from '../../Image/icons8-chart-arrow-rise-64.png'
export default function Middle() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    button :false,
  }

  return (
    <div className="middle-container">
      <div className="heading-1">
        <img src={increase} />
        <h1 >Trends Now</h1>
      </div>
      <ul className="button">
        <li>
          <button>Action</button>
          <button>Adventure</button>
          <button>Animation</button>
          <button>Biography</button>
          <button>Crime</button>
          <button>Comedy</button>
          <button>Doucumentry</button>
          <button>Darma</button>
        </li>
      </ul>
      <Slider {...settings}>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2022/10/joker-2-poster-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>Joker 2</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>

            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2023/11/Kingdom-of-the-Planet-of-the-Apes-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>Kingdom of the planet of Apes</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>7.2</h3>
              </div>

            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2023/12/The-garfield-movie-poster-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>The Garfield Movie</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>5.8</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2022/12/deadpool-3-new-poster-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>Deadpool & Wolverine</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2022/12/bad-boys-ride-or-die-poster-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>Bad Boys: Ride or Die</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>7.0</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2022/09/IMG_1748-400x600.jpeg" />
          <div className="info">
            <div className="title">
              <h2>Beverly Hills Cop: Axel F</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2023/12/IMG_1596-400x600.jpeg" />
          <div className="info">
            <div className="title">
              <h2>The Strangers: Chapter 1</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>4.7</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2023/11/the-fall-guy-new-poster-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>The Fall Guy</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>7.0</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2023/09/hit-man-movie-poster-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>Hitman</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>7.0</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2024/04/IMG_1579-400x600.jpeg" />
          <div className="info">
            <div className="title">
              <h2>The Exorcism</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>4.8</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2023/11/inside-out-2-poster-1-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>Inside Out 2</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.0</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2022/02/IMG_1611-400x600.jpeg" />
          <div className="info">
            <div className="title">
              <h2>Despicable Me 4 </h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>6.7</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2024/06/IMG_1765-400x600.jpeg" />
          <div className="info">
            <div className="title">
              <h2>Kill</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>6.5</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2022/12/IMG_1610-400x600.jpeg" />
          <div className="info">
            <div className="title">
              <h2>Twisters</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2022/10/venom-the-last-dance-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>Venom The Last Dance</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2021/01/borderlands-new-poster-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>Borderlands</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="	https://www.joblo.com/wp-content/uploads/2024/02/the-crow-2024-poster-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>The Crow</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2023/05/IMG_1528-400x600.webp" />
          <div className="info">
            <div className="title">
              <h2>Transformers One</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://www.joblo.com/wp-content/uploads/2024/03/the-wild-robot-movie-400x600.jpg" />
          <div className="info">
            <div className="title">
              <h2>The Wild Robot</h2>
            </div>
            <div className="rating">
              <h3>2024</h3>
              <div className="star">
                <img src={rate} />
                <h3>8.4</h3>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <hr/>
    </div>


  )


}