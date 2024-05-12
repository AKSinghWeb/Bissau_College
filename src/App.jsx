import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ApplicationForm from './WebPages/ApplicationForm'
import Home from './WebPages/Home'
import AboutPage from './WebPages/AboutPage'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AcademicsPage from './WebPages/AcademicsPage'
import { SnackbarProvider } from 'notistack'

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="bg-gray-">
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/academics' element={<AcademicsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/admission-2024-25' element={<ApplicationForm />} />
        </Routes>
          <Footer />
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
