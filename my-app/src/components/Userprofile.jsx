import React, { useState } from "react";


function UserProfile({ name, age, hobby }) {
  return (
    <div className="user-card">
      <h2>Hello, {name.toUpperCase()}</h2>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}


function App() {
  const [user, setUser] = useState({
    name: "Alice",
    age: 22,
    hobby: "Painting",
  });

  const [newHobby, setNewHobby] = useState("");

  const handleUpdateHobby = (e) => {
    e.preventDefault();
    if (newHobby.trim() !== "") {
      setUser({ ...user, hobby: newHobby });
      setNewHobby("");
    }
  };

  return (
    <div className="app-container">
      <h1>React User Dashboard</h1>

     
      <UserProfile name={user.name} age={user.age} hobby={user.hobby} />

     
      <form onSubmit={handleUpdateHobby} className="form">
        <input
          type="text"
          placeholder="Enter new hobby"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
        />
        <button type="submit">Update Hobby</button>
      </form>
    </div>
  );
}

export default App;
