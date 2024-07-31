import './App.css'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import BookingPage from './components/BookingPage'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/reservations" element={<BookingPage />} />
    </Routes>
    </>
  )
}

export default App
