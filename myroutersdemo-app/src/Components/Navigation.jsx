// src/components/Navigation.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate('/login');
  };

  return (
    <nav
      style={{
        padding: '1rem 2rem',
        background: 'linear-gradient(90deg, #4e54c8, #8f94fb)',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        color: '#fff',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
      }}
    >
     
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        MyShop
      </div>

      
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
        Home
      </Link>
      <Link to="/products" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
        Products
      </Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
        About
      </Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
        Contact
      </Link>

      
      <button
        onClick={handleLogout}
        style={{
          marginLeft: 'auto',
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#fff',
          padding: '6px 14px',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.6)',
          cursor: 'pointer',
          fontWeight: 500,
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navigation;
