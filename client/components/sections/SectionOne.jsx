import React from 'react'
import Typed from 'react-typed'

const SectionOne = () => {
  return (
<>
<div className="flex flex-col mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="flex flex-col justify-center items-center w-auto my-24 md:my-48 mx-8 text-center ">

   {/* <div class="flex flex-col md:flex-row h-full m-12 md:m-24 md:gap-10">
    <div class="w-full md:w-1/2 h-full flex flex-col justify-center"> */}

  <h4 className="max-w-screen-lg mb-6 text-4xl md:text-4xl font-bold leading-none tracking-tight text-white ">
    <Typed strings={['Quickly and efficiently implement peer to peer video calls with RTConnect']} typeSpeed={220}  loop/>
    {/* Quickly and efficiently implement peer to peer video calls with RTConnect */}
  </h4>
  <p className="text-base text-white md:text-lg">
    
  RTConnect is an open-source NPM package that simplifies the implementation of WebRTC.
  </p>
 
</div>


<div className="mx-auto lg:max-w-2xl">
  <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
    <img
      className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
      src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
      alt=""
    />
    <a
      href="/"
      aria-label="Play Video"
      className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
    >
      <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
        <svg
          className="w-10 text-gray-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
        </svg>
      </div>
    </a>
  </div>
</div>
</div>
</>
  )
}

export default SectionOne;


