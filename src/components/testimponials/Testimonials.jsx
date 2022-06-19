import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import {Pagination} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'I recommend working with him'
  },

  {
    avatar: AVTR2,
    name: 'Waseem',
    review: 'He has strong experience in this field and fast performance'
  },

  {
    avatar: AVTR3,
    name: 'wael Saleem',
    review: 'Always the best work with Mahmoud'
  },

  {
    avatar: AVTR4,
    name: 'Leena',
    review: 'It was a pleasure working with you and I hope this work will be permanent'
  },

]

const testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination = {{clickable : true}}
      >
        {
          data.map(({ avatar, name, review },index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__review'>{name}</h5>
                <small className='client__review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials