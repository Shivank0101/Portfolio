import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import {Toaster} from "react-hot-toast"  // used for toast notifications

function App()  {
  return (
     <>
      {/* Animated Grid + Blur Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute w-full h-full bg-[linear-gradient(#1d1d1d_1px,transparent_1px),linear-gradient(to_right,#1d1d1d_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Blurred Blobs */}
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob1 top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob2 bottom-10 right-20"></div>
        <div className="absolute w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob3 top-1/2 left-1/2"></div>
      </div>

      {/* Foreground Components */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>

      <Toaster />
    </>
  )
}

export default App