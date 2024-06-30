import React, { useState } from "react";
import './Card.css';
import rate from '../../Image/icons8-rating-30.png';
import moviedata from '../../data'; // Correct import path
import gif from '../../Image/icons8-movie.gif';
import previous from '../../Image/icons8-previous-50 (3).png';
import next from '../../Image/icons8-next-50 (1).png';
import { Link } from "react-router-dom";

export default function Card({ selectedGenre }) {
    const filtermovie = moviedata.filter((movie) => (
        selectedGenre === 'allmovies' || (movie.gen && movie.gen.toLowerCase().includes(selectedGenre.toLowerCase()))
    ));

    const Cardsperpage = 28;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filtermovie.length / Cardsperpage);

    const handleNextPage = (event) => {
        event.preventDefault();
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = (event) => {
        event.preventDefault();
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * Cardsperpage;
    const endIndex = startIndex + Cardsperpage;
    const currentData = filtermovie.slice(startIndex, endIndex);

    return (
        <div className="third-container">
            <div className="heading">
                <div className="gate">
                    <img src={gif} alt="Movies" />
                    <h1>Movies</h1>
                </div>
            </div>
            <div className="big">
                {currentData.map((v, i) => (
                    <Link key={i} to={`/movies/${v.uid}`}>
                        <div className="card">
                            <div className="head">
                                <img src={v.thumbnail} alt={v.title} />
                            </div>
                            <div className="info">
                                <div className="title">
                                    <h2>{v.title}</h2>
                                </div>
                                <div className="rating">
                                    <h3>{v.year}</h3>
                                    <div className="star">
                                        <img src={rate} alt="Rating" />
                                        <h3>{v.rating}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="arrow-btn">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    <img src={previous} alt="Previous" />
                </button>
                <span className="page-number">Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    <img src={next} alt="Next" />
                </button>
            </div>
            <hr />
        </div>
    );
}
