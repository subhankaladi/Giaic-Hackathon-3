'use client'

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { inter, poppins } from "@/app/ui/font"
import { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '@/app/actions/actions';
import { Product } from '@/types/product';
import { urlFor } from '@/sanity/lib/image'; // Import urlFor

export default function CartPage() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const router = useRouter()

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        removeFromCart(id);
        setCartItems(getCartItems());
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find(item => item._id === id);
        if (product) {
            handleQuantityChange(id, product.quantity + 1);
        }
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find(item => item._id === id);
        if (product && product.quantity > 1) {
            handleQuantityChange(id, product.quantity - 1);
        }
    };

    return (
        <div className={`${inter.className} min-h-screen bg-white`}>
            {/* Breadcrumb */}
            <div className="mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 py-3.5">
                        <Link 
                            href="/" 
                            className="text-[#666666] hover:text-black transition-colors text-sm"
                        >
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-[#666666]" />
                        <span className="text-sm">Cart</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
                {/* Cart Table */}
                <div className="mb-8 overflow-x-auto">
                    <div className="min-w-[600px]">
                        <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 sm:gap-8 pb-6 border-b text-sm font-medium">
                            <div>Product</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Subtotal</div>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item._id} className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 sm:gap-8 py-6 border-b items-center">
                                <div className="flex items-center gap-2 sm:gap-4">
                                    <button 
                                        className="text-[#666666] hover:text-black"
                                        onClick={() => handleRemove(item._id)}
                                    >
                                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-[#F5F5F5]">
                                        {item.image && (
                                            <Image
                                                src={urlFor(item.image).url()}
                                                alt={item.name}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        )}
                                    </div>
                                    <span className="font-medium text-sm sm:text-base">{item.name}</span>
                                </div>
                                <div className="text-sm sm:text-base">${item.price}</div>
                                <div className="flex items-center border rounded-sm max-w-[72px]">
                                    <button 
                                        className="p-1 sm:p-2 hover:bg-gray-50"
                                        onClick={() => handleDecrement(item._id)}
                                    >
                                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                    <span className="w-6 sm:w-8 text-center text-sm sm:text-base">{item.quantity}</span>
                                    <button 
                                        className="p-1 sm:p-2 hover:bg-gray-50"
                                        onClick={() => handleIncrement(item._id)}
                                    >
                                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                </div>
                                <div className="text-sm sm:text-base">${item.price * item.quantity}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                    <Button 
                        variant="outline" 
                        className="h-10 sm:h-12 px-6 sm:px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
                        onClick={() => router.push('/')}
                    >
                        Return To Shop
                    </Button>
                    <Button 
                        variant="outline" 
                        className="h-10 sm:h-12 px-6 sm:px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
                        onClick={() => setCartItems(getCartItems())}
                    >
                        Update Cart
                    </Button>
                </div>

                {/* Coupon and Cart Total */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input 
                            placeholder="Coupon Code"
                            className="h-10 sm:h-12 w-full sm:max-w-[300px] rounded-sm border-gray-300 focus:border-gray-400 focus:ring-0"
                        />
                        <Button 
                            className="h-10 sm:h-12 px-6 sm:px-8 bg-[#DB4444] hover:bg-[#DB4444]/90 rounded-sm w-full sm:w-auto"
                        >
                            Apply Coupon
                        </Button>
                    </div>

                    <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full lg:max-w-[470px] lg:ml-auto">
                        <h2 className={`${poppins.className} text-lg sm:text-xl font-medium mb-4`}>Cart Total</h2>
                        
                        <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                            <span>Subtotal:</span>
                            <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                            <span>Shipping:</span>
                            <span className="text-[#666666]">Free</span>
                        </div>
                        <div className="flex justify-between py-3 text-sm sm:text-base">
                            <span>Total:</span>
                            <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
                        </div>

                        <Button 
                            onClick={() => router.push('/checkout')}
                            className="w-full h-10 sm:h-12 bg-[#DB4444] hover:bg-[#DB4444]/90 rounded-sm mt-4 text-sm sm:text-base"
                        >
                            Proceed to checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
