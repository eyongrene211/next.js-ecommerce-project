'use client';
import Link                                                       from "next/link";
import { Search, ShoppingCart, Heart, User, ChevronDown, Menu }   from "lucide-react";
import CardWithBadge                                              from "../CartWithBadge/CardWithBadge";
import IconWithBadge                                              from "../CartWithBadge/CardWithBadge";
import { useStoreCart }                                           from "@/store/cart.store";
import { useStoreFav }                                            from "@/store/favorite.store";

import  { ModeToggle }                                            from "../ModeToggle/ModeToggle";


import { Button }                                                 from "@/components/ui/button"

import {
    
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NavbarComponent = () => {
    const { selectedIds, cartItems} = useStoreCart();
    const {selectedFavIds} = useStoreFav();
    
 return (
   
<nav className="bg-white text-black h-[80px] p-5  fixed top-0 left-0 right-0 z-50 shadow-md mb-4 ">
         <div className="container  mx-auto flex justify-between items-center">
             {/**left nav side */}
             <div className=" w-full flex items-center  justify-between md:justify-start md:space-x-5 lg:space-x-19 ">
                 <Link href={'/'}><div className=" text-lg font-bold">My App</div></Link>
                 {/** show on mobile scrensize */}
                 <div>
                     <ul className="flex md:hidden items-center space-x-5 ">
                         <li><Link href={'/shop'}> </Link></li>
                         <li><Link href={'cart'}>
                         <IconWithBadge icon={Menu} iconClassName={'text-black'}   /></Link></li>
                     </ul>
                 </div>             
    <ul className=" hidden md:flex space-x-8 font-black">
                 <li><Link href="/" className="space-x-1 hover:text-orange-500">
                     Home
                     
                 </Link></li>
                     <li className="group relative">
                         <Link href="/" className="flex items-center relative space-x-1 hover:text-orange-500">
                             <div className="flex items-center">
                                  Shop
                             <ChevronDown size={20} />
                             </div> </Link>
                         {/** dropdown menu for shop */}
                         <div className="  absolute top-full left-0 w-[200px] h-[100px] z-20 bg-white border rounded-md shadow-lg
        
        
        opacity-0 
        -translate-y-4
        pointer-events-none

     
        group-hover:opacity-100
        group-hover:translate-y-0
        group-hover:pointer-events-auto

      
        transition-all duration-300 ease-in-out
    ">
                             <ul className="bg-white ">
                        <li>Favourite Product</li>
                         <li>Latest Product</li>
                         <li>Popular Products</li>
                        </ul>
                         </div>
                        </li>
                 <li><Link href="/" className="flex items-center space-x-1 hover:text-orange-500">
                     Blog
                     <ChevronDown size={20} />
                 </Link></li>
        <li><Link href="/about" className="e hover:text-orange-500">About </Link></li>
        <li><Link href="/contact" className=" hover:text-orange-500">Contact </Link></li>

             </ul>
             </div>
             {/**right nav side */}
             <ul className=" hidden md:flex space-x-6 items-center ">
                <li>
                     <Link href="" className="hover:text-orange-500">
                     <Search /></Link>
                </li>
                <li>
                     <Link href="/cart" className="">
                         {/* <ShoppingCart /> */}
                        <IconWithBadge  icon={ShoppingCart} itemCount={cartItems.length} iconClassName={'text-black hover:text-orange-500'} />
                     </Link>
                </li>
                <li>
                     <Link href="" className="">
                         <IconWithBadge icon={Heart} itemCount={ selectedFavIds.length} iconClassName={'text-black hover:text-orange-500'}/></Link>
                </li>
                <li>
                     <Link href="" className="hover:text-orange-500">
                     <User /></Link>
                 </li>
                 <li>
                     <ModeToggle/>
                 </li>
                 <li>
                     <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
                 </li>
             </ul>
</div>
</nav>
)
}
export default NavbarComponent;