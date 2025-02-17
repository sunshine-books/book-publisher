import { Routes, Route } from 'react-router'


import './App.css'

import Navbar from './components/Navbar.jsx'
import BookPageDetails from './components/BookPageDetails.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import NewBook from './pages/NewBook.jsx'
import SearchBook from './pages/SearchBook.jsx'




function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:bookId" element={<BookPageDetails />} />
        <Route path="/newBook" element={<NewBook />} />
        <Route path="/searching" element={<SearchBook />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
