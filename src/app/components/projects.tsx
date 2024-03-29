import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
    <div id="projects">
        <section className="text-black bg-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black underline decoration-solid decoration-green-600 underline-offset-4">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-8 -mt-[5rem]">
        {/* Projects 1 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/my-portfolio.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-green-600 bg-green-300 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              My Portfolio
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Saboor Ahmed Khan Portfolio Website
            </h1>
            <p className="leading-relaxed line-clamp-2">
              I build this website using typescript, NextJs and tailwind CSS and I also used 
              Generative A.I portfolio image for my profile.
            </p>    
            <Link target={"_blank"} href={"https://personal-portfolio-website-snowy.vercel.app/"}>
            <p className="text-blue-500 leading-relaxed hover:underline">
              View Project..
            </p>
            </Link>
            </div>
        </div>
      </div>
      
           
      {/* Projects 2 */}
      
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/my-portfolio.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-green-600 bg-green-300 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              My Portfolio
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Saboor Ahmed Khan Portfolio Website
            </h1>
            <p className="leading-relaxed line-clamp-2">
              I build this website using typescript, NextJs and tailwind CSS and I also used 
              Generative A.I portfolio image for my profile.
            </p>    
            <Link target={"_blank"} href={"https://personal-portfolio-website-snowy.vercel.app/"}>
            <p className="text-blue-500 leading-relaxed hover:underline">
              View Project..
            </p>
            </Link>
            </div>
        </div>
      </div>

    {/* Project 3 */}
                
    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/my-portfolio.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-green-600 bg-green-300 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              My Portfolio
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Saboor Ahmed Khan Portfolio Website
            </h1>
            <p className="leading-relaxed line-clamp-2">
              I build this website using typescript, NextJs and tailwind CSS and I also used 
              Generative A.I portfolio image for my profile.
            </p>    
            <Link target={"_blank"} href={"https://personal-portfolio-website-snowy.vercel.app/"}>
            <p className="text-blue-500 leading-relaxed hover:underline">
              View Project..
            </p>
            </Link>
            </div>
        </div>
      </div>
      </div>
  </div>
</section>

    </div>
    )
}

export default Projects