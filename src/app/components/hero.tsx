"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div>
            <section className="text-white body-font bg-gray-400">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am 
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Front End Developer', 
    'UI/UX Designer',
    'Marketer'

    ],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed text-justify">
      My goal is to create beautiful and functional websites that exceed your expectations. With a deep understanding of the latest technologies and trends, I can help you achieve your goals and stand out from the competition. Lets collaborate on your next project - contact me today to get started.
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="outline inline-flex text-white bg-black outline-3  outline-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-lg text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem] outline outline-6  outline-green-600"
        alt="Saboor's picture"
        src={require("../../../public/assets/pictures/Saboor's A.I pic.jpeg")}
        width={200}
        height={250}
      />
    </div>
  </div>
</section>

        </div>
    )
}

export default Hero