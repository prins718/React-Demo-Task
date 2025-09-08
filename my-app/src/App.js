import React from "react";
import UserProfile from "./components/Userprofile.jsx"; 
import Counter from "./components/counter.jsx";
import ProductList from "./components/List.jsx";
import RegistrationForm from "./components/fromvalidation.jsx";
import TemperatureConverter from "./components/liftingstate.jsx";
import MultiStepForm from "./components/advancelifting.jsx";
import All from "./components/useeffect.jsx";
import DropdownForm from "./components/demo.jsx";


import "./App.css";

function App() {
  return (
    <div>
      <h1>React Demo App</h1>
      
      <UserProfile />
      <br /> <br /> <br />

      <Counter />
      <br /> <br /> <br />

      <ProductList />
      <br /> <br /> <br />

      <RegistrationForm />
      <br /> <br /> <br />

      <TemperatureConverter />
      <br /> <br /> <br />
      
      <MultiStepForm />
      <br /> <br /> <br />

      <All />
      <br /> <br /> <br />

      <DropdownForm />
      <br /> <br /> <br />

      

      
    </div>
  );
}

export default App;
