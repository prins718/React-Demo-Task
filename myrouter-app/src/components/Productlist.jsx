import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const PRODUCTS = [
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Banana", price: 5 },
  { id: 3, name: "Orange", price: 8 },
];

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: 20, margin: 20 }}>
      <h2>Products</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {PRODUCTS.map((product) => (
          <li
            key={product.id}
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: 300,
            }}
          >
            <span>
              {product.name} — ₹{product.price}
            </span>
            <button onClick={() => addToCart(product)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
