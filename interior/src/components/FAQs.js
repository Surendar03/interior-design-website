import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'
import renoftlogo from '../assets/renoft-logo.png'

function FAQs() {

    document.querySelectorAll('.faq h3').forEach(faq => {
        faq.addEventListener('click', () => {
            faq.parentNode.classList.toggle('active');
        });
    });
  
    return (
        <div className='faq-body'>
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
      <div className='aboutusheadimg'>
        <img src={renoftlogo} alt="headimg"/>
      </div>
       
<div class="faq-container">
    <h1>Frequently Asked Questions</h1>

    <div class="faq-section">
        <h2>General Questions</h2>
        <details>
            <summary>What services does Renoft offer?</summary>
            <p>Renoft provides comprehensive interior design services for homes, offices, shops, showrooms, and other commercial spaces. Our services include space planning, design consultation, project management, and full-service interior design.</p>
        </details>
        <details>
            <summary>How do I get started with Renoft?</summary>
            <p>To get started, you can contact us via our website or phone to schedule an initial consultation. During this meeting, we’ll discuss your needs, preferences, and budget to understand your vision for the space.</p>
        </details>
        <details>
            <summary>What is the typical process for an interior design project with Renoft?</summary>
            <p>Our process typically involves an initial consultation, design concept development, detailed planning, material selection, project execution, and final installation. We ensure a collaborative approach to meet your specific requirements.</p>
        </details>
        <details>
            <summary>Can Renoft work with my existing furniture and décor?</summary>
            <p>Yes, we can incorporate your existing furniture and décor into the new design. Our goal is to create a cohesive and harmonious space that reflects your style while maximizing functionality.</p>
        </details>
        <details>
            <summary>What areas do you serve?</summary>
            <p>Renoft serves a wide range of locations. Please contact us to confirm if we can provide services in your specific area.</p>
        </details>
    </div>

    <div class="faq-section">
        <h2>Home Interior Design</h2>
        <details>
            <summary>Can you help with small home renovation projects?</summary>
            <p>Absolutely! No project is too small for us. Whether you need a complete home makeover or just want to refresh a single room, we can help.</p>
        </details>
        <details>
            <summary>How do you ensure that the design reflects my personal style?</summary>
            <p>During the initial consultation, we take the time to understand your preferences, lifestyle, and design tastes. We then create a personalized design plan that reflects your unique style.</p>
        </details>
        <details>
            <summary>Do you provide eco-friendly design options?</summary>
            <p>Yes, we offer sustainable and eco-friendly design solutions. We can recommend materials, furnishings, and practices that are environmentally responsible.</p>
        </details>
    </div>

    <div class="faq-section">
        <h2>Office Interior Design</h2>
        <details>
            <summary>How can Renoft improve the functionality of my office space?</summary>
            <p>We focus on creating efficient layouts that enhance productivity, comfort, and collaboration. Our designs incorporate ergonomic furniture, optimized workflows, and smart storage solutions.</p>
        </details>
        <details>
            <summary>Can you design offices for remote and hybrid work environments?</summary>
            <p>Yes, we can design flexible office spaces that accommodate remote and hybrid work models. This includes creating multi-functional areas, private workspaces, and technology integration.</p>
        </details>
        <details>
            <summary>What is your approach to branding in office design?</summary>
            <p>We incorporate your brand identity into the design through color schemes, logos, and unique design elements that reflect your company’s culture and values.</p>
        </details>
    </div>

    <div class="faq-section">
        <h2>Shop and Showroom Interior Design</h2>
        <details>
            <summary>How can you help attract more customers to my shop/showroom?</summary>
            <p>Our designs focus on creating inviting and visually appealing spaces that enhance the customer experience. We use strategic layouts, lighting, and display techniques to attract and retain customers.</p>
        </details>
        <details>
            <summary>Do you provide customized display solutions?</summary>
            <p>Yes, we offer customized display solutions tailored to your products and brand. We ensure that your merchandise is showcased in the most appealing and effective manner.</p>
        </details>
        <details>
            <summary>Can you work within a tight budget for shop/showroom design?</summary>
            <p>We are experienced in working with various budgets and can provide cost-effective solutions without compromising on quality and aesthetics.</p>
        </details>
    </div>

    <div class="faq-section">
        <h2>Other Services</h2>
        <details>
            <summary>Do you offer consultation-only services?</summary>
            <p>Yes, we offer design consultation services where we provide expert advice and design recommendations without full project management. This is ideal for clients who prefer to execute the design themselves.</p>
        </details>
        <details>
            <summary>How do you handle project timelines and deadlines?</summary>
            <p>We work diligently to create realistic project timelines and adhere to them. Clear communication and efficient project management ensure that we meet deadlines and deliver quality results on time.</p>
        </details>
        <details>
            <summary>What sets Renoft apart from other interior design firms?</summary>
            <p>Renoft stands out due to our personalized approach, attention to detail, and commitment to client satisfaction. Our team of experienced designers works closely with clients to bring their vision to life while ensuring functionality and style.</p>
        </details>
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

export default FAQs
