import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// 1. Reducer
const initialState = { count: 0 };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    case "DECREMENT": return { count: state.count - 1 };
    default: return state;
  }
}

// 2. Store
const store = createStore(counterReducer);

// 3. Counter Component
function Counter() {
  const count = useSelector((state) => state.count); // Read state
  const dispatch = useDispatch(); // Send actions

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

// 4. App Component
export default function App10() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

