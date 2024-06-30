import React from 'react'
import './Follow.css'
import { Header } from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


export default function Follow() {
    return (
     <div>
        <Header/>
           <div className='follow-container'>
            <div className='follow'>
                <h1>Follow Us</h1>
                <p>Stay connected with Movie-Zone for the latest updates, movie recommendations, and exclusive content. Follow us on social media to join our community of movie enthusiasts and never miss out on what's trending. Let's explore the world of movies together!</p>
                <div className='inst'>
                    <h2>Instagram</h2>
                    <p>_rajpatiyal</p>
                </div>
                <div className='link'>
                    <h1>https://movie-zone-three.vercel.app/</h1>
                </div>
                <div className='git'>
                    <p>On GitHub, you can find our open-source projects, contribute to ongoing developments, and explore our repositories. Follow us on GitHub here.</p>
                    <h2>Github</h2>
                    <p>Raj patiyal</p>
                    <p>raj-cse</p>
                    <p>Join our community, engage with us, and be part of our journey as we strive to create and innovate!</p>
                </div>

            </div>



        </div>
        <Footer/>
     </div>
    )
}
