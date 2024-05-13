import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import History from './components/History/History.jsx'
import Games from './components/Games/Games.jsx'
import Staff from './components/Staff/Staff.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  const [pageDisplayed, setPageDisplay] = useState('home')
  
  const handlePageChange = (newPage) => {
    setPageDisplay(newPage)
  }

  return (
    <>
      <NavBar handler={handlePageChange} />
      {pageDisplayed === 'home' ? <Home /> : null}
      {pageDisplayed === 'history' ? <History /> : null}
      {pageDisplayed === 'games' ? <Games /> : null}
      {pageDisplayed === 'staff' ? <Staff /> : null}
      {pageDisplayed === 'contact-us' ? <ContactUs /> : null}
      <Footer handler={handlePageChange} />
    </>
  )
}

export default App
