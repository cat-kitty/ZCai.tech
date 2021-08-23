import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join me!</p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link
              to={{ pathname: "https://www.instagram.com/kitty8197/" }}
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              to={{ pathname: "https://www.facebook.com/kitty.cai.zhirong/" }}
              target="_blank"
            >
              Facebook
            </Link>
            <Link to="/">Youtube</Link>
            <Link
              to={{
                pathname: "https://www.linkedin.com/in/zhi-rong-c-79951b19a",
              }}
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <section className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Kitty
              <i className="fas fa-cat" />
            </Link>
          </div>
          <small className="website-rights">ZCai © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to={{ pathname: "https://www.facebook.com/kitty.cai.zhirong/" }}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to={{ pathname: "https://www.instagram.com/kitty8197/" }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to={{
                pathname: "https://www.linkedin.com/in/zhi-rong-c-79951b19a",
              }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Footer;
