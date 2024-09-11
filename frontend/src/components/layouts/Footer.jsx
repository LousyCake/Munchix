import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section subscribe">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for exclusive deals and updates on your favorite meals.</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="social-icons">
              <Link to="#facebook"><FaFacebook /></Link>
              <Link to="#twitter"><FaTwitter /></Link>
              <Link to="#instagram"><FaInstagram /></Link>
            </div>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users/login">Login</Link></li>
              <li><Link to="/users/signup">Sign Up</Link></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: support@Munchix.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Foodie Lane, Flavor Town, USA</p>
          </div>
        </div>

        {/* Line Above the Map */}
        <div className="footer-line"></div>

        {/* Google Map Section */}
        <div className="footer-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509619!2d144.95373531531586!3d-37.81621897975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727dbdbbcdef0!2s123%20Foodie%20Lane%2C%20Flavor%20Town%2C%20USA!5e0!3m2!1sen!2s!4v1615827022063!5m2!1sen!2s" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            title="Google Map Location">
          </iframe>
        </div>

        <div className="footer-large-text">
          Munchix
        </div>
        <div className="footer-bottom">
          &copy; 2024 Munchix | Designed by Anshul Shukla
        </div>
      </footer>
    </>
  )
}
