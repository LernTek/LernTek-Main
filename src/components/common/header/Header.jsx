import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <header>
        <nav className='flexSB'>
          <a href='/'>
            <div className='start'>
              <img className="logoImg" src="../images/logo (1).png" />
              <div className='button'>LernTek</div>
            </div>
          </a>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/resources'>Resoucses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            {/* <li>
              <Link to='/pricing'>Pricing</Link>
            </li> */}
            <li>
              <Link to='/blog'>Blogs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
