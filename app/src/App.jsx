import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import Register from './components/Register'
import { HomePage } from './pages/HomePage'

export default function App() {
  const path = window.location.pathname;
  return (
    <div className='min h-screen flex flex-col bg-gray-100'>
      <NavBar />
      <main className='flex-1 max-w-5xl mx-auto p-4'>
        {
          path === "/register" 
            ? <Register /> 
            : <HomePage />
        }
      </main>
      <Footer />
    </div>
  )
}

