import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { AppRouter } from './routes/AppRouter'

export default function App() {
  return (
    <div className='min h-screen flex flex-col bg-gray-100'>
      <NavBar />
      <main className='flex-1 max-w-5xl mx-auto p-4'>
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

