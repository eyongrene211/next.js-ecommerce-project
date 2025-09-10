'use client';
import CardComponent                       from "@/components/Card/CardComponent";
import HeroCardComponent                   from "@/components/HeroCard/HeroCardComponent"
import FooterComponent                     from "@/components/Footer/FooterComponent";
// import Footer          from "@/components/Footer/FooterComponent";
import HeroComponent                       from "@/components/Hero/HeroComponent";
import NavbarComponent                     from "@/components/Navbar/NavbarComponent";
import Image                               from "next/image";
import { Bolt, Heart}                      from "lucide-react";
import { Menu}                             from  "lucide-react";

import { items }                           from "../../data/card_items";
import { useState, useEffect }             from "react";
import { hero_card_items }                 from "../../data/hero_card_items";
import HeroSlider                          from "@/components/heroSlider/HeroSlider";
import SearchFilter                        from "@/components/SearchFilter/SearchFilter";
import { HeroScroller }                    from "@/components/HeroScroller/HeroScroller";
//initializing nextJs page
const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const filteredEvent = searchTerm.length > 0 ? hero_card_items.filter((item) => { item.title.toLowerCase().includes(searchTerm.toLowerCase()) }) : hero_card_items;

  const filteredEvent = searchTerm.length > 0 
  ? hero_card_items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : hero_card_items;

  
  
  // const [newFilteredEvent, setnewFilteredEvent] = useState(hero_card_items);

  // const [items, setItems] = useState([]); // State to hold array of item from the API
  // const [isLoading, setIsLoading] = useState(true); // state to manage the loading status
  // const [error, setError] = useState(null);// state to hold any potential errors


  // useEffect(() => {
  //   //async function is use to perform the fetch 
  //   const fetchData = async () => {
  //     try {
  //       //fetch the custom API endpoint create for me by gemini
  //       const response = await fetch('https://api.npoint.io/44917593467a99859f57');

  //       if (!response.ok) {
  //         throw new Error('Data could not be fetched!');
  //       }
  //       const data = await response.json();
  //       setItems(data); //store the fetched data in our state

  //     }
  //     catch (error) {
  //       setError(error.message); //store any error message
  //     }
  //     finally {
  //       setIsLoading(false); //set loading to false once done
  //     }
  //   };

  //   fetchData();
  // }
  //   , []);

  // //Show a loading message while fetching
  // if (isLoading) {
  //   return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.5rem' }}>Loading services...</div>;

  // }

  // //show an error message if the fetch failed
  // if (error) {
  //   return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.5rem', color: 'red' }}>Error: {error}</div>;

  // }



  return (
    <>
      <NavbarComponent />
      {/* <HeroComponent showButton bgImage="home-bg" title="Welcome Here" description="This is my homepage" /> */}
      {/* <HeroSlider /> */}
      <HeroScroller bgImage={'home-bg'}/>

      {/* main body section */}

      <div className="  flex flex-col    justify-center items-center pt-10">
        <div className="flex   gap-2 justify-center items-center">
        <Bolt  size={40} />
        <h3> MOST POPULAR ADVENTURE</h3>
        </div>
        <h1 className="text-4xl font-semibold">Adventure That Will Change  Your Life</h1>
        <p className=" text-center">From ancient ruins to pristine beaches, discover the destinations that <br /> our travelers can't stop talking about.</p>
         <div className="flex w-[600px] mt-5 mb-5 border rounded-lg overflow-hidden">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    className="w-full py-3"
                    placeholder="Search Your Destination"
                />
                <button
                    className="bg-primary p-3 rounded-r-lg text-white font-semibold"
                    onClick={() => {''}}

                // ✅ only runs when clicked
                >
                    Search
                </button>
            </div>
            <h2>{searchTerm}</h2>

        <div className=" h-full flex-wrap flex items-center gap-3 m-2 justify-center  ">
                {/* <HeroCardComponent /> */}
          {filteredEvent.map((item) => (
                 
                <HeroCardComponent 
                  key={item.id}
                  item={item}
                //  {...item}
                />
               ))}

          {/* {using data found in the project } */}
          {/* {generate for a single card} */}
          {/* <CardComponent textColor= "text-black" title={items[0].title} textDescription={items[0].text} imageUrl={items[0].image}/> */}

          {/* {items.map((item) => (
            <CardComponent
              textColor="text-black"
              key={item.id}
              title={item.title}
              image={item.image}
              textDescription={item.text}
            />
          ))} */}

          {/* {Fetching data from API and passing to component} */}



        {/* <h3>Hello World!</h3> */}
        {/* <Heart size={70} color="#ccc" />  */}
        {/* <strong>This is my home page</strong> */}
        {/* <Menu  size={100} color="#843ca3"  />   */}
        {/* <Image src="/nero_dmc5.png" width={500} height={700} alt="Nero DMC5" /> */}
      </div>
        </div>
      <FooterComponent />
            
    </>
  );
}
export default page;