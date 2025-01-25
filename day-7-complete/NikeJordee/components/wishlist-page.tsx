"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { inter, poppins } from "@/app/ui/font";
import {
  addToCart,
  removeFromWishlist,
  getWishlistItems,
  moveAllToCart,
} from "@/app/actions/actions";
import { Product } from "@/types/product";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { allProductsQuery } from "@/sanity/lib/queries";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



export default function WishlistPage() {

  const router = useRouter();


  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [recommendedItems, setRecommendedItems] = useState<Product[]>([]);

  useEffect(() => {
    setWishlistItems(getWishlistItems());
    fetchRecommendedItems();
  }, []);

  const fetchRecommendedItems = async () => {
    const products: Product[] = await client.fetch(allProductsQuery);
    setRecommendedItems(products.slice(0, 4)); // Get only 4 products for recommendation
  };

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
    setWishlistItems(getWishlistItems());
    toast.success("Item removed from wishlist");
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleMoveAllToBag = () => {
    moveAllToCart();
    setWishlistItems([]);
    toast.success("All items moved to cart!");
  };

  const ProductCard = ({
    item,
    isWishlistItem = false,
  }: {
    item: Product;
    isWishlistItem?: boolean;
  }) => (
    <div className="group">
      <div className="relative aspect-square bg-[#F5F5F5] rounded-sm mb-4">
        {item.originalPrice && item.originalPrice > item.price && (
          <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded-sm">
            -{Math.round((1 - item.price / item.originalPrice) * 100)}%
          </span>
        )}
        {!isWishlistItem && item.tags && item.tags.includes("new") && (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-xs px-3 py-1 rounded-sm">
            NEW
          </span>
        )}
        {isWishlistItem ? (
          <button
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center"
            onClick={() => handleRemoveFromWishlist(item._id)}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        ) : (
          <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </button>
        )}
        <Link href={`/product/${item.slug.current}`}>
          {item.image && (
            <Image
              src={urlFor(item.image).url()}
              alt={item.name}
              fill
              className="object-contain p-4 cursor-pointer"
            />
          )}
        </Link>
        <div className="absolute inset-x-4 bottom-4"></div>
      </div>
      <Button
        className="w-full bg-black text-white hover:bg-black/90 h-10 rounded-sm"
        onClick={() => handleAddToCart(item)}
      >
        Add To Cart
      </Button>
      <h3 className="font-medium mt-2">{item.name}</h3>
      <div className="flex gap-3 mb-2">
        <span className="text-blue-700 font-medium">${item.price}</span>
        {item.originalPrice && item.originalPrice > item.price && (
          <span className="text-[#666666] line-through">
            ${item.originalPrice}
          </span>
        )}
      </div>
      {!isWishlistItem && (
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(item.rating)
                    ? "text-[#FFAD33]"
                    : "text-[#666666]"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-[#666666]">({item.reviews})</span>
        </div>
      )}
    </div>
  );

  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-10">
          <h1 className={`${poppins.className} text-2xl font-medium`}>
            Wishlist ({wishlistItems.length})
          </h1>
          {wishlistItems.length > 0 && (
            <Button
              variant="outline"
              className="h-12 px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors"
              onClick={handleMoveAllToBag}
            >
              Move All To Bag
            </Button>
          )}
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {wishlistItems.map((item) => (
              <ProductCard key={item._id} item={item} isWishlistItem={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-medium mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600">
              Add items to your wishlist to see them here.
            </p>
          </div>
        )}

        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className={`${poppins.className} text-2xl font-medium`}>
                Just For You
              </h2>
            </div>
            <Button
              variant="outline"
              className="h-12 px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors"
              onClick={() => router.push("products")}
              >
              See All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedItems.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
