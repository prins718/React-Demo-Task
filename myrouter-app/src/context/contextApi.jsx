import React, { createContext, useContext } from 'react';


const ThemeContext = createContext();


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


function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}


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


function App3() {
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

export default App3;
