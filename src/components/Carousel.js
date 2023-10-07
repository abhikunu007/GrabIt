import React from 'react'
import { Link } from 'react-router-dom'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"11"}}>
    <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Search</button>
  </form>
    </div>
    <div className="carousel-item active">
      <img className="d-block w-100" style={{filter:"brightness(30%"}} src="https://source.unsplash.com/random/300×300/?pizza" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{filter:"brightness(30%"}} src="https://source.unsplash.com/random/300×300/?chicken" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{filter:"brightness(30%"}} src="https://source.unsplash.com/random/300×300/?burger" security="None" alt="Third slide"/>
    </div>
  </div>
  <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </Link>
  <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </Link>
</div>
    </div>
  )
}
