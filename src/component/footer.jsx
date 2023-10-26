import React from 'react'
import img7 from '../images/2-removebg-preview (1).png';

const footer = () => {
  return (
    <div>
      <footer className="footer-section">
  <div className="container">
   
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index.html">
                <img
                  src={img7}
                  className="img-fluid"
                  alt="logo"
                />
              </a>
            </div>
            <div className="footer-text">
              <p>
              "Experienced web developer adept in creating user-friendly, responsive digital experiences. Proficient in front-end and back-end technologies. Let's bring your vision to life!"
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="https://www.linkedin.com/in/aniket-d-86401b211/">
                <i className="fab fa-linkedin facebook-bg" />
                
              </a>
              <a href="https://twitter.com/AniketD97748533">
                <i className="fab fa-twitter twitter-bg" />
              </a>
              <a href="https://www.instagram.com/mr_aniketdoke/?igshid=YmMyMTA2M2Y%3D">
                <i className="fab fa-instagram google-bg" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#experience1">experience</a>
              </li>
              <li>
                <a href="#education">education</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              
              <li>
                <a href="#de">Contact us</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Touch-me</h3>
            </div>
            <div className="footer-text mb-25">
              <p>
                Don’t miss to message to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="https://formspree.io/f/xvondrqk" method="POST">
                <input type="text" placeholder="Email Address" name="email" />
                <button value="send">
                  <i className="fab fa-telegram-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>
              Copyright © 2023, All Right Reserved{" "}
              <a href="">Aniket Doke</a>
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          {/* <div className="footer-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default footer
