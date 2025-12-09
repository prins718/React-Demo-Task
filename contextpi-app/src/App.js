// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Demo</h1>
        <Counter />
        <TodoApp />
      </div>
    </Provider>
  );
}
export default App;
