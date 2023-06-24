import React from "react";
import { Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";


 export default function Signupo ()               {
  return (
    <div className=" grid  md:grid-cols-2 sm:grid-cols-1  ">
      <div className=" lg:w-[100%]  ">
        <img className=" xl:ms-14  xl:mt- 
                         lg:ms- lg:mt- 
                         md:ms- md:mt- md:mb- 
                         sm:ms- sm:mt- sm:mb-
                         mt-4 " src="./logo1.png" alt="my img"  />

        <main className="grid grid-col justify-items-center  ">
          <form action="" className="lg:w-7/12  font-[JejuMyeongjo]">
            <h1 className=" text-3xl font-bold text-center">Create an account </h1>
            <section className="mb-4 mt-1">
              <Input variant="standard" color="green" label="Name*" />
            </section>
            
            <section className="mb-4">
              <Input  variant="standard" color="green" label="Email*" />
            </section>
            
            <section className="mb-4">
              <Input variant="standard" color="green" label="Mobile Number*" />
            </section>
            
            <section className="mb-1">
              <Input variant="standard" color="green" label="Password*" />
            </section>
           
            <br />
            <button type="button" className="bg-[#81A356] text-white p-2 rounded-xl w-full">
              Create account 
            </button>
            <br />
            <br />
            <button type="button" className="flex items-center justify-center text-black pt-2  pb-2 rounded-xl w-full outline">
              <FcGoogle className="mr-5 text-[30px]" />
              <span>Sign up with Google</span>
            </button>
            <br />
            <button type="button" className="flex items-center justify-center text-black p-2 rounded-xl w-full outline">
              
              <img src="./skill-icons_twitter.png"alt="" className=" mr-5 text-[32px]" />
              <span>Sign up with Twitter</span>
            </button>
            <br />
            <div className="text-center">
              Already Have an Account ?
              <span className="text-blue-500">Log in</span>
            </div>
          </form>
        </main>
      </div>

      
      <div className=" lg:w-full  lg:h-screen xl:w-full xl:h-screen   md:w-full  md:h-screen ">
        <img
          src="./Cool.png"
          className="relative lg:w-full lg:h-screen xl:w-full xl:h-screen w-0 md:w-full md:h-screen   "
          alt="myimg"
        />
        
      </div>
    </div>
  );
};

