import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Css/Productsdetails.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 1399,
      category: "Mobile",
      description: "The latest iPhone with A17 Pro chip, stunning display, and pro-grade camera system.",
      image: "./img/iphone15pro.jpeg",
      rating: 4.8,
      reviews: 324,
      specs: ["128 GB Storage", "6.1\" OLED Display", "48 MP Main Camera", "A17 Pro Chip"],
      inStock: true,
    },
    {
      id: 2,
      name: "Samsung S24 Ultra",
      price: 1299,
      category: "Mobile",
      description: "Flagship Android phone with powerful processor and 200 MP camera.",
      image: "./img/s24ultra.jpeg",
      rating: 4.6,
      reviews: 210,
      specs: ["256 GB Storage", "6.8\" AMOLED", "200 MP Camera", "Snapdragon Flagship"],
      inStock: true,
    },
    {
      id: 3,
      name: "HP Pavilion Gaming Laptop",
      price: 999,
      category: "Laptop",
      description: "High-performance gaming laptop, ideal for both work and play.",
      image: "./img/hp.jpg",
      rating: 4.4,
      reviews: 145,
      specs: ["16 GB RAM", "512 GB SSD", "RTX Graphics", "15.6\" FHD Display"],
      inStock: false,
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      price: 399,
      category: "Headphone",
      description: "Premium noise-cancelling wireless headphones with rich, immersive sound.",
      image: "./img/sony.jpeg",
      rating: 4.9,
      reviews: 512,
      specs: ["ANC", "30h Battery", "Type-C Charging", "Bluetooth 5.2"],
      inStock: true,
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="detail-not-found">
        <h1>Product Not Found</h1>
        <p>The product you are looking for doesn’t exist or has been removed.</p>
        <button className="btn-primary" onClick={() => navigate("/products")}>
          ⟵ Back to Products
        </button>
      </div>
    );
  }

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.round(product.rating) ? "★" : "☆"
  ).join("");

  return (
    <div className="detail-page">
     
      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span> /{" "}
        <span onClick={() => navigate("/products")}>Products</span> /{" "}
        <span className="active">{product.name}</span>
      </div>

      <div className="detail-wrapper">
       
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

       
        <div className="detail-info">
          <h1>{product.name}</h1>

          <div className="rating-row">
            <span className="stars">{stars}</span>
            <span className="rating-text">{product.rating} / 5</span>
            <span className="reviews">({product.reviews} reviews)</span>
          </div>

          <p className="category-badge">{product.category}</p>

          <p className="price">₹ {product.price}</p>

          <p className="description">{product.description}</p>

          <ul className="spec-list">
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <p className={`stock ${product.inStock ? "in" : "out"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>

          <div className="btn-row">
            <button
              className="btn-primary"
              disabled={!product.inStock}
              onClick={() => alert("Added to cart!")}
            >
              Add to Cart
            </button>
            <button
              className="btn-outline"
              disabled={!product.inStock}
              onClick={() => alert("Proceeding to buy now!")}
            >
               Buy Now
            </button>
          </div>

          <div className="extra-info">
            <p>Free delivery on orders above ₹999</p>
            <p>7-day replacement policy</p>
            <p>Secure payments: UPI / Card / Netbanking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
