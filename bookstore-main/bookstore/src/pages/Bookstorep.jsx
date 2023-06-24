import React from 'react'
import  Navbar from '../components/Navbar'
import Bookstore from '../components/BookStore'

const Bookstorep = () => {
  return (
    <div>  
    <div><Navbar/></div>
    <div className='lg:mt-24 mt-20'><Bookstore/></div>
    </div>
  )
}

export default Bookstorep;
