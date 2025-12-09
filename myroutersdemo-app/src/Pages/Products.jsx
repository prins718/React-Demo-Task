import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Css/Products.css";

function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [category, setCategory] = React.useState("all");

  
  const products = [
    { id: 1, name: "iPhone 15 Pro", price: 1399, category: "mobile", img: "./img/iphone15pro.jpeg" },
    { id: 2, name: "Samsung S24 Ultra", price: 1299, category: "mobile", img: "./img/s24ultra.jpeg" },
    { id: 3, name: "HP Pavilion Gaming", price: 999, category: "laptop", img: "./img/hp.jpg" },
    { id: 4, name: "MacBook Pro 2024", price: 1999, category: "laptop", img: "./img/macbook.jpeg" },
    { id: 5, name: "Sony WH-1000XM5", price: 399, category: "headphone", img: "./img/sony.jpeg" },
    { id: 6, name: "Canon DSLR 90D", price: 899, category: "camera", img: "./img/canon.jpeg" },
    { id: 7, name: "Apple Watch Ultra 2", price: 999, category: "watch", img: "./img/watch.jpeg" },
    { id: 8, name: "BoAt Bassheads", price: 29, category: "headphone", img: "./img/boat.jpeg" },
  ];

 
  const filteredProducts = products.filter((product) =>
    (category === "all" || product.category === category) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchTerm(params.get("search") || "");
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchTerm}`);
  };

  return (
    <div className="products-container">
      <h1>Our Products</h1>

     
      <div className="search-filter-box">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search for electronics..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="mobile">Mobiles</option>
          <option value="laptop">Laptops</option>
          <option value="headphone">Headphones</option>
          <option value="camera">Cameras</option>
          <option value="watch">Smartwatch</option>
        </select>
      </div>

     
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹ {product.price}</p>
            <p className="cat">{product.category.toUpperCase()}</p>
            <div className="btn-group">
              <Link to={`/products/${product.id}`} className="btn-details">View Details</Link>
              <button className="btn-cart"> Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      
      {filteredProducts.length === 0 && (
        <p className="no-product"> No products found matching your search.</p>
      )}
    </div>
  );
}

export default Products;
