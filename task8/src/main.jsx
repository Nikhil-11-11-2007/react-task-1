import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductContex from './context/ProductContex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductContex>
      <App />
    </ProductContex>
  </BrowserRouter>
)
