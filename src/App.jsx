import './App.css'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
    </>
  )
}

export default App
