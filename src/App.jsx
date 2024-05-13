import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import './App.css'

function App() {
  const [pageDisplayed, setPageDisplay] = useState('home')
  
  const handlePageChange = (newPage) => {
    console.log(`${newPage} clicked`)
    setPageDisplay(newPage)
  }

  return (
    <>
      <NavBar handler={handlePageChange} />
      {pageDisplayed === 'home' ? <Home /> : (
        <h1>New Page</h1>
      )}
      <Footer handler={handlePageChange} />
    </>
  )
}

export default App
