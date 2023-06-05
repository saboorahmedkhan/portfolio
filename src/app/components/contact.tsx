import React from 'react'

const Contact = () => {
    return (
        <div className="bg-gray-400" id="contact">
            <section className="text-black body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative outline outline-3 outline-green-600">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1809.0535791516677!2d67.13077900097674!3d24.928419162326538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU1JzQyLjgiTiA2N8KwMDcnNTIuNiJF!5e0!3m2!1sen!2s!4v1685456703985!5m2!1sen!2s"
                            
                        />
                        <div className="bg-green-300 relative flex flex-wrap py-6 rounded shadow-md outline outline-3 outline-black">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-green-600 tracking-widest text-md">
                                    ADDRESS
                                </h2>
                                <p className="mt-1 text-black">
                                    Block-2 Gulistan-e-Jauhar Karachi,Pakistan
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-green-600 tracking-widest text-md">
                                    EMAIL
                                </h2>
                                <a className="text-black leading-relaxed">saboorahmedkhan@gmail.com</a>
                                <h2 className="title-font font-semibold text-green-600 tracking-widest text-md mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed text-black">0092-3410025976</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 px-5 mt-8 md:mt-0 rounded-md outline outline-3 outline-green-600">
                        <h2 className="text-black underline decoration-solid decoration-green-600 underline-offset-4 title-font sm:text-4xl text-3xl mb-4 font-medium text-center">
                            Contact
                        </h2>
                        <p className="leading-7 mb-5 text-black text-md">
                            Feel free to contact
                        </p>
                        <form action="https://formspree.io/f/mjvdqgya"
                              method="POST">
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-md text-black">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-green-300 rounded outline outline-2 outline-black text-base text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-md text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-green-300 rounded outline outline-2 outline-black text-base text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="subject" className="leading-7 text-md text-black">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full bg-green-300 rounded outline outline-2 outline-black text-base text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-md text-black">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full  bg-green-300 rounded outline outline-2 outline-black text-black h-32 text-base  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                                required/>
                        </div>
                        <button className="inline-flex text-white text-center bg-black outline outline-3  outline-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-lg text-lg">
                            Send Message
                        </button>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Contact

