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

import { Loader2Icon }                                             from "lucide-react";





const page = () => {
    const [isSending, setIsSending] = React.useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

    emailjs
      .sendForm('service_ebsdkyd', 'template_jf2dshw', form.current, {
        publicKey: 'G2aSLdDp14Ug54B6E',
      })
      .then(
          () => {
              setIsSending(false);
          toast.success("Email sent successfully!");
            form.current.reset(); 
        },
          (error) => {
            setIsSending(false)
         toast.error(" Failed to send:" + error.text);
        },
      );
  };
    return(
        <>
            <NavbarComponent/>
        {/* <HeroComponent  shouShowButton bgImage="contact-bg" title ="Contact Page" description="this is my contact page" /> */}
      
                        {/* <ToastContainer/> */}
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
                    
                    <form onSubmit={sendEmail} ref={form} action="" className="w-full max-w-md space-y-2">

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
                        

                        {isSending ? <Button size="sm" className=' w-full' disabled>
      <Loader2Icon className="animate-spin" />
      Please wait
    </Button> : <Button className={'w-full'} >Send Mail</Button> }
                        
                      
                        

                      
                   
                        
                    </form>
                          
                </div>
                

            </div>
        <FooterComponent/>
        </>
        
    );
}
export default page;
