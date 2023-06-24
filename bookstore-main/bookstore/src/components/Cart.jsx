import React from 'react'
import Count from './Counter';
import { BsCheckLg } from "react-icons/bs";
import {BsCurrencyRupee } from "react-icons/bs";
function Cart() {

    function handalremove (){
      document.getElementById('box').hidden=true;
    }
    function handalremoves (){
      document.getElementById('boxx').hidden=true ;
    }
    function handalremovess (){
      document.getElementById('boxxx').hidden=true;
    }

  return (
    <div className=''>
        <nav className="navbar" style={{backgroundColor:'#81A356'}} >
            <div className="container">
                <span className="navbar-brand" >
                  <img src="./bkhome.jpg" alt="home" width="62" height="60" className='img-fluid' />
                </span>
                <form className='d-flex'>
                <button type="button" className="btn-close btn-close-white " ></button>
                </form>
            </div>
            </nav>

          <div className="container mt-5">
            <div className="row shadow p-3 bg-white rounded border">
                <div className="col-md-8 col-sm-12 ">
                  <p className=' mx-5 text-start '> Login <BsCheckLg/> <br />  +919402020210 </p>            
                </div>
                <div className="col-md-4 col-sm-12 justify-content-center d-flex ">
                  <button type="button" className="btn btn-outline-secondary rounded px-5 mt-4 "> Change </button>           
               </div>     
           </div>

           <div className="row shadow p-4 bg-white rounded border mt-5">
                <div className="col-md-8 col-sm-12 ">
                  <p className='d-flex mx-5 text-start text-sm-center'> Delivery Address </p>            
                </div>
                <div className="col-md-4 col-sm-12 justify-content-center d-flex ">
                  <button type="button" className="btn btn-outline-secondary rounded px-5 mt-1 "> +Add </button>           
               </div>     
           </div>

            <div className="row shadow bg-white rounded border mt-5">
               <div className="col-12 "style={{backgroundColor:'#81A356'}}>
                 <p className='d-flex mx-5 my-auto p-2 text-start 'style={{Color:'#000000'}}> Order Summary </p>         
               </div>
                    
           </div>
           <div className="row shadow bg-white rounded border mt-1" id='box'>
               <div className="col-md-3 col-sm-12 ">
                 <p className='d-flex my-auto p-2 justify-content-center'> 
                    <img src="./IMG1.jpg" alt="home" width="109" height="125" className='img-fluid' />
                 </p>         
               </div>
               <div className="col-md-6 col-sm-12 text-start">
                 <span> 
                    Ikigai: The Japanese secret to a long and happy life [Hardcover] García, Héctor and Miralles, Francesc  
                 </span>   <br /><br />
                 <p><span><small><s>424</s></small></span> &nbsp; <b><BsCurrencyRupee/>212</b>&nbsp; 50% &nbsp; OFF</p>      
               </div> 
               <div className="col-md-2 col-sm-12 justify-content-end  ">
                <Count/>
                  <button type="button" className="btn btn-outline-secondary rounded  mt-3 " onClick={handalremove}> Remove </button>           
               </div> 
                    
           </div>
            
           <div className="row shadow bg-white rounded border" id='boxx'>
               <div className="col-md-3 col-sm-12">
                 <p className='d-flex my-auto p-2 justify-content-center '> 
                    <img src="./IMG2.jpg" alt="home" width="109" height="125" className='img-fluid' />
                 </p>         
               </div>
               <div className="col-md-6 col-sm-12 text-start">
                 <span> 
                 SSC General studies Theory Book Based on Latest TCS Pattern Chapter wise English Medium
                 </span>   <br /><br />
                 <p><span><small><s>400</s></small></span> &nbsp; <b><BsCurrencyRupee/>200</b>&nbsp; 50% &nbsp; OFF</p>      
               </div> 
               <div className="col-md-2 col-sm-12 justify-content-end ">
               <Count/>
                  <button type="button" className="btn btn-outline-secondary rounded  mt-3 mb-2"onClick={handalremoves}> Remove </button>           
               </div> 
                    
           </div>

           <div className="row shadow bg-white rounded border " id='boxxx'>
               <div className="col-md-3 col-sm-12">
                 <p className='d-flex my-auto p-2 justify-content-center '> 
                    <img src="./IMG3.jpg" alt="home" width="109" height="125" className='img-fluid' />
                 </p>         
               </div>
               <div className="col-md-6 col-sm-12 text-start">
                 <span> 
                 Word Power root Words
                 </span>   <br /><br />
                 <p><span><small><s>450</s></small></span> &nbsp; <b><BsCurrencyRupee/>225</b>&nbsp; 50% &nbsp; OFF</p>      
               </div> 
               <div className="col-md-2 col-sm-12 justify-content-end  ">
               <Count/>
                      
                  <button type="button" className="btn btn-outline-secondary rounded  mt-3 mb-2 " onClick={handalremovess}> Remove </button>           
               </div> 
                    
           </div>

           <div className="row bg-white rounded mt-4 mb-4 ">
           <div className="col-sm-12 d-grid gap-2 d-sm-flex justify-content-sm-end ">
                  <button type="button" className="btn rounded px-5" style={{backgroundColor:'#81A356'}}> Continue </button>           
               </div> 
                    
           </div>





        </div>
         
 </div>
  )
}

export default Cart