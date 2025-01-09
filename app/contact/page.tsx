import React from 'react'
import Image from 'next/image'

export default function Contact() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="lg:mb-0 mb-10">
                        <div className="group w-full h-full">
                            <div className="relative h-full">
                                <Image
                                    width={608}
                                    height={697}
                                    src="/contact.png"
                                    alt="ContactUs tailwind section"
                                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-black object-cover"
                                />
                                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                                    Contact us
                                </h1>
                                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                    <div className="bg-white rounded-lg p-6 block">
                                        <a href="javascript:;" className="flex items-center mb-6">
                                           <Image src={"/phone.svg"} width={24} height={24} alt='Phone'/>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                               +92311-1213145
                                            </h5>
                                        </a>
                                        <a href="javascript:;" className="flex items-center mb-6">
                                        <Image src={"/mail.svg"} width={24} height={24} alt='Phone'/>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                shezyblogs@gmail.com
                                            </h5>
                                        </a>
                                        <a href="javascript:;" className="flex items-center">
                                        <Image src={"/location.svg"} width={24} height={24} alt='Phone'/>
                                            <h5 className="text-black text-base font-normal leading-6 ml-5">
                                               Lorem ipsum dolor sit amet consectetur adipisicing.
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                        <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-11">
                            Send Us A Message
                        </h2>
                        <input
                            type="text"
                            className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                            placeholder="Phone"
                        />
                        <div className="mb-10">
                            <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                                Preferred method of communication
                            </h4>
                            <div className="flex">
                                <div className="flex items-center mr-11">
                                    <input
                                        id="radio-group-1"
                                        type="radio"
                                        name="radio-group"
                                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                                    />
                                    <label
                                        htmlFor="radio-group-1"
                                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                                    >
                                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                                        Email
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="radio-group-2"
                                        type="radio"
                                        name="radio-group"
                                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                                    />
                                    <label
                                        htmlFor="radio-group-2"
                                        className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                                    >
                                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                                        Phone
                                    </label>
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                            placeholder="Message"
                        />
                        <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-black shadow-sm">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
