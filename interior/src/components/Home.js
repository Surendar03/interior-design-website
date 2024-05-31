import React from 'react'
import { NavLink } from "react-router-dom";
import '../App.css';
import adv1 from '../assets/Interius-Advantage-1.png';
import adv2 from '../assets/Interius-Advantage-2.png';
import adv3 from '../assets/Interius-Advantage-3.png';
import adv4 from '../assets/Interius-Advantage-4.png';

import kitchen1 from '../assets/designphotos/modularkitchen1.jpg';
import kitchen2 from '../assets/designphotos/modularkitchen2.jpg';
import kitchen3 from '../assets/designphotos/modularkitchen3.jpg';
import kitchen4 from '../assets/designphotos/modularkitchen4.jpg';

import livingroom1 from '../assets/designphotos/livingroom1.jpg';
import livingroom2 from '../assets/designphotos/livingroom2.jpg';
import livingroom3 from '../assets/designphotos/livingroom3.jpg';
import livingroom4 from '../assets/designphotos/livingroom4.jpg';

import Wardrobe1 from '../assets/designphotos/Wardrobe1.jpg';
import Wardrobe2 from '../assets/designphotos/Wardrobe2.jpg';
import Wardrobe3 from '../assets/designphotos/Wardrobe3.jpg';
import Wardrobe4 from '../assets/designphotos/Wardrobe4.jpg';

function Home() {
    return (
        <div>
            <nav>
        <div class="nav-content">
          <div class="logo">
            <a href="#">Renoft</a>
          </div>
          <ul class="nav-links">
          <li><NavLink to={"/"}><a href="#">Home</a></NavLink></li>
          <li><NavLink to={"/Services"}><a href="#">Services</a></NavLink></li>
            <li><NavLink to={"/Contact"}><a href="#">Contact</a></NavLink></li>
            <li><NavLink to={"/Aboutus"}><a href="#">About Us</a></NavLink></li>
            <li><NavLink to={"/Projects"}><a href="#">Projects</a></NavLink></li>
            <li><NavLink to={"/FAQs"}><a href="#">FAQs</a></NavLink></li>
          </ul>
        </div>
      </nav>
            <div className='topcontainer'>
                <div className='highlight'>
                Bring home beautiful interiors <span>that fit your budget</span>
                </div>
                <div className='topimg'>
                </div>
            </div>
            <div className='images'>
                <img src={adv1} alt='image' />
                <img src={adv2} alt='image' />
                <img src={adv3} alt='image' />
                <img src={adv4} alt='image' />

            </div>
<div className='count'>
  <div>
<h1>Let our numbers do the talking!</h1>
</div>
<div className='innercount'>
<div>
  <h2>75000+</h2>
  <span>#company</span>
</div>
<div>
<h2>3500+</h2>
  <span>Designers</span>
</div>
<div>
<h2>40</h2>
  <span>cities</span>
</div>
</div>
</div>
<h1 className='offerh1'>What we offer</h1>
<div className='wtvoffer'>

<div>
  <h4>Our services</h4>
  <ul typeof='dot'>
    <li>Modular kitchens</li>
    <li>Modular wardrobes</li>
    <li>Lighting</li>
    <li>Wall design & painting</li>
  </ul>
</div>
<div>
<h4>Warranty</h4>
  <ul typeof='dot'>
    <li>FLAT 10-year warranty stay worry free with 
      our warranty policy on modular products.
    </li>
    <li>Up to 1-year on-site service warranty-
      warranty on on-site services such as painting, electricl,
       and more.
    </li>
  </ul>
</div>
<div>
<h4>Price benefits</h4>
  <ul typeof='dot'>
    <li>Price-match guarantee -price match to a valid quote in
       comparison with a branded player and for exact scope.
    </li>
    <li>Flexible payment options - EMI solutions and 
      payment schemes from leading 
      financial partners.
  </li>
    <li>No hidden costs - Transparent costing without 
      last-minute additions.
  </li>
  </ul>
</div>
</div>


<div className='designphotos'>
  <h3>Modular Kitchen Designs</h3>
  <div>
    <img src={kitchen1}/>
    <img src={kitchen2}/>
    <img src={kitchen3}/>
    <img src={kitchen4}/>
  </div>

  <h3>Living Room Designs</h3>
  <div>
  <img src={livingroom1}/>
    <img src={livingroom2}/>
    <img src={livingroom3}/>
    <img src={livingroom4}/>
  </div>

  <h3>Wardrobe Designs</h3>
  <div>
    <img src={Wardrobe1}/>
    <img src={Wardrobe2}/>
    <img src={Wardrobe3}/>
    <img src={Wardrobe4}/>
  </div>
</div>

<div className='getintouchbtndiv'>
  <div>
    <h1>Renoft</h1>
    <button><NavLink to={"/Contact"}><a href='#'>Get in Touch</a></NavLink></button>
  </div>
</div>

<footer class="footer">
  <div className='footercontact'>
    <div className='footertext'>
      <h3>About Us</h3>
      <p>"From its modest roots as a small interior decor startup 
        in 2005, Renoft has skyrocketed to become the most innovative 
        and sought-after architecture, interior design, and execution 
        powerhouse in Bangalore by 2020. With a relentless pursuit of 
        excellence and a passion for transforming spaces, Renoft has 
        redefined the industry landscape, leaving an indelible mark on 
        the city's architectural heritage."</p>
    </div>
    <div className='footertext'>
      <h3>Contact Us</h3>
      <p><b>Call us:</b> +91 99459 92358<br></br>
<b>Email :</b> contact@renoft.com<br></br>
<b>Renoft Office Address:</b> No. 345, 2nd Floor, Sri Krishna Towers, 17th Cross, HSR Layout Sector 4, Bangalore - 560102, Karnataka, India.</p>
    </div>
  </div>
  
  <div class="footer-container">
    <div class="footer-left">
      
      <ul class="footer-links">
      <li><NavLink to={"/"}><a href="#">Home</a></NavLink></li>
      <li><NavLink to={"/Services"}><a href="#">Services</a></NavLink></li>
            <li><NavLink to={"/Contact"}><a href="#">Contact</a></NavLink></li>
            <li><NavLink to={"/Aboutus"}><a href="#">About Us</a></NavLink></li>
            <li><NavLink to={"/Projects"}><a href="#">Projects</a></NavLink></li>
            <li><NavLink to={"/FAQs"}><a href="#">FAQs</a></NavLink></li>
      </ul>
      
    </div>
  </div>
  <p>&copy; 2023 Renoft. All rights reserved.</p>
</footer>

</div>
    )
}

export default Home
