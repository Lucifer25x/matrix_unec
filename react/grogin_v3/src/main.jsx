import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { CurrencyProvider } from './context/CurrencyContext'
import { CartProvider } from "react-use-cart";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <CurrencyProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CurrencyProvider>
    </CartProvider>
  </StrictMode>,
)
