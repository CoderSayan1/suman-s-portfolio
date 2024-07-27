import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Works from './components/Works'
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <div>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
      />
      <Navbar />
      <About />
      <Info />
      <Education />
      <Works />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
