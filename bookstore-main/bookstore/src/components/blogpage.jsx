import React from 'react'


const BlogPage = () => {
  return (

<>
    
    <div className='lg:p-[70px] lg:mt-5 mt-6 mx-7 '>
        <img src="./blogimage/mainimg.png" className='w-full' alt="" />
      <div className="   flex items-center justify-center">
  <div  style={{"background": "rgba(241, 224, 169, 0.9)"  }} className="absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[558px]  lg:h-72  h-30 p-2 lg:px-16 lg:mt-20 -mt-[20px]  " >
    <h1 className="lg:text-5xl   font-bold font-Inter text-[20px] text-center   lg:mt-5 ">
      Join Books Share
    </h1>
    
    <p className="text-white text-center lg:font-bold lg:text-xl lg:mt-2 text-xs">
      Your monthly gift will share the power of books   with millions around
      the world.
    </p>
    <button className="bg-red-600 lg:h-11 h-5 w-16 relative lg:w-40  mx-14  lg:mx-32  lg:mt-5 lg:rounded font-bold lg:text-lg  text-xs text-white">
      Join Us
      <img src="./blogimage/icon.png" alt="" className='absolute -bottom-1 -right-1 lg:bottom-1 lg:right-2 lg:w-7 w-5'  />
    </button>
     
    
  </div>
</div>


    
      <p className='lg:text-3xl text-center  font-bold font-Inter mt-5 p-2 lg:mt-5'>The difference your support makes</p> 
   <p className='lg:text-2xl'>Millions of people live in a world without books. We believe that everyone, no matter their circumstances, should be able to 
    access the books that can change and enrich their lives.</p><br />
<h1 className='lg:text-4xl font-bold font-Inter'>Latest News </h1>
<br /><br />
<div className='" lg:grid gap-6 grid-cols-5  mx-9 		'>
  
  <div>
    <img src="./blogimage/news1.png" alt="" />
   <p className='text-lg'> Foundation provides partial or full assistance to poor students <span className='text-red-600 font-bold'>Read more...</span></p>
  </div>
  <div> 
  <img src="./blogimage/news2.png" alt="" />
  <p  className='text-lg '>The project is to improve the educational status of poor and un-educated <span className='text-red-600 font-bold'>Read more...</span></p>
  </div>
  <div> 
  <img src="./blogimage/news3.png" alt="" />
  <p  className='text-lg'>Education is central to all and especially to women in the fight against <span className='text-red-600 font-bold'>Read more...</span></p>
  </div>
  <div>
  <img src="./blogimage/news4.png"alt="" />
  <p  className='text-lg'>Education is central to all and especially to women in the fight <span className='text-red-600 font-bold'>Read more...</span></p>
  </div>
  <div>
  <img src="./blogimage/news5.png" alt="" />  
  <p  className='text-lg'>Education is central to all and especially to women in the fight <span className='text-red-600 font-bold'>Read more...</span></p>
  </div>
  {/* </div> */}
</div>
</div>


    
    </>
  )
}

export default BlogPage;
