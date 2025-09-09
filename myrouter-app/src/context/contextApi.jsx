import React, { createContext, useContext } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Theme provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook to use theme
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// 4. Component using context
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </header>
  );
}

// 5. App component
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <p>Content goes here</p>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
