



"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getCartItems } from '@/app/actions/actions';
import { Product } from '@/types/product';
import { inter } from '@/app/ui/font';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { urlFor } from '@/sanity/lib/image';
import { Input } from './ui/input';
import { Label } from './ui/label';
import toast from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';
import { client } from '@/sanity/lib/client';
import AuthGuard from './AuthGuard';

export default function BillingPage() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0); // State for discount
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        phone: '',
        email: ''
    });
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        zipCode: false,
        phone: false,
        email: false
    });

    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const total = Math.max(subtotal - discount, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            address: !formValues.address,
            city: !formValues.city,
            zipCode: !formValues.zipCode,
            phone: !formValues.phone,
            email: !formValues.email
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const handlePlaceOrder = async () => {
  if (validateForm()) {
    try {
      // Step 1: Create the order in Sanity
      const orderData = {
        _type: 'order',
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        email: formValues.email,
        cartItems: cartItems.map(item => ({
          _type: 'reference',
          _ref: item._id,  // Assuming cartItems have the correct product references
        })),
        total: total,  // Make sure this value is being calculated
        discount: discount,  // Add any discount if applicable
        orderDate: new Date().toISOString(),  // Order date for when the order was placed
      };

      // Send the order data to Sanity
      const orderResponse = await client.create(orderData);
      if (orderResponse) {
        // Order created successfully in Sanity

        // Step 2: Proceed with Stripe payment
        const stripe = await stripePromise;
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cartItems,
            formValues,
            total,
          }),
        });

        if (response.ok) {
          const { id } = await response.json();
          await stripe?.redirectToCheckout({ sessionId: id });
        } else {
          const error = await response.json();
          toast.error(error.message || 'Failed to create checkout session');
        }
      } else {
        toast.error('Failed to create order in Sanity');
      }
    } catch (error) {
      toast.error('An error occurred while processing your request.');
      console.error(error);
    }
  } else {
    toast.error('Please fill in all the fields');
  }
};


return (
    <AuthGuard>
        <div className={`${inter.className} min-h-screen bg-white`}>
            {/* Breadcrumb */}
            <div className="mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 py-3.5">
                        <Link 
                            href="/cart" 
                            className="text-[#666666] hover:text-black transition-colors text-sm"
                        >
                            Cart
                        </Link>
                        <ChevronRight className="w-4 h-4 text-[#666666]" />
                        <span className="text-sm">Checkout</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
                        <h2 className="text-lg sm:text-xl font-medium mb-4">Order Summary</h2>
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                                <div className="w-16 h-16 overflow-hidden rounded">
                                    {item.image && 
                                    <Image 
                                        src={urlFor(item.image).url()} 
                                        alt={item.name} 
                                        width={64} 
                                        height={64} 
                                        className="object-cover w-full h-full"
                                    />
                                    }
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                    <p className="text-xs text-[#666666]">Quantity: {item.quantity}</p>
                                </div>
                                <p className="text-sm">${item.price * item.quantity}</p>
                            </div>
                        ))}
                    </div>

                    {/* Billing Form */}
                    <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
                        <h2 className="text-xl sm:text-2xl font-medium mb-6">Billing Information</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input 
                                        id="firstName" 
                                        placeholder="Enter your first name" 
                                        value={formValues.firstName} 
                                        onChange={handleInputChange} 
                                    />
                                    {formErrors.firstName && <p className="text-red-500 text-sm">First name is required</p>}
                                </div>
                                <div>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input 
                                        id="lastName" 
                                        placeholder="Enter your last name" 
                                        value={formValues.lastName} 
                                        onChange={handleInputChange} 
                                    />
                                    {formErrors.lastName && <p className="text-red-500 text-sm">Last name is required</p>}
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="address">Address</Label>
                                <Input 
                                    id="address" 
                                    placeholder="Enter your address" 
                                    value={formValues.address} 
                                    onChange={handleInputChange} 
                                />
                                {formErrors.address && <p className="text-red-500 text-sm">Address is required</p>}
                            </div>
                            <div>
                                <Label htmlFor="city">City</Label>
                                <Input 
                                    id="city" 
                                    placeholder="Enter your city" 
                                    value={formValues.city} 
                                    onChange={handleInputChange} 
                                />
                                {formErrors.city && <p className="text-red-500 text-sm">City is required</p>}
                            </div>
                            <div>
                                <Label htmlFor="zipCode">Zip Code</Label>
                                <Input 
                                    id="zipCode" 
                                    placeholder="Enter your zip code" 
                                    value={formValues.zipCode} 
                                    onChange={handleInputChange} 
                                />
                                {formErrors.zipCode && <p className="text-red-500 text-sm">Zip code is required</p>}
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input 
                                    id="phone" 
                                    placeholder="Enter your phone number" 
                                    value={formValues.phone} 
                                    onChange={handleInputChange} 
                                />
                                {formErrors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    id="email" 
                                    placeholder="Enter your email address" 
                                    value={formValues.email} 
                                    onChange={handleInputChange} 
                                />
                                {formErrors.email && <p className="text-red-500 text-sm">Email is required</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 justify-between py-3 text-sm sm:text-base">
                            <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                                <span>Subtotal:</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                                <span>Discount:</span>
                                <span>-${discount}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                                <span>Shipping:</span>
                                <span className="text-[#666666]">Free</span>
                            </div>
                            <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                                <span>Total:</span>
                                <span>${total}</span>
                            </div>
                        </div>

                        <Button 
                            className="w-full h-10 sm:h-12 bg-blue-500 hover:bg-blue-800 rounded-sm mt-4 text-sm sm:text-base"
                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </Button>
                    </div>
                </div>
            </div>
        </div>
         </AuthGuard> 
    );
}
