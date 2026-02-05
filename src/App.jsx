import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-16">
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  )
}

export default App
