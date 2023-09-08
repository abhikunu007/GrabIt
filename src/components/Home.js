import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Home.css'
import Card from './Card'
import Carousel from './Carousel'

export default function Home() {
  return (
    <div>
        <div><Navbar></Navbar></div>
        <div><Carousel></Carousel></div>
        <div className='m-3'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div><Footer></Footer></div>
    </div>
  )
}
