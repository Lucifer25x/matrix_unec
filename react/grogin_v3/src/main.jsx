import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { CurrencyProvider } from './context/CurrencyContext'
import { SearchProvider } from './context/SearchContext'
import { CartProvider } from "react-use-cart";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <CurrencyProvider>
        <SearchProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </SearchProvider>
      </CurrencyProvider>
    </CartProvider>
  </StrictMode>,
)
