import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">GrabIt</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav"> 
        <Link className="nav-link " aria-current="page" to="/">Home</Link>
       <div className="navauth">
       <Link className="nav-link auth " to="/login">Login</Link>
        <Link className="nav-link auth" to="/signup">Sign up</Link>
       </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
