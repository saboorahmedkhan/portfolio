import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FcDownload } from 'react-icons/fc';

const Navbar = () => {
    
return (
    <div className="bg-black z-50 sticky top-0">
        
        <header className="bg-black text-white body-font outline outline-6  outline-green-600">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src = {require("../../../public/assets/pictures/logo.jpeg")} 
      width={100} 
      height={100} 
      alt = "logo"
      className = "w-[70px]"
      /> 
      <span className="ml-3 text-xl text-white">Saboor Ahmed Khan</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-green-600"> 
      Home 
      </Link>  
      <Link href={"#about"} className="mr-5 hover:text-green-600">
      About
      </Link>
      <Link href={"#skill"} className="mr-5 hover:text-green-600">
        Skills
      </Link>
      <Link href={"#projects"} className="mr-5 hover:text-green-600">    
      Projects
        </Link>
        <Link href={"#contact"} className="mr-5 hover:text-green-600">
        Contact
        </Link>
    </nav>
      <a href="/assets/cv/Saboor's Resume.pdf" target="_blank">
    <button className="inline-flex items-center bg-black border-0 py-2 px-2 outline outline-4  outline-green-600 hover:bg-green-500 rounded-md text-base mt-2 md:mt-0">
      Download CV
      <FcDownload className='text-lg ml-1 items-end'/>
    </button>
      </a>
  </div>
</header>    

</div>
 )
}

export default Navbar