'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { kidsProductsQuery } from '@/sanity/lib/queries';
import { Product } from '@/types/product';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { addToCart, addToWishlist, getWishlistItems, removeFromWishlist } from '@/app/actions/actions';
import toast from 'react-hot-toast';

export default function KidsProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [showMoreVisible, setShowMoreVisible] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const products: Product[] = await client.fetch(kidsProductsQuery);
      setAllProducts(products);
      setDisplayedProducts(products.slice(0, 8));
      setShowMoreVisible(products.length > 8);
    }

    fetchProducts();
    setWishlist(getWishlistItems());
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent default link behavior
    toast.success(`${product.name} added to cart!`);
    addToCart(product);
  };

  const handleAddToWishlist = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent default link behavior
    const isInWishlist = wishlist.find(item => item._id === product._id);

    if (isInWishlist) {
      removeFromWishlist(product._id);
      toast.success(`${product.name} removed from wishlist!`);
      setWishlist(wishlist.filter(item => item._id !== product._id));
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist!`);
      setWishlist([...wishlist, product]);
    }
  };

  const isProductInWishlist = (productId: string) => {
    return wishlist.some(item => item._id === productId);
  };

  const loadMoreProducts = () => {
    const currentLength = displayedProducts.length;
    const nextProducts = allProducts.slice(currentLength, currentLength + 4);
    setDisplayedProducts([...displayedProducts, ...nextProducts]);
    
    if (displayedProducts.length + nextProducts.length >= allProducts.length) {
      setShowMoreVisible(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-semibold">Best Of Jordan</span>
            </div>
            
          </div>
          
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[30px]">
          {displayedProducts.map((product) => (
            <div key={product._id} className="group bg-white border shadow-lg rounded-[4px]">
              <Link href={`/product/${product.slug.current}`} legacyBehavior>
                <a>
                  <div className="relative aspect-square bg-slate-50  rounded-[4px] sm:p-4">
                    {product.tags.includes('new') && (
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                        <span className="bg-[#00FF66] text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-[4px]">
                          NEW
                        </span>
                      </div>
                    )}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex flex-col gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white ${isProductInWishlist(product._id) ? 'text-red-500' : ''}`} 
                        onClick={(e) => handleAddToWishlist(e, product)}
                      >
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white"
                      >
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </div>
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                    )}
                   
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <span className="text-blue-700 font-medium text-sm sm:text-base">${product.price}</span>
                    </div>
                  
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-[#FFAD33]' : 'text-[#666666]'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pb-2 sm:pb-3">
                      <Button 
                        className="bg-black  text-white hover:bg-black/90 h-8 sm:h-10 rounded-[4px] text-sm sm:text-base font-medium px-3 sm:px-4" 
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        Add To Cart
                      </Button>
                    </div>
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* Show More Products Button */}
        {showMoreVisible && (
          <div className="flex justify-center mt-6 sm:mt-10">
            <Button 
              className="bg-blue-600 hover:bg-blue-900 text-white h-10 sm:h-12 px-8 sm:px-12 rounded-[4px] text-sm sm:text-base font-medium"
              onClick={loadMoreProducts}
            >
              Show More Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

