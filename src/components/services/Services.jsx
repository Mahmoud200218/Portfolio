import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
       <article className='services'>
         <div className="services__head">
         <h3>UI/UX Design</h3>
         </div>

         <ul className='services__list'>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Easy to use search engine design</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Understand strategy, business requirements, and user perspective</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Thoughtful design optimized for multiple screens</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>High quality and useful experience for site users</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Seamless and transparent communication</p>
          </li>
         </ul>
       </article>
       {/* END OF UI/UX */}

       <article className='services'>
         <div className="services__head">
         <h3>WEB DEVELOPMENT</h3>
         </div>

         <ul className='services__list'>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Design specialized websites</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p> Re-improving websites</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Convert PSD to Html and CSS</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Convert UI Design to Html and CSS</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p> Improve site speed</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Give the site a high quality</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p> Add animation and animation to the site</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>write clean code</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Making responsive pages</p>
          </li>
         </ul>
       </article>
       {/* END OF WEB DEVELOPMENT */}
       
       <article className='services'>
         <div className="services__head">
         <h3>Content Creation</h3>
         </div>

         <ul className='services__list'>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Writing exclusive articles for SEO</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Writing a company profile</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Writing a commercial</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Content marketing for a specific service or product</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Exclusive article writing company</p>
          </li>
          <li>
          <BsCheck className='services__list-icon' />
          <p>Content writing in technical fields</p>
          </li>
         </ul>
       </article>
       {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services