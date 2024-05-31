import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'
import design1 from '../assets/projects/design1.jpg'
import design2 from '../assets/projects/design2.jpg'
import design3 from '../assets/projects/design3.jpg'
import design4 from '../assets/projects/design4.jpeg'
import design5 from '../assets/projects/design5.jpg'
import design6 from '../assets/projects/design6.jpeg'

function Projects() {
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
      <div className='projecthead'></div>
<div className='projectdiv'>
    <h1>Completed Projects</h1>
    <div className='projectimgs'>
        <div>
            <img src={design1}></img>
            <h4>Home Interior,Annanagar</h4>
        </div>
        <div><img src={design2}></img>
        <h4>Home Interior,Mangalore</h4>
        </div>
        <div><img src={design3}></img>
        <h4>Vintage Interior,Bangalore</h4>
        </div>
        <div><img src={design4}></img>
        <h4>Office Interior, Hyderabad </h4>
        </div>
        <div><img src={design5}></img>
        <h4>Structural Glazing,Chennai</h4>
        </div>
        <div><img src={design6}></img>
        <h4>Cafe ,Chennai</h4>
        </div>

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

export default Projects
