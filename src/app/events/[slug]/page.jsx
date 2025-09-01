'use client';
import React                                                          from 'react';
import { useParams }                                                  from 'next/navigation';
import { hero_card_items }                                            from '../../../../data/hero_card_items';
import Image                                                          from 'next/image';
import { Badge }                                                      from '@/components/ui/badge';
import { Icon }                                                       from '@iconify/react';
import { Button }                                                     from '@/components/ui/button';
import { items }                                                      from '../../../../data/card_items';
import { Star, StarHalf, StarHalfIcon, StarOffIcon }                  from 'lucide-react';

const page = () => {
    const { slug } = useParams();
    const eventItems = hero_card_items.find(item => item.slug === slug); 
    return (
        <>
     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="relative">
                        <img
                            alt="Machu Picchu & Sacred Valley"
                            src={ (eventItems.imageUrl)? eventItems.imageUrl :  "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/reweb/blocks/placeholder.png"}
            className="w-full h-96 object-cover rounded-lg" />
          <Badge
            style={{ color: "white", backgroundColor: eventItems.topBtnClr }}
            className="absolute top-4 left-4">
            {eventItems.topButton}
          </Badge>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <img
            alt="Gallery image 1"
                            src={ (eventItems.imageUrl)? eventItems.imageUrl :  "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/reweb/blocks/placeholder.png"}
            className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80" />
          <img
            alt="Gallery image 2"
                            src={ (eventItems.imageUrl)? eventItems.imageUrl :  "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/reweb/blocks/placeholder.png"}
            className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80" />
          <img
            alt="Gallery image 3"
                            src={ (eventItems.imageUrl)? eventItems.imageUrl :  "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/reweb/blocks/placeholder.png"}
            className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80" />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="mdi:map-marker" className="text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{ eventItems.imageSubTitle}</span>
          </div>
          <h1 className="font-heading text-3xl font-bold mb-4">{eventItems.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {/* <Icon icon="mdi:star" className="text-yellow-500" />
              <Icon icon="mdi:star" className="text-yellow-500" />
              <Icon icon="mdi:star" className="text-yellow-500" />
              <Icon icon="mdi:star-half-full" className="text-yellow-500" />
              <Icon icon="mdi:star-outline" className="text-muted-foreground" /> */}
               {[...Array(5)].map((_, index) => {
                              // the value of star follows the order (1,2,3,4,5)
                              const starValue = index + 1;
                              // represent the value for the prevStarValue
                              const prevStartValue = index;
              
                              // checking if its a ful star
                              if (eventItems.starRating >= starValue) {
                                return <Star key={`full-${index}`} color={'#C3B033FF'} fill={'#F3D721FF'} />;
                              }
              
                              // Condition if not full check half star
                              if (eventItems.starRating > prevStartValue) {
                                return (
                                  <Star
                                    key={`half-${index}`}
                                    color={eventItems.filledStarColor}
                                        fill={'#F3D721FF'}
                                        fi
                                  />
                                );
                              }
              
                              //condition if bar not full and not half then if must be empty
                              return (
                                <Star key={`empty-${eventItems.id}`} color={eventItems.emptyStarColor} fill={eventItems.emptyStarColor} />
                              );
                            })}
                                <span className="text-sm text-muted-foreground ml-1">{ eventItems.starRating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({eventItems.reviewNo} reviews)</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:calendar" className="text-muted-foreground" />
                            <span className="text-sm"> {eventItems.day } days</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:account-group" className="text-muted-foreground" />
            <span className="text-sm">Max {eventItems.maxNoPerson} people</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Highlights</h3>
                        <ul className="space-y-2">
                            {eventItems.hightLight.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
              <Icon icon="mdi:check-circle" className="text-green-500 text-sm" />
                                    <span className="text-sm">{ item}</span>
            </li>
                            ))}
            
            
          </ul>
        </div>
        <div className="border-t pt-6">
          <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl font-bold">${ eventItems.discountPrice}</span>
                            <span className="text-lg text-muted-foreground line-through">${ eventItems.ogPrice}</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              31% OFF
            </Badge>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
                <Icon icon="mdi:minus" />
              </Button>
              <span className="px-4 py-2 min-w-12 text-center">1</span>
              <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
                <Icon icon="mdi:plus" />
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">per person</span>
          </div>
          <div className="space-y-3">
            <Button size="lg" className="w-full">
              <Icon icon="mdi:cart-plus" className="mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              <Icon icon="mdi:heart-outline" className="mr-2" />
              Add to Wishlist
            </Button>
          </div>
        </div>
        <div className="border-t pt-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon icon="mdi:truck-delivery" />
              <span>Free cancellation</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="mdi:shield-check" />
              <span>Secure booking</span>
            </div>
          </div>
        </div>
                </div>
                <h3>{ eventItems.imageSubTitle}</h3>
    </div>
            
        </>
    );
}
export default page;