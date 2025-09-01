'use client'; //Required for using   hooks like useRouter, useState


import {  usePathname }      from "next/navigation" // The modern hook for getting the URL path
import {useState, useEffect} from 'react';
// import { is }                from '../../../.next/static/webpack/app/about/page.70fc1ddab3138df0.hot-update';
const HeroComponent = ({title,description,bgImage, showButton }) => { // creating a dynamic props
    // const router = useRouter();
    // const pathname = usePathname();
    // console.log(currentPath + ' current path ');
    // const isHompage = pathname === '/';

//Use useState to give the  component  its Own  memory
const [isshowButton, setShowButton] =useState(false)

// useEffect to run code when prop 'showButton' changes. It acts like a listener to what happens outside
useEffect(() =>{
    if(showButton){
        setShowButton(true);

    } else {
        setShowButton(false);
    }
}, [showButton]);
return (
    <>
    <div className={`${bgImage} `}>
        <div className =" w-full h-[400px] bg-[#0000009d] p-4 text-center ">
            <div className= 'w-full h-full flex flex-col items-center justify-center'>
          <h1 className="text-4xl font-bold mb-4"> {title}</h1>
        <p className="text-lg mb-6">{description}</p>
        
        {showButton  && (<button className="   text-blue-500 px-6 py-3 rounded-full hover:bg-gray-200">
            Get Started
        </button>)}
            </div>
        </div>
      
    </div>
    </>
);


};
export default HeroComponent;