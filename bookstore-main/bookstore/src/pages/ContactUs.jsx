import React from 'react'
import ContactUS from '../components/ContactUs'
import Footer from '../components/Fotter'
import  Navbar from '../components/Navbar'


const ContactUs = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div className="lg:mt-14 mt-20"><ContactUS/></div>
      <div><Footer/></div>
    </div>
  )
}

export default ContactUs
