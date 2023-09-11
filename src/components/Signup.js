import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Signup.css";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({name:user.name, email:user.email, password:user.password,location:user.location}),
    });

    const json = await res.json()
    console.log(json);

    if(!json.success)
    {
        alert("Enter valid Credentials");
    }
    // setUser({
    //     name: "",
    // email: "",
    // password: "",
    // location: "",
    // })
    navigate("/login");

  };

  const onChange=(e)=> {
    setUser({...user,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-white" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-user fa-lg me-3 mt-4 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                             Enter Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={user.name}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-envelope fa-lg me-3 mt-4 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              value={user.email}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fa fa-lock fa-lg me-3 mt-4 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              value={user.password}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-map-marker fa-lg me-3 mt-4 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Location
                            </label>
                            <input
                              type="text"
                              id="form3Example4cd"
                              className="form-control"
                              name="location"
                              value={user.location}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {/* <div className="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4"> */}
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg me-3 auth"
                          >
                            Sign Up
                          </button>
                          {/* </div> */}
                          {/* <Link className="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4"> */}
                          <Link
                            to="/login"
                            className="btn btn-primary btn-lg auth"
                          >
                            Login
                          </Link>
                          {/* </Link> */}
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-10 col-xl-7 d-flex align-items-center order-1 order-lg-2 p-md-5">
                      <img
                        src="https://w0.peakpx.com/wallpaper/563/793/HD-wallpaper-grab-me-now-driveronline-gocar-gojek-grabbike-grabcar-ojekonline-ojol-thumbnail.jpg"
                        className="img-fluid"
                        alt="wallpaper"
                        style={{ width: "500px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
