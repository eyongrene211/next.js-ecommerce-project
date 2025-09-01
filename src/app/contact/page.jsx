'use client';
import FooterComponent                                             from "@/components/Footer/FooterComponent";
import NavbarComponent                                             from "@/components/Navbar/NavbarComponent";
import HeroComponent                                               from "@/components/Hero/HeroComponent";
import Image                                                       from "next/image";
import { toast, ToastContainer }                                   from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef }                                           from 'react';
import emailjs                                                     from '@emailjs/browser';
import { Button }                                                  from "@/components/ui/button"

const page = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ebsdkyd', 'template_jf2dshw', form.current, {
        publicKey: 'G2aSLdDp14Ug54B6E',
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
            form.current.reset(); 
        },
        (error) => {
         toast.error(" Failed to send:" + error.text);
        },
      );
  };
    return(
        <>
            <NavbarComponent/>
        {/* <HeroComponent  shouShowButton bgImage="contact-bg" title ="Contact Page" description="this is my contact page" />
        <div className="h-screen bg-white">
            <h1> Contact Page</h1>
                <h1> You can contact us here!</h1>
                
                
        </div> */}
                        <ToastContainer/>
            <div className=" h-screen  grid grid-cols-1 md:grid-cols-2   ">

                {/* left side with image*/}
                <div className="hidden md:block relative ">
                    <Image src={'/hero/contact.jpg'} width={500} height={300} alt="image-here" className=" absolute top-0 w-full h-full object-cover" />
                    <div className="absolute bg-gradient-to-tl from-black/60 to-transparent  text-white flex items-center justify-center w-full h-full ">
                        <h1 className="font-extrabold text-5xl  transform-none  max-w-xs mx-auto">Let's Make Something Memorable</h1>
                    </div>
                    
                </div>
                {/* right side with form */}
                <div className="flex justify-center  items-center gap-5  px-6">
                    
                    <form onSubmit={sendEmail} ref={form} action="" className="w-full max-w-md space-y-7">

                        <div className=" relative  "><input
                            type="text"
                            id="Your name"
                            placeholder=" " required
                            
                            className="w-full border peer border-gray-700 px-4 pt-5 pb-2 placeholder-transparent focus:border-blue-500 focus:ring-2 outline-none " name="user_name" />
                            <label className="absolute left-4 top-2.5 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500  focus:border-blue-500 focus:ring-blue"> Your Name</label>
                        </div>

                        <div className=" relative  "><input
                            type="text"
                            id="Your Email"
                            placeholder=" " required
                            className="w-full border peer border-gray-700 px-4 pt-5 pb-2 placeholder-transparent focus:border-blue-500 focus:ring-2 outline-none " name="user_email" />
                            <label className="absolute left-4 top-2.5 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500  focus:border-blue-500 focus:ring-blue"> Your Email</label>
                        </div>

                        <div className=" relative  "><input
                            type="text"
                            id="Your Subject"
                            
                            placeholder=" " required
                            className="w-full border peer border-gray-700 px-4 pt-5 pb-2 placeholder-transparent focus:border-blue-500 focus:ring-2 outline-none " name="user_subject" />
                            <label className="absolute left-4 top-2.5 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500  focus:border-blue-500 focus:ring-blue"> Subject</label>
                        </div>

                        <div className=" relative  "><textarea
                            type="text" id="Your Message"
                            placeholder=" "
                            rows={5} required
                            className="w-full border peer border-gray-700 px-4 pt-5 pb-2 placeholder-transparent focus:border-blue-500 focus:ring-2 outline-none " name="user_message" />
                            <label className="absolute left-4 top-2.5 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500  focus:border-blue-500 focus:ring-blue"> Your Message</label>
                        </div>
                        <Button variant="outline">Send Message</Button>
                        <button
                            type="submit"
                            tabIndex={0}
                            className="transform-none font-medium w-full rounded-[5px] flex justify-center items-center gap-5 bg-blue-600 text-white hover:bg-blue-700 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Send Message</button>

                      
                   
                        
                    </form>
                          
                </div>
                

            </div>
        <FooterComponent/>
        </>
        
    );
}
export default page;
