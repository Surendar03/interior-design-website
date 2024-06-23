import React, {useEffect, useState } from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Contact() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);



  const navigateTo = useNavigate()

  const [data, setdata] = useState({
    cname: "",
    email_id: "",
    phone_number: "",
    pincode:"",
    message: ""
});
function handleinput(e) {

    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
}

function getintouch(e) {
  e.preventDefault();
    console.log(data)
    axios.post("http://localhost:8000/Contact", data).then(
        (res) => {
            alert(res.data)
            if (res.data === "Designer will soon contact you. \n Thank you for contacting us!") {
              
              navigateTo("/")
          }

        }).catch(
            (err) => {
                console.log(err)

            })
          }

    return (
        <div id="body">
            <nav>
        <div class="nav-content">
          <div class="logo">
          <NavLink to={"/#body"}><a href="#">Renoft</a></NavLink>
          </div>
          <ul class="nav-links">
          <li><NavLink to={"/"}><a href="#">Home</a></NavLink></li>
          <li><NavLink to={"/Services#body"}><a href="#">Services</a></NavLink></li>
            <li><NavLink to={"/Contact#body"}><a href="#">Contact</a></NavLink></li>
            <li><NavLink to={"/Aboutus#body"}><a href="#">About Us</a></NavLink></li>
            <li><NavLink to={"/Projects#body"}><a href="#">Projects</a></NavLink></li>
            <li><NavLink to={"/FAQs#body"}><a href="#">FAQs</a></NavLink></li>
          </ul>
        </div>
      </nav>
      
<div className='contactdiv'>
<form className='contactform'>
    <h1>GET IN TOUCH</h1>
    <input type='text' placeholder='Name' name='cname' onChange={handleinput} required/>
    <input type='email' placeholder='Email' name='email_id' onChange={handleinput} required/>
    <input type='tel' placeholder='Phone' name='phone_number' onChange={handleinput} required/>
    <input type='number' placeholder='Enter your pincode' name='pincode' onChange={handleinput} required/>
    <textarea placeholder='Message' onChange={handleinput} name='message' required></textarea>
    <button type='submit' onClick={getintouch}>Get in Touch</button>
</form>
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
      <li><NavLink to={"/#body"}><a href="#">Home</a></NavLink></li>
            <li><NavLink to={"/Services#body"}><a href="#">Services</a></NavLink></li>
            <li><NavLink to={"/Contact#body"}><a href="#">Contact</a></NavLink></li>
            <li><NavLink to={"/Aboutus#body"}><a href="#">About Us</a></NavLink></li>
            <li><NavLink to={"/Projects#body"}><a href="#">Projects</a></NavLink></li>
            <li><NavLink to={"/FAQs#body"}><a href="#">FAQs</a></NavLink></li>
      </ul>
    </div>
  </div>
  <p>&copy; 2023 Renoft. All rights reserved.</p>
</footer> 
        </div>
    )
}

export default Contact
