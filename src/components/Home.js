import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Home.css";
import Card from "./Card";
import { Link } from 'react-router-dom'

export default function Home() {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async () => {
    let res = await fetch("http://localhost:5000/api/allitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    // console.log(res[0], res[1]);
    setFoodItem(res[0]);
    setFoodCategory(res[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important"}}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "11", maxHeight: "450px" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
                {/* <button
                  className="btn btn-outline-success my-2 my-sm-0 text-white"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                style={{ filter: "brightness(30%", maxHeight: "450px" }}
                src="https://source.unsplash.com/random/300×300/?pizza"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                style={{ filter: "brightness(30%", maxHeight: "450px" }}
                src="https://source.unsplash.com/random/300×300/?pasta"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                style={{ filter: "brightness(30%" , maxHeight: "450px"}}
                src="https://source.unsplash.com/random/300×300/?burger"
                security="None"
                alt="Third slide"
              />
            </div>
          </div>
          {/* <Link
            className="carousel-control-prev"
            to="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            className="carousel-control-next"
            to="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </Link> */}
        </div>
      </div>

      <div className="container ">
        {foodCategory != []
          ? foodCategory.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data.id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem != [] ? (
                    foodItem
                      .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              // foodName={filterItems.name}
                              foodItem={filterItems}
                              options={filterItems.options[0]}
                              // img={filterItems.img}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such element found</div>
                  )}
                </div>
              );
            })
          : ""}
        {/* <Card></Card> */}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
