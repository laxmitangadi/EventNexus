import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      🌙 / ☀️
    </button>
  );
};

export default ThemeToggle;