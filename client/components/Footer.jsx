import React from 'react'

const Footer = () => {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} className="hidden md:flex justify-around text-sm px-16">
    <div style={{display: 'flex', flexDirection: 'column'}} className="flex flex-col space-y-3 text-gray-600">
      <a href="/docs/installation" className="text-gray-700 font-semibold">Getting Started</a>
      <a href="/docs/installation">Installation</a>
      <a href="/docs/basic-usage">Basic Usage</a>
      <a href="/docs/core-concepts">Core Concepts</a>
    </div>

    <div style={{display: 'flex', flexDirection: 'column'}} className="flex flex-col space-y-3 text-gray-600">
      <a href="/docs/custom-nodes" className="text-gray-700 font-semibold">Guides</a>
      <a href="/docs/typescript">Usage with TypeScript</a>
      <a href="/docs/testing">Testing</a>
    </div>

    <div style={{display: 'flex', flexDirection: 'column'}} className="flex flex-col space-y-3 text-gray-600">
      <p className="text-gray-700 font-semibold">Community</p>
      <a
        target="_blank"
        href=""
        >Medium.com Article (Link to our Medium.com Article)</a
      >
      <a target="_blank" href='https://github.com/oslabs-beta/RTConnect'>GitHub</a>
      <a target="_blank" href=''>LinkedIn</a>
      <a target="_blank" href='https://twitter.com/Rtconnect_'>Twitter</a>
    </div>
  </div>
  <div className="flex flex-col items-center mt-10 text-gray-500">
    <div className="text-xs">
      &copy; 2022 RTConnect | <a
        target="_blank"
        href="">MIT License</a
      >
    </div>
    <div className="text-xs">
      Website designed by <a
        target="_blank"
        className="text-rose-400">Yoojin Chang and F. Raisa Iftekher</a
      >
    </div>
  </div>
</>
  )
}

export default Footer