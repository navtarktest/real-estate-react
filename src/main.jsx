import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext";
import { WishlistProvider } from "./context/WishlistContext";
import { PropertyProvider } from "./context/PropertyContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <WishlistProvider>
      <PropertyProvider>
      <App />
    </PropertyProvider>
    </WishlistProvider>
    </ThemeProvider>
  </StrictMode>,
)
