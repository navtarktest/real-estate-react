import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext";
import { WishlistProvider } from "./context/WishlistContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <WishlistProvider>
      <App />
    </WishlistProvider>
    </ThemeProvider>
  </StrictMode>,
)
