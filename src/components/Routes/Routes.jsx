import React from "react";
import './Routes.css';
import schedule from '../../Image/icons8-film-reel-64.png';
import { useParams } from "react-router-dom";
import data from "../../data";

export default function Routeall() {
  let { id } = useParams();
  let movie = data.find(movies => movies.uid === id);

  return (
    <div className="route-container">
      <div className="heading-1">
        <img src={schedule} alt="Schedule Icon" />
        <h1>Schedule</h1>
      </div>
      <div className="big-container">
        <div className="cardx">
          <img src={movie.thumbnail} alt={movie.title} />
          <a href={movie.dlink} className="button">Download</a>
        </div>
        <div className="para-1">
          <p>{movie.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
