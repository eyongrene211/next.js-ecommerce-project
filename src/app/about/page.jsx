'use client';
import { useState }    from 'react';

import FooterComponent from "@/components/Footer/FooterComponent";
import HeroComponent   from "@/components/Hero/HeroComponent";
import NavbarComponent from "@/components/Navbar/NavbarComponent";

const page = () => {
//  let count = 0;
    const [count, setCount] = useState(0);
    const [textEntered, setTexEntered] = useState("")
    return(
        <>
        <NavbarComponent/>
        <HeroComponent  bgImage="about-bg" title ="About Page" description="this is my about page" />
        <div className="h-screen text-black bg-white">
       
       
        <div className=" w-full flex flex-col justify-center items-center">
        <h1 className="text-9xl font"> Counter : {count} </h1>
        <div className="flex gap-3">

        <button onClick={()=>{ setCount(count+1)}} className="p-3 bg-green-400">Increment</button>
        <button onClick={()=>{ 
        //     /*if count is less than or equal to zero */
        //     if(count <= 0){
        //     setCount(0);
            
        // }
        // /*if count is greater than or equal to zero */
        // else if(count >= 0){
        //     setCount(count-1);
        // }

     count != 0 && setCount(count-1) 
        }} className="p-3 bg-red-400">Decrement</button>
        </div>
            
            <div>
                        <input type="text" placeholder="Type Something" value={textEntered} onChange={(e)=>{setTexEntered(e.target.value)}} className="text-black text-3xl font-bold outline-0 border p-4 mt-5" />
                        
                    </div>
                    <h1 className='text-9xl'>{ textEntered}</h1>
        </div>
            </div>
 <FooterComponent/>
</>
    )
}
export default page;