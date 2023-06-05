import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div id="about" className="bg-gray-400">
            
            <section className="bg-gray-400 text-white body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  ">
      <Image
        className="object-cover object-center rounded mx-auto outline outline-6  outline-green-600"
        alt="Saboor' Pic"
        src={require("../../../public/assets/pictures/Ai.png")}   
        width={300}
        height={500}    
        />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black underline decoration-solid decoration-green-600 underline-offset-4">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed text-justify">
      Previously I have done B.S Biomedical and MBA Marketing and I have a vast experince of pharmaceuticals and medical equipment sales and marketing + export marketing but now I have decided to change my field because I am very much interested in blockchain and A.I and want to become blockchain and A.I developer.
      </p>
      <p className="mb-5 leading-relaxed text-justify">
      In the first quater of PIAIC WEB 3.0 metaverse and A.I course I learned Typescript, NodeJs, TailwindCSS, Github and Vercel and my aim is to complete this state of the art course and then become a full stack blockchain developer.
      </p>
      <div className="flex justify-center">
        <Link href="/assets/cv/Saboor's Resume.pdf" target="_blank">
        <button className="items-center outline inline-flex text-white bg-black outline-3  outline-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-lg text-lg">
        View My CV
        </button>
        </Link>
        
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
export default About 