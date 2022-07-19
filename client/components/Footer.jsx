import React from 'react'

const Footer = () => {
  return (
    <>
       {/* <div className="w-screen h-[70px] z-10 bg-black fixed drop-shadow-lg p-3">  */}
        {/* <div class="relative flex items-center justify-between px-5" > */}
        <div className="bg-black py-10">
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} className="hidden md:flex justify-around text-sm px-16">
    <div style={{display: 'flex', flexDirection: 'column'}} className="flex flex-col space-y-3 text-white">
      <a href="/docs/installation" className="text-white font-semibold">Installation</a>


    </div>

    <div style={{display: 'flex', flexDirection: 'column'}} className="flex flex-col space-y-3 text-white">
      <a href="/docs/custom-nodes" className="text-white font-semibold">Contact Us</a>

    </div>

    <div style={{display: 'flex', flexDirection: 'column'}} className="flex flex-col space-y-3 text-white">
      {/* <p className="text-white font-semibold">Community</p> */}
      <a
        target="_blank"
        href=""
        >Blog</a
      >
      <a target="_blank" href='https://github.com/oslabs-beta/RTConnect'>GitHub</a>
      <a target="_blank" href=''>LinkedIn</a>
      <a target="_blank" href='https://twitter.com/Rtconnect_'>Twitter</a>
    </div>
  </div>
  <div className="flex flex-col items-center mt-10 text-white-500">
    <div className="text-xs">
      &copy; 2022 RTConnect | <a
        target="_blank"
        href="">MIT License</a
      >
    </div>

  </div> 
  </div>
  {/* </div> */}
</>
  )
}

export default Footer