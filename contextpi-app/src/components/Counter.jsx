// components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';
function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}
export default Counter;