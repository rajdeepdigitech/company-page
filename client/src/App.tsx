import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <h1> RAJDEEP DIGITECH </h1>
      <nav className="navbar">
        <div className="logo">MyWebsite</div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <p> A web development company </p>
      {/* <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#documentation-icon"></use>
      </svg> */}
      <br/>
      <p>We specialise in web development, craft, design and brainstorm your ideas with us, for your business small or large!</p>

      
    </>
  )
}

export default App
