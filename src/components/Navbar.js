import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import { Badge } from 'react-bootstrap';
import { useCart } from './ContextReducer';

export default function Navbar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  let data = useCart();



  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid mb-1 mt-1">
    <Link className="navbar-brand" to="/">GrabIt</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav me-auto"> 
        <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </div>

       {(!localStorage.getItem("authToken")) ?
          <div className="d-flex">
          <Link className="btn authnav text-center" to="/login">Login</Link>
          <Link className="btn authnav text-center" to="/signup">Sign Up</Link>
          </div>
          :
          <div className='d-flex'>
            <div className='me-3'><img alt='' src={require('../carts.png')} style={{"maxHeight": "40px"}} />
            
            {/* <Badge pill bg='success'>{ data.length}</Badge> */}
            {data.length > 1 && (
              <Badge pill bg='success'>{data.length}</Badge>
            )}
            </div>
            <div className='btn authnav' onClick={handleLogout}>Logout</div>
          </div>
        }
     
    </div>
  </div>
</nav>
    </div>
  )
}
