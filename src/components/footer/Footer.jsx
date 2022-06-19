import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MAHMOUD</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com//profile.php?id=100006359088270" target='_blank'><FaFacebookF /></a>
        <a href="https://instagram.com/mahmoud_f_azzam/" target='_blank'><FiInstagram /></a>
        <a href="https://twitter.com/azzam_web?t=EbGEwV-_HWGZWc8Lot1fnA&s=09" target='_blank'><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MAHMOUD Azzam. All  rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer