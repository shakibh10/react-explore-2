import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './post'
import Posts from './post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h3>Exploring React Core Concept</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Even Handler</li>
        <li>State</li>
        <li>Load data /UseEffect</li>
      </ol>
      <hr />

      <Posts></Posts>
      <Post></Post>
      
    </>
  )
}

export default App
