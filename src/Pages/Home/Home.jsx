import React, { useEffect, useState } from "react";
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";


const Home = () =>{
const[ popularMovie , setPopularMovie ] =useState([])

    useEffect(() =>{
        fetch( "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res =>res.json())
        .then(data =>setPopularMovie(data.results))

    },[])
    return(
<div className="poster">
    <Carousel
    showThumbs ={false}
    autoPlay ={true}
    transitionTime={3}
    infiniteLoop ={true}
    showStatus ={false}
    >
        {
            popularMovie.map(movie =>(
                <Link style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
               <div className="posterImage">
                   <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
               </div>
               <div className="posterImage__overlay">
                <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                <div className="posterImage__runtime">
                   { movie ? movie.release_date:""}
                   <span className="posterImage__rating">
                    {movie ? movie.vote_average :""}
                    <i className="fas fa-star" />{""}
                   </span>
                </div>
                <div className="posterImage__descrption">{movie ? movie.overview :""}</div>
               </div>
               </Link>
            ))
        }
    </Carousel>
</div>
    )
}
export default Home






Joker 2
Kingdom of the planet of Apes
The Garfield Movie
Deadpool & Wolverine
Bad Boys: Ride or Die
Beverly Hills Cop: Axel F
The Strangers: Chapter 1
The Fall Guy
Hitman
The Exorcism
Inside Out 2
Despicable Me 4 
Kill
Twisters
Venom The Last Dance
Borderlands
The Crow
Transformers One
The Wild Robot








