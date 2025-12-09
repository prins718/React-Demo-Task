import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );

  return (
    <div style={{ border: "1px solid green", padding: 20, margin: 20 }}>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty 🛒</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: 300,
                }}
              >
                <span>
                  {item.name} — ₹{item.price}
                </span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <hr />
          <p>
            <strong>Total: ₹{total}</strong>
          </p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
