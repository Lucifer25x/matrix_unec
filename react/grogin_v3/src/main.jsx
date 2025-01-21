import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Context from './context/Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>,
)
