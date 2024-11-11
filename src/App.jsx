import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from "./components/Hero"
import Highlights from "./components/Highlights.jsx"
import Model from './components/Model';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
    </main>
  )
}

export default App
