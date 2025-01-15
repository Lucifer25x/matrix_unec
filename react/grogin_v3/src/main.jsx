import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { CurrencyProvider } from './context/CurrencyContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CurrencyProvider>
  </StrictMode>,
)
