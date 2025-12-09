import React from "react";
import "./Css/About.css";

function About() {
  return (
    <div className="about-page">
      
      <section className="about-hero">
        <h1>About ElectroMart</h1>
        <p>Your trusted hub for premium electronics, fast delivery, and secure shopping.</p>
      </section>

    
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            ElectroMart is India’s leading online store for high-quality electronics.
            Our mission is to make technology accessible, affordable, and enjoyable
            for everyone. With top brands, fast delivery, and reliable support, we
            serve millions of happy customers across the country.
          </p>

          <p>
            From smartphones to laptops, audio gadgets to cameras, we bring the
            latest innovations right to your doorstep at unbeatable prices.
          </p>

          <ul className="about-points">
            <li>Secure & Fast Checkout</li>
            <li>Lightning-Fast Delivery</li>
            <li>24/7 Customer Support</li>
            <li>Easy & Trusted Payments</li>
          </ul>
        </div>

        <div className="about-img">
          <img src="./img/img1.jpeg" alt="Our Team" />
        </div>
      </section>

      
      <section className="mv-section">
        <div className="mv-box">
          <h3>Our Mission</h3>
          <p>
            To provide world-class electronics with genuine quality, 100% satisfaction,
            and excellent after-sales service at competitive prices.
          </p>
        </div>

        <div className="mv-box">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted and innovative online electronics marketplace,
            empowering users with the best technology choices.
          </p>
        </div>
      </section>

     
      <section className="stats-section">
        <div className="stat-card">
          <h2>50L+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <h2>5000+</h2>
          <p>Products Available</p>
        </div>
        <div className="stat-card">
          <h2>200+</h2>
          <p>Brands Listed</p>
        </div>
        <div className="stat-card">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </section>

     
      <section className="choose-us">
        <h2>Why Choose ElectroMart?</h2>
        <div className="choose-grid">
          <div className="choose-card">Best Price Guarantee</div>
          <div className="choose-card">Easy Replacement Policy</div>
          <div className="choose-card">Genuine Quality Products</div>
          <div className="choose-card">100% Safe & Secure Payments</div>
        </div>
      </section>
    </div>
  );
}

export default About;
