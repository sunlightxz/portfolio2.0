import React from 'react'

function Projects() {
  return (
    <section className="section-padding-x relative z-40 min-h-screen py-[150px] w-full overflow-x-clip flex flex-col items-start bg-black text-white pr-2">

       <div className="">
            <div className="flex flex-col justify-center items-center mb-10">
                <h1 className='text-[76px] font-cairo font-semibold mb-4 text-[#D1D1C7]'>FEATURED WORK</h1>
                <p className='flex flex-col items-center justify-center text-xl font-light text-gray-400 '>
                    <span>Trailblazing the Future: Our Latest Projects</span>
                    <span>Showcase Innovation and Excellence in Action.</span>
                </p>
            </div>

            <div className="mx-auto mt-20  w-fit font-cairo">
                <div className="border-t border-gray-500  cursor-pointer">
                    <div className="flex justify-between px-1 py-3 w-full items-center">
                        <span className='font-light text-lg flex gap-3 grouptext cursor-pointer'>
                            <img src="arrow.svg" alt="" width="20" height="20" />
                            <p className='uppercase'>Gravity park</p></span>
                        <span className='font-light'>2024</span>
                    </div>
                    <div className="rounded-2xl w-full relative overflow-hidden h-[200px] xs:h-[400px] md:h-[500px]">
                        <div className='absolute top-0 left-0 pt-4 ml-3 flex justify-center items-center cursor-pointer'>
                            <span className='bg-red-600 py-1 px-3 rounded-full text-xs uppercase hover:bg-red-400'>new</span>
                        </div>
                        <div className=''>
                            <img src="TM_gravity_park.jpg" className='object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out' alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-10">
                    <div className="border-t border-gray-500  cursor-pointer">
                        <div className="flex justify-between px-1 py-3 w-full items-center">
                            <span className='font-light text-lg flex gap-3 grouptext cursor-pointer'>
                                <img src="arrow.svg" alt="" width="20" height="20" />
                                <p className='uppercase'>Gravity park</p></span>
                            <span className='font-light'>2024</span>
                        </div>
                        <div className="rounded-2xl w-full relative overflow-hidden">
                            <div className='absolute top-0 left-0 pt-4 ml-3 flex justify-center items-center cursor-pointer'>
                                <span className='bg-red-600 py-1 px-3 rounded-full text-xs uppercase hover:bg-red-400'>new</span>
                            </div>
                            <div className=''>
                            <img src="TM_gravity_park.jpg" className='object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out w-full h-ful' alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-500  cursor-pointer">
                        <div className="flex justify-between px-1 py-3 w-full items-center">
                            <span className='font-light text-lg flex gap-3 grouptext cursor-pointer'>
                                <img src="arrow.svg" alt="" width="20" height="20" />
                                <p className='uppercase'>Gravity park</p></span>
                            <span className='font-light'>2024</span>
                        </div>
                        <div className="rounded-2xl w-full relative overflow-hidden">
                            <div className='absolute top-0 left-0 pt-4 ml-3 flex justify-center items-center cursor-pointer'>
                                <span className='bg-red-600 py-1 px-3 rounded-full text-xs uppercase hover:bg-red-400'>new</span>
                            </div>
                            <div className=''>
                            <img src="TM_gravity_park.jpg" className='object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out w-full h-ful' alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="border-t border-gray-500  cursor-pointer">
                        <div className="flex justify-between px-1 py-3 w-full items-center">
                            <span className='font-light text-lg flex gap-3 grouptext cursor-pointer'>
                                <img src="arrow.svg" alt="" width="20" height="20" />
                                <p className='uppercase'>Gravity park</p></span>
                            <span className='font-light'>2024</span>
                        </div>
                        <div className="rounded-2xl w-full relative overflow-hidden">
                            <div className='absolute top-0 left-0 pt-4 ml-3 flex justify-center items-center cursor-pointer'>
                                <span className='bg-red-600 py-1 px-3 rounded-full text-xs uppercase hover:bg-red-400'>new</span>
                            </div>
                            <div className=''>
                            <img src="TM_gravity_park.jpg" className='object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out w-full h-ful' alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="border-t border-gray-500  cursor-pointer">
                        <div className="flex justify-between px-1 py-3 w-full items-center">
                            <span className='font-light text-lg flex gap-3 grouptext cursor-pointer'>
                                <img src="arrow.svg" alt="" width="20" height="20" />
                                <p className='uppercase'>Gravity park</p></span>
                            <span className='font-light'>2024</span>
                        </div>
                        <div className="rounded-2xl w-full relative overflow-hidden">
                            <div className='absolute top-0 left-0 pt-4 ml-3 flex justify-center items-center cursor-pointer'>
                                <span className='bg-red-600 py-1 px-3 rounded-full text-xs uppercase hover:bg-red-400'>new</span>
                            </div>
                            <div className=''>
                                <img src="TM_gravity_park.jpg" className='object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out w-full h-ful' alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div> 
    </section>
  )
}

export default Projects