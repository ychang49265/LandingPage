import React from 'react'

const SectionTwo = () => {
  return (
    <>
    
        {/* <div className="bg-black flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"> */}
        <div
  class="h-[700px] md:h-[600px] w-screen bg-black text-white shadow-xl">
{/* >  <div class="flex flex-col md:flex-row h-full m-12 md:m-24 md:gap-10"> */}
    // <div class="w-full md:w-1/2 h-full flex flex-col justify-center">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            <a
              href="/"
              aria-label="View"
              className="inline-block mb-5 rounded-full sm:mx-auto"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              RTConnect abstracts away and simplifies WebRTC for developers
            </h2>
            <p className="text-base text-white md:text-lg sm:px-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
            <hr className="w-full my-8 border-gray-300" />
          </div>


          
        </div>
        // </div>
        </>
      );
      
}

export default SectionTwo