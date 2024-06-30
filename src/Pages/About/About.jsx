import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function About() {
    return (
        <div>
            <Header />
            <br />
            <div className='about-container'>
                <div className='about'>
                   
                        <h1>About us</h1>
                    <p>Welcome to Movie-Zone, your ultimate destination for all things cinema! Whether you're a casual moviegoer or a passionate film enthusiast, we bring the magic of the silver screen right to your fingertips. Our platform offers comprehensive reviews, the latest industry news, and in-depth analyses of both classic films and modern blockbusters.</p>

                    <h1>Our Mission</h1>
                    <p>At Movie-Zone, our mission is to ignite and nurture a love for cinema by providing a comprehensive and engaging platform for all movie enthusiasts. We aim to create a vibrant community where film lovers can discover, discuss, and celebrate movies. </p>
                    <h1>Our Story</h1>
                    <p>Movie-Zone was born from a shared passion for the magic of cinema. We started as a small blog among friends and quickly grew into a comprehensive platform offering in-depth reviews, the latest industry news, and exclusive interviews.</p>
                </div>
                <div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
