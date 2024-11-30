import React from "react";

import Image from "next/image";

const Courses = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-10">
            <h2 className="font-roboto text-[32px] sm:text-[48px] font-bold leading-[57.6px] mb-6"> Courses </h2>

            <p className="font- text-[14px] sm:text-[18px] font-normal -[27px] mt-4 mb-12">Your Ultimate Guide to Learning</p>
            <div className='grid -cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-19 sm:gap-5 p-6 w-full max-w-screen-x9 '>
                <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[240px] p-4 gap-5 sm:gap-8 rounded-mb">
                    <div className="w-[100px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
                        <Image src='/images/course1.png'
                         alt="Courses"
                          width={300}
                           height={300}
                            className="object-contain" />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Design </h3>
                        <h4 className="font-bold text-[15px] sm:text-[17px]text-black">UX/UI Design 201</h4>
                        <p className="text-black text-[8px] sm:text-[9px] mt-2 justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[240px] p-4 gap-4 sm:gap-8 rounded-md">
                    <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
                        <Image src='/images/course2.png'
                         alt="Courses"
                          width={300}
                           height={300} 
                           className="object-contain" />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Programmimg  </h3>
                        <h4 className="font-bold text-[15px] sm:text-[16px] trxt-black">Introduction to Python </h4>
                        <p className="text-black text-[8px] sm:text-[9px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.   </p>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[240px] p-4 gap-4 sm:gap-8 rounded-md">
                    <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[200px] bg-white flex items-center justify-center rounded-md">
                        <Image src='/images/course3.png'
                         alt="Courses"
                         width={300}
                         height={300} 
                         className="object-contain" />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Business</h3>
                        <h4 className="font-bold text-[13px] sm:text-[14px] text-black">Data Analysis for Beginners </h4>
                        <p className="text-black text-[8px] sm:text-[9px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[240px] p-4 gap-4 sm:gap-8 rounded-md">
                    <div className="w-[80px] sm:w-[100px] h-[70px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
                        <Image src='/images/course4.png'
                         alt="Courses"
                          width={300} 
                          height={300}
                           className="object-contain" />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Art </h3>
                        <h4 className="font-bold text-[130x] sm:text-[14px] text-black"> Art Specialization  </h4>
                        <p className="text-black text-[8px] sm:text-[9px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.    </p>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[240px] p-4 gap-4 sm:gap-8 rounded-md">
                    <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
                        <Image src='/images/course5.png'
                         alt="Courses"
                          width={200}
                           height={200} 
                           className="object-contain" />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Law  </h3>
                        <h4 className="font-bold text-[130] sm:text-[14px] text-black">  Rule of Law  </h4>
                        <p className="text-black text-[8px] sm:text-[9px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                          
                        
                    </div>
                </div>
                <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[240px] p-4 gap-4 sm:gap-8 rounded-md">
                    <div className="w-[100px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
                        <Image src='/images/course6.png'
                         alt="Courses"
                          width={200}
                           height={200}
                            className="object-contain" />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold text-[14px] sm:text-[16px] text-black"> Tech  </h3>
                        <h4 className="font-bold text-[13px] sm:text-[14px] text-black"> Introduction to webflow     </h4>
                        <p className="text-black text-[8px] sm:text-[9px] mt-2">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.    </p>
                    </div>
                    
            
            </div>
                        
                </div>
            </div>
        
    );
};

export default Courses;