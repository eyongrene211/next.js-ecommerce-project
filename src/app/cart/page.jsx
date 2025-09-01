"use client";
import React               from "react";
import { useStoreCart }    from "@/store/cart.store";
import NavbarComponent     from "@/components/Navbar/NavbarComponent";
import { hero_card_items } from "../../../data/hero_card_items";

const CartPage = () => {
const { cartItems, removeItem, increaseQty, decreaseQty, clearCart } = useStoreCart();

const totalPrice = cartItems.reduce(
(total, item) => total + item.discountPrice * item.quantity,
0
);

return (
<>
<NavbarComponent />
<div className="h-full flex flex-col p-5">
<h1 className="text-3xl font-bold mb-5">Your Cart</h1>

{cartItems.length === 0 ? (
<p className="text-gray-500">Your cart is empty 🛒</p>
) : (
<>
<div className="flex flex-col gap-5">
{cartItems.map((item) => (
<div
key= {item.id}
className="grid  grid-cols-3 items-center  bg-white shadow-md p-4 rounded-xl"
>
<div className="flex items-center gap-4">
<img
src={item.imageUrl}
alt={item.title}
className="w-20 h-20 object-cover rounded-lg"
/>
<div>
<h2 className="font-bold text-lg text-black">{item.title}</h2>
<p className="text-gray-500">${item.discountPrice}</p>
</div>
</div>

{/* Quantity controls */}
<div className="flex items-center gap-3 justify-center" >
<button
onClick={() => decreaseQty(item.id)}
className="px-3 py-1 bg-gray-200  text-black rounded"
>
-
</button>
<span className="text-black">{item.quantity}</span>
<button
onClick={() => increaseQty(item.id)}
className="px-3 py-1 bg-gray-200 rounded text-black"
>
+
</button>
</div>

{/* Subtotal + remove */}
<div className="flex items-center justify-end gap-5">
<span className="font-bold text-green-600">
${item.discountPrice * item.quantity}
</span>
<button
onClick={() => removeItem(item.id)}
className="text-red-500 font-semibold"
>
Remove
</button>
</div>
</div>
))}
</div>

{/* Summary */}
<div className="mt-10 p-5 bg-gray-100 rounded-xl flex flex-col gap-3">
<div className="flex justify-between font-bold text-lg text-black">
<span>Total</span>
<span>${totalPrice}</span>
</div>
<button
onClick={clearCart}
className="bg-red-500 text-white py-3 rounded-xl mt-3 font-bold"
>
Clear Cart
</button>
<button className="bg-green-500 text-white py-3 rounded-xl mt-3 font-bold">
Proceed to Checkout
</button>
</div>
</>
)}
</div>
</>
);
};

export default CartPage;


// 'use client';
// import React            from 'react';
// import { useStore }     from 'zustand';
// import { useStoreCart } from '@/store/cart.store';
// import{ hero_card_items } from '../../../data/hero_card_items';
// const Page = () => {
//     const { selectedIds, clearCart , removeItem} = useStoreCart();
//     const cartItems =  hero_card_items.filter( items => selectedIds.includes(items.id));
//     return (
//         <>
//             <div>
//                    <div className="h-full flex flex-col p-5">
// <h1 className="text-3xl font-bold mb-5">Your Cart</h1>

// {/* cart items */}
// <div className="flex flex-col gap-5">
// {cartItems.length === 0 ? (
// <p className="text-gray-500">Your cart is empty 🛒</p>
// ) : (
// cartItems.map((item) => (
// <div
// key={item.index}
// className="flex items-center justify-between bg-white text-black shadow-md p-4 rounded-xl"
// >
// <div className="flex items-center gap-4 object-cover">
// <img
// src={item.imageUrl}
// alt={item.title}
// className="w-20 h-20 object-cover rounded-lg"
// />
// <div>
// <h2 className="font-bold text-lg">{item.title}</h2>
// <p className="text-gray-500">${item.discountPrice}</p>
// </div>
// </div>

// {/* quantity controls */}
// <div className="flex items-center gap-3">
// <button
// onClick={() => decreaseQty(item.id)}
// className="px-3 py-1 bg-gray-200 rounded text-black"
// >
// -
// </button>
// <span>{item.quantity}</span>
// <button
// onClick={() => increaseQty(item.id)}
// className="px-3 py-1 bg-gray-200 rounded text-black"
// >
// +
// </button>
// </div>

// {/* subtotal + remove */}
// <div className="flex items-center gap-5">
// <span className="font-bold text-green-600">
// ${item.discountPrice * item.quantity}
// </span>
// <button
// onClick={() => removeItem(item.id)}
// className="text-red-500 font-semibold"
// >
// Remove
// </button>
// </div>
// </div>
// ))
// )}
// </div>

// {/* summary */}
// {cartItems.length > 0 && (
// <div className="mt-10 p-5 bg-gray-100 rounded-xl flex flex-col gap-3">
// <div className="flex justify-between font-bold text-lg text-black">
// <span>Total</span>
// <span>
// $
// {cartItems.reduce(
// (total, item) => total + item.discountPrice * item.quantity,
// 0
// )}
// </span>
// </div>
// <button className="bg-orange-500 text-white py-3 rounded-xl mt-3 font-bold">
// clear Cart
// </button>
// <button className="bg-green-500 text-white py-3 rounded-xl mt-3 font-bold">
// Proceed to Checkout
// </button>
// </div>
// )}
// </div>

//             </div>  
            
//         </>
//     );
// }
// export default Page;