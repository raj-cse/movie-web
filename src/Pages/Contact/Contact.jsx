import React from 'react'
import './Contact.css'
import { Header } from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Contact() {
  return (
    <div>
        <Header/>
        <div className='contact-container'>
         <div className='contact'>
         <h1>Contact us</h1>
         <p>Thank you for visiting Movie-Zone! We value your feedback and are here to help with any questions or suggestions. Whether you need movie recommendations or assistance with our site, we're ready to assist. Reach out via our contact form, email, or social media, and a team member will respond promptly. Your satisfaction is our priority at Movie-Zone, and we look forward to hearing from you!</p>
         </div>
        <div className='heading'> 
             <h1>https://movie-zone-three.vercel.app/</h1>
       </div>
       <div className='heading'>
       <h1>Email:rajpatiyal26@gmail.com</h1>
       </div>
         <div className='report'>
         <h1>Report Problem</h1>
         <p>At Movie-Zone, we strive to provide you with the best possible experience. If you encounter any issues or notice something that isn't working correctly, please let us know. Your feedback helps us improve our service. Reach out through our contact form or email, and we'll address the problem as quickly as possible. Thank you for helping us keep Movie-Zone running smoothly!</p>
         </div>
        </div>
        <Footer/>
    </div>
  )
}
