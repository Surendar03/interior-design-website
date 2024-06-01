import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'

function Services() {
    return (
        <div>
              <nav>
        <div class="nav-content">
          <div class="logo">
            <NavLink to={"/"}><a href="#">Renoft</a></NavLink>
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
<p className='service-para'>FIND EVERYTHING FOR YOUR HOME, RIGHT HERE AT CHATTELS DESIGN</p>
<h1 className='service-h1'>Suite of Services for You!</h1>
<div className='service-imgs'>
    <div className='serviceimg1'>
        <h3>Home Interior Design</h3>
        <p>End to end home interior solutions, <br></br>where quality meets your pocket.</p>
    </div>
    <div className='serviceimg2'>
    <h3>Modular Kitchen Design</h3>
        <p>Fully modular to semi-modular <br></br>kitchens with amazing variety of <br></br>finishes</p>
    </div>
    <div className='serviceimg3'>
    <h3>Furniture & Decor</h3>
        <p>Select from an extensive range of <br></br>products, from space saving <br></br>furniture to statement lighting.</p>
    </div>
    <div className='serviceimg4'>
    <h3>Office Interior Design</h3>
        <p>A well-designed office interior <br></br>can enhance productivity and create<br></br> a positive work environment.</p>
    </div>
</div>

<div className='howitworks'>

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

export default Services
