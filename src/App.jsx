import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ApplicationForm from './WebPages/ApplicationForm'
import Home from './WebPages/Home'
import AboutPage from './WebPages/AboutPage'

const App = () => {
  return (
    <div className='bg-gray-'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/academics' element={<AboutPage />} />
          <Route path='/facilities' element={<AboutPage />} />
          <Route path='/admission-2024-25' element={<ApplicationForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
