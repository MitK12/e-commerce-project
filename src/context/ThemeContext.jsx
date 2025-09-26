import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Load saved theme or default to light
    return localStorage.getItem("theme") || "light";
  });

  // Update HTML class and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={theme === "dark" ? "dark" : ""}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };


// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext(); //create theme context

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Load user preference from localStorage or default to false
//     return localStorage.getItem("darkMode") === "true";
//   });

//   // Sync with document root
//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
