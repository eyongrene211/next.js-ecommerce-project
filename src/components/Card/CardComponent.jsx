'use client'; // This is a client component because it uses hooks.
import Image                  from "next/image";
import { items }              from "../../../data/card_items";
import { useState, useEffect} from 'react';
import { useStoreCart }       from "@/store/cart.store";

const CardComponent = ({ textColor, title, textDescription, imageUrl }) => {
    const selectedIds = useStoreCart;
    
return(
    <>
    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3">

    <div className="bg-white w-[400px]  border-2 rounded-2xl  flex flex-col justify-start items-center gap-3 border-black p-4">
        <img
            className="w-content h-[250px] rounded-2xl  shadow-2xs bg-gray-200 mt-2"
            src={imageUrl}
            width={400}
            height={300}
            alt={'card-image'}
        />
        <h1 className="text-black self-start  text-2xl text-justify">
            {title}
        </h1>
        <p className="text-black self-start  text-justify">
                {textDescription}
                        </p>
        <button className = "self-start w-full  rounded-2xl p-2 bg-[#9696ff]">Try now</button>
        
    </div>
    

    </div>
            
    {/* </div> */}

    
    </>
);
}
export default CardComponent