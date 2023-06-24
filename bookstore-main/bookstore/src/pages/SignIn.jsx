import React from "react";
import { Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
// import { FaTwitter } from "react-icons/fa";



 export default function Signadi ()               {

  const validate = (values, props /* only available when using withFormik */) => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    //...
  
    return errors;
  };
  return (
    <>
   <div className=" grid  md:grid-cols-2 sm:grid-cols-1 ">
      <div className=" lg:w-[100%] ">
      {/* <div class="flex justify-center items-center"> */}
        <img className="xl:ms-14 xl 
                         lg:ms- lg:mt- lg:
                         md: md:mt- md:mb- 
                         sm: sm: sm:mb-
                         mt-4
                         " src="./logo1.png" alt="my img" />
        {/* </div> */}
        <main className="grid grid-col justify-items-center ">
          <form action="" className="lg:w-7/12  font-[JejuMyeongjo]">
            <h1 className="pb-5 text-3xl font-bold text-center">Welcome Back !</h1>
            <section>
              <Input variant="standard" color="green" label="Email*" id='emailc' type="email" />
            </section>
            <br />
            <section>
              <Input variant="standard" color="green" label="Password*" id='passc' type="password" />
            </section>
            <section className=" flex justify-between py-3  ">
              <div className="md:text-[16px] sm:text-[10px] ">
                <input type="checkbox" />
                Remember me
              </div>
              <div>Forget Password ?</div>
            </section>
            <br />
            <br />
            <button type="button" className="bg-[#81A356] text-white p-2 rounded-xl w-full">
              Login
            </button>
            <br />
            <br />
            <button type="button" className="flex items-center justify-center text-black p-2 rounded-xl w-full outline">
              <FcGoogle className="mr-5 text-[30px]"  />
              <span>Sign in with Google</span>
            </button>
            <br />
            <button type="button" className="flex items-center justify-center text-black p-2 rounded-xl w-full outline">
              {/* <FaTwitter className="mr-5" /> */}
              <img src="./skill-icons_twitter.png" alt="rfhydf" className=" mr-5 text-[32px]" />
                   <span>Sign in with Google</span>
            </button>
            <br />
            <div className="text-center">
              Don't Have an Account ?
              <span className="text-blue-500">Sign Up</span>
            </div>
          </form>
        </main>
      </div>
           
      <div className=" lg:w-full  lg:h-screen xl:w-full xl:h-screen   md:w-full  md:h-screen ">
        <img
          src="./signinimg.png"
          className="relative lg:w-full lg:h-screen xl:w-full xl:h-screen  w-0 md:w-full md:h-screen  "
          alt="myimg"
        />
        {/* <h1 className="absolute text-white top-[500px] right-10 md:text-1xl lg:text-2xl xl:text-2xl xl:top-[280px]">
          Remove the darkness by giving <br /> the light of knowledge
        </h1> */}
      </div>
    </div>

    

   </>
  );
};

