import React from 'react'
import { ImFacebook } from 'react-icons/im'
import { GrTwitter } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-black'>
      <footer className="text-white bg-black body-font outline outline-6  outline-green-600">
        <div className="container m-3 p-1 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={require("../../../public/assets/pictures/logo.jpeg")}
              width={100}
              height={100}
              alt="logo"
              className="w-[70px]"
            />
            <span className="ml-3 text-xl text-white">Saboor Ahmed Khan</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-500 sm:py-2 sm:mt-0 mt-4">
            © 2023 Saboor Ahmed Khan

          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={"https://www.facebook.com/saboor.khan.33?mibextid=ZbWKwL"} target="_blank" className="text-white">
              <ImFacebook className='text-4xl mx-2 px-2 ...ring-2 ring-green-600 hover:text-[green]' />
            </Link>
            <Link href={"https://twitter.com/saboorahmedkha1?t=v70D-3XQauh2Li4R0vWtCw&s=09"} target="_blank" className="text-white">
              <GrTwitter className='text-4xl mx-2 px-2  hover:text-[green]' />
            </Link>

            <Link href={"https://github.com/saboorahmedkhan"} target="_blank" className="text-white">
              <FaGithub className='text-4xl mx-2 px-2  hover:text-[green]' />
            </Link>
            <Link href={"https://www.linkedin.com/in/saboor-ahmed-khan-20759ab7"} target="_blank" className="text-white">
              <ImLinkedin2 className='text-4xl mx-2 px-2  hover:text-[green]' />
            </Link>

          </span>
        </div>
      </footer>

    </div>
  )
}

export default Footer