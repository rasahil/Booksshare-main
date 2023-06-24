import React from 'react'
import BlogPage from '../components/blogpage'
import Footer from '../components/Fotter'
import  Navbar from '../components/Navbar'


const Blog = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div className="mt-20 lg:mt-24"><BlogPage/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Blog
