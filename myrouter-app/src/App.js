import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import ProtectedRoute from "./components/protected";
import { useState } from "react";
import App3 from "./context/contextApi";
import App5 from "./components/tabledemo";
function App() {
  
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        
        <Route path="/dashboard" element={ <ProtectedRoute isAuth={isAuth}> <Dashboard /> </ProtectedRoute>}/>

        
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
      <App3 />
      <App5 />
    </div>
  );
}

export default App;
