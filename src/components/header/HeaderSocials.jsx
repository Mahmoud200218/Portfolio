import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/mahmoud-azzam-a4b314215/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mahmoud200218" target="_blank"><FaGithub /></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials