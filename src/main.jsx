import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom'
>>>>>>> fab08c46477081520ee47646acea2ab84188be1f
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
  </StrictMode>,
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
>>>>>>> fab08c46477081520ee47646acea2ab84188be1f
)
