'use client';
import React, { useState }                                         from 'react';
import { Bolt, Clock4, Heart, Star, StarHalf, Users }              from 'lucide-react';
import { hero_card_items }                                         from '../../../data/hero_card_items';
import { useStoreCart }                                            from '@/store/cart.store';
import {
  useStoreFav
} from '@/store/favorite.store';                               
import Link                                                        from 'next/link';
const HeroCardComponent = ({ 
  item
}) => {
  const filledStarColor = '#ffe014';
  const { cartItems, toggleItem } = useStoreCart();
  const { selectedFavIds, toggleFavItemId } = useStoreFav();
  const emptyStarColor = '#9c9b98';
  // let isClicked = false;
  // const [isClicked, SetIsClicked] = useState(false);

  return (
    <>
      <div className='  p-5 text-black flex flex-col justify-center items-center'>
        {/** Creating card content */}
        <div className='flex flex-col gap-3 w-[450px] p-[10px_10px_20px_10px] rounded-2xl shadow-2xl relative'>
          <img src={item.imageUrl} alt='card image' className=' rounded-2xl w-[430px] h-[300px] ' />

          <div className=' w-full h-[230px]  absolute '>
            <Link href={`/events/${item.slug}`} >
              
            <div className='w-[430px] h-[300px] bg-[#00000058] rounded-2xl    text-white relative '>
              <span
                className=' p-2  rounded-2xl absolute bottom-[250px] left-[10px] font-bold'
                style={{ backgroundColor: item.topBtnClr }}
              >
                {item.topButton}
                          </span>
                          <div >
                              <Heart
                size={45}
                onClick={() => toggleFavItemId(item.id)}
                className='p-2  rounded-full right-4  bg-white absolute top-[9px] text-black'
                     

                  style={{
                    fill
                      
                    
                    
                    
                    
                    
                      : selectedFavIds.includes(item.id) ? '#ef4444' : item.iconBtnBg
                  }}
                              />
                              {/* {selectedFavIds.includes(item.id) ? className= 'bg-red-500' : className='bg-white' } */}
                          </div>
              
              <div className='absolute bottom-2 font-bold text-xl pl-[5px]'>
                <span>{item.imageSubTitle}</span>
                <p>{item.title}</p>
              </div>
            </div>
            </Link>
            <div className='bg-[#000000]'></div>
          </div>

          <div className='flex justify-start items-center gap-5'>
            <div className='flex gap-1'>
              {/* <Star color="#ffe014" fill="#ffe014" fillOpacity={9} />
                    <Star color="#ffe014" fill="#ffe014" />
                    <Star color="#ffe014" fill="#ffe014" />
                    <Star color="#ffe014" fill="#ffe014" />
                    <Star color="#9c9b98" fill="#ffffff"  /> */}
              {/* creating dynamic star rating */}
              {[...Array(5)].map((_, index) => {
                // the value of star follows the order (1,2,3,4,5)
                const starValue = index + 1;
                // represent the value for the prevStarValue
                const prevStartValue = index;

                // checking if its a ful star
                if (item.starRating >= starValue) {
                  return <Star key={`full-${index}`} color={'#C3B033FF'} fill={'#F3D721FF'} />;
                }

                // Condition if not full check half star
                if (item.starRating > prevStartValue) {
                  return (
                    <StarHalf
                      key={`half-${index}`}
                      color={item.filledStarColor}
                      fill={item.filledStarColor}
                    />
                  );
                }

                //condition if bar not full and not half then if must be empty
                return (
                  <Star key={`empty-${item.id}`} color={item.emptyStarColor} fill={item.emptyStarColor} />
                );
              })}
            </div>
            <span className='text-gray-500 font-bold'>4.8</span>
            <span className='text-gray-500'>({item.reviewNo} reviews)</span>
          </div>

          <div className='flex items-center gap-8'>
            <div className='flex items-center gap-2'>
              <Clock4 className='text-gray-500' />
              <span className='text-gray-500'>{item.day} days</span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='text-gray-500' />
              <span className='text-gray-500'> 8-{item.maxNoPerson} people</span>
            </div>
          </div>

          <p className='text-gray-500'> Trip highlights:</p>

          {/* Dynamic Hightlight using the .map()  */}
          <div className='flex gap-2 text-[12px]'>
            {item.hightLight.map((hightlight, index) => (
              <span key={index} className='bg-gray-300 rounded-2xl px-1.5 py-1.5'>
                {hightlight}
              </span>
            ))}
          </div>

          <div className='flex justify-between  item-center gap-2'>
            <div className='flex flex-col items-start  '>
              <div className=' flex items-center gap-2 '>
                <span className='text-4xl text-green-300 font-semibold'>
                  From ${item.discountPrice}{' '}
                </span>
                <span className='text-gray-400 line-through'>${item.ogPrice}</span>
              </div>
              <span className='text-gray-400'>of from $99/month</span>
            </div>

            <button
              onClick={() => toggleItem( item)}
              className='     w-max  rounded-[35px]  p-3 font-semibold bg-green-600 text-white text-[15px]'
            >

              {cartItems.some((cartItems) => cartItems.id === item.id) ? 'Remove from Card' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroCardComponent;
