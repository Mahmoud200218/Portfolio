import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveVan] = useState('#')
  return (
   <nav>
   <a href="#" onClick={() => setActiveVan('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
   <a href="#about" onClick={() => setActiveVan('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
   <a href="#experience" onClick={() => setActiveVan('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
   <a href="#services" onClick={() => setActiveVan('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
   <a href="#contact" onClick={() => setActiveVan('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
   </nav>
  )
}

export default Nav