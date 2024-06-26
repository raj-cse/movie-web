import React from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';
import rate from '../../Image/icons8-rating-30.png';
import moviedata from '../../data'; // Ensure moviedata is correctly imported
import gif from '../../Image/icons8-movie.gif';
import searchIcon from '../../Image/icons8-search-30.png';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import Slider from 'react-slick';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';

export default function Pages() {
    const { query } = useParams();
    const filterData = moviedata.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <Header />
            <br></br>
            <div className="third-container">
                
                <div className="big">
                   
                    {filterData.map((v, i) => (
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
            </div>
            <br></br>
          
            <Card/>
            <Footer/>
        </div>
    );
}
