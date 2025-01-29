// // src/components/CartIcon.tsx
// import { useCartContext } from '@/app/context/CartContext';
// import { ShoppingCart } from 'lucide-react';
// // import { useCartContext } from '@/context/CartContext';

// export default function CartIcon() {
//   const { cartCount } = useCartContext();

//   return (
//     <div className="relative">
//       <ShoppingCart className="w-8 h-8" />
//       {cartCount > 0 && (
//         <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-1">
//           {cartCount}
//         </span>
//       )}
//     </div>
//   );
// }


import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function CartIcon() {

  return (
    <>
      <div
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-red-900 text-white rounded-full border-white w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Go to Cart"
      >
      <Link href={"/cart"}>
      <h1
        className={twMerge(
          "text-2xl hover:text-red-500 font-bold uppercase relative group overflow-hidden duration-300"
        )}
      >
      <ShoppingCart className="text-5xl inline-block" />
        <span className="absolute w-full h-px bg-red-500 inline-block left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 duration-300" />
      </h1>
      </Link>
      </div>
      <div
        className="fixed right-4 top-72 transform -translate-y-1/2 bg-blue-900 text-white border-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Go to Wishlist"
      >
        <Link href={"/wishlist"}>
        <h1
        className={twMerge(
          "text-2xl hover:text-blue-500 font-bold uppercase relative group overflow-hidden duration-300"
        )}
      >
      <Heart className="text-5xl inline-block" />
        <span className="absolute w-full h-px bg-blue-500 inline-block left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 duration-300" />
      </h1>
        </Link>
        {/* <Heart className="w-6 h-6" /> */}
     
      </div>
    </>
  );
}
