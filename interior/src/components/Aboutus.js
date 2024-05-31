import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'
import headimg from '../assets/inner_page_banner.png'
import abt1 from '../assets/minimalist-home-office-in-bedroom.jpg'
import abt2 from '../assets/services-banner-1-1.jpg'
import renoftlogo from '../assets/renoft-logo.png'

function Aboutus() {
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
      <div className='top-border'></div>
      <div className='aboutusheadimg'>
        <img src={renoftlogo} alt="headimg"/>
      </div>
<div className='aboutus'>
<div className='aboutus-para'>
    <h1>About Us</h1>
    <p>At <b>Renoft</b>, we believe that great interior design is more than just aesthetics; it's about creating spaces that truly reflect the people who inhabit them. That's why we've combined the creativity and expertise of our human design team with data-driven insights to deliver highly personalized design solutions tailored to your unique needs, preferences, and lifestyle.<br></br>
    <br></br>
Our mission is to make professional interior design accessible, affordable, and enjoyable for everyone. We achieve this by blending the efficiency and precision of our advanced data analysis techniques with the creativity and expertise of our human design team. This unique approach enables us to deliver exceptional design solutions that not only look stunning but also function optimally for your daily life.<br></br>
    <br></br>
Our personalized approach begins with an in-depth analysis of your space, preferences, and requirements. We carefully examine your room dimensions, natural light, and existing furniture, ensuring that our design proposals make the most of your space and resources.
Simultaneously, we analyze your design preferences by examining your responses to our carefully crafted questionnaire, as well as your browsing history, social media profiles, and other relevant data sources. This information enables us to identify patterns, trends, and correlations that help us understand your unique design style, color palette, and material preferences.<br></br>
    <br></br>
Once we have a comprehensive understanding of your space and preferences, our human design team steps in to craft a series of personalized design concepts for your review. These concepts are then refined based on your feedback, ensuring that the final design is a perfect blend of your unique style and our professional expertise.<br></br>
    <br></br>
At Renoft, we're committed to pushing the boundaries of interior design through innovative techniques and expert craftsmanship. By leveraging the strengths of both human creativity and data-driven insights, we're able to deliver exceptional design solutions that are tailored to your needs, preferences, and lifestyle.
Our personalized approach not only ensures that your design is efficient and unique but also sustainable. By optimizing space usage, material selection, and energy efficiency, we help you create a beautiful, functional, and eco-friendly living environment that you'll love for years to come.<br></br>
    <br></br>
In conclusion, Renoft is more than just an interior design service provider; we're a pioneer in the fusion of human creativity and data-driven insights, dedicated to delivering exceptional design solutions that are tailored to your unique needs, preferences, and lifestyle. With Renoft, you can be confident that your interior design journey will be enjoyable, affordable, and rewarding, resulting in a living space that truly reflects who you are and how you live.</p>
</div>
<div className='abtimgs'>
    <img src={abt1}></img>
    <img src={abt2}></img>
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

export default Aboutus
