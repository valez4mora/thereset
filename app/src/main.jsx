import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { HomePage } from './pages/HomePage'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
