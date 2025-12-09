import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

     
      <section className="hero">
        <div className="hero-content">
          <h1>Upgrade Your Tech Today!</h1>
          <p>Shop the latest electronics at unbeatable prices </p>
          <button className="shop-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>

        <div className="hero-img">
          <img src="./img/img1.jpeg" alt="Electronics" />
        </div>
      </section>

     
      <section className="categories">
        <h2>Top Categories</h2>
        <div className="category-list">
          <div className="category-card">
            <img src="./img/mobile.jpeg" alt="Mobile" />
            <p>Mobiles</p>
          </div>
          <div className="category-card">
            <img src="./img/leptop.jpeg" alt="Laptop" />
            <p>Laptops</p>
          </div>
          <div className="category-card">
            <img src="./img/headphone.jpeg" alt="Headphones" />
            <p>Headphones</p>
          </div>
          <div className="category-card">
            <img src="./img/cameras.jpeg" alt="Camera" />
            <p>Cameras</p>
          </div>
        </div>
      </section>

     
      <section className="offers">
        <h2>Special Offers</h2>
        <p>Grab your favorites before they are gone!</p>
        <button className="offer-btn" onClick={() => navigate("/offers")}>
          View Offers
        </button>
      </section>

     
      <section className="features">
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Get your product within 2-3 days</p>
        </div>
        <div className="feature-card">
          <h3>Secure Payment</h3>
          <p>100% secure & trusted checkout</p>
        </div>
        <div className="feature-card">
          <h3> 24x7 Support</h3>
          <p>Customer support anytime</p>
        </div>
      </section>

    </div>
  );
}

export default Home;
