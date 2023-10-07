import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div>

      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className=" my-5">

        <footer className="bg-dark text-center text-white">
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">
             

              {/* <!-- Google --> */}
              <Link className="btn btn-outline-light btn-floating m-1" to="mailto: abhishekkumaras007@gmail.com" target="_blank" role="button"
              ><i className="fa fa-google"></i
              ></Link>

              {/* <!-- Instagram --> */}
              <Link className="btn btn-outline-light btn-floating m-1" to="https://www.instagram.com/srivastava_abhi_007/" target="_blank" role="button"
              ><i className="fa fa-instagram"></i
              ></Link>

              {/* <!-- Linkedin --> */}
              <Link className="btn btn-outline-light btn-floating m-1" to="https://www.linkedin.com/in/abhishekkumar007/" target="_blank" role="button"
              ><i className="fa fa-linkedin"></i
              ></Link>

              {/* <!-- Github --> */}
              <Link className="btn btn-outline-light btn-floating m-1" to="https://github.com/abhikunu007" target="_blank" role="button"
              ><i className="fa fa-github"></i
              ></Link>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
            © 2023 Copyright:
            <Link className="text-white" to="https://github.com/abhikunu007/" target="_blank">GrabIt.com</Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>

      </div>
      {/* <!-- End of .container --> */}
    </div>
  )
}
