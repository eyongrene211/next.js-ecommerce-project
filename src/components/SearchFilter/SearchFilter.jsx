'use client';

import React, { useState } from "react";
import { hero_card_items } from "../../../data/hero_card_items";
const SearchFilter = ({ onfilter }) => {
    const [searchTerm, setSearchTerm] = useState("");
    // const [isClicked, setIsClicked] = useState(false);


    const filterSearch = () => {
        
        onfilter(filteredEvent);
        

    }
    

    return (
        <>
           
            

        </>

    );
};

export default SearchFilter;
