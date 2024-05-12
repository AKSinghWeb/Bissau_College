import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ApplicationForm from './WebPages/ApplicationForm'
import Home from './WebPages/Home'
import AboutPage from './WebPages/AboutPage'
import { SnackbarProvider } from 'notistack'

const App = () => {
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
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<AboutPage />} />
            <Route path="/facilities" element={<AboutPage />} />
            <Route path="/admission-2024-25" element={<ApplicationForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
