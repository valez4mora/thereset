import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'

export default function App() {
  return (
    <div className='min h-screen flex flex-col bg-white'>
      <NavBar />
      <main className='flex-1 max-w-5xl mx-auto p-4'>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

