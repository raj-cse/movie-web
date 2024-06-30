import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';
import rate from '../../Image/icons8-rating-30.png';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card'; // Import Card component
import moviedata from '../../data'; // Correct import path
import gif from '../../Image/icons8-movie.gif';
import previous from '../../Image/icons8-previous-50 (3).png';
import next from '../../Image/icons8-next-50 (1).png';

export default function Pages() {
    const { query } = useParams();
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const CardsPerPage = 28;

    useEffect(() => {
        const searchData = moviedata.filter((item) =>
            item.title && item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(searchData);
        setCurrentPage(1); // Reset to first page on new search
    }, [query]);

    const handleNextPage = (event) => {
        event.preventDefault();
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = (event) => {
        event.preventDefault();
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * CardsPerPage;
    const endIndex = startIndex + CardsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredData.length / CardsPerPage);

    return (
        <div>
            <Header />
            <br />
            <div className="third-container">
                <div className="heading">
                    <div className="gate">
                        <img src={gif} alt="Movies" />
                        <h1>Movies</h1>
                    </div>
                </div>
                <div className="big">
                    {currentData.length > 0 ? (
                        currentData.map((v, i) => (
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
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
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
            <Card selectedGenre="allmovies" />
            <Footer />
        </div>
    );
}
