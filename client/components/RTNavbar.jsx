import React, { useState } from "react";
// import { AppBar, ToolBar } from '@mui/material';
import Logo from "../assets/logo.png";

const RTNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* <div class="px-1 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-5">  */}
      <div className="w-screen h-[95px] z-10 bg-black fixed drop-shadow-lg"> 
        <div class="relative flex items-center justify-between px-8" >
          <img
            width="200px"
            height="50px"
            src={Logo}
            alt="logo"
          />

          <ul class="flex items-center hidden space-x-12 lg:flex">

            <li>
              <a
                href="/"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Our Team
              </a>
            </li>
            <li>
              {/* <a
                href="/"

                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-gray-900"
              >
                Download
              </a> */}
               <button className='bg-blue-600 rounded-md font-medium my-6 mx-auto p-3'>Download</button>
            </li>
          </ul>
          <div class="lg:hidden">

            </div> 
           </div>
        </div>
      {/* </div>  */}
    </>
  );
};

export default RTNavbar;
