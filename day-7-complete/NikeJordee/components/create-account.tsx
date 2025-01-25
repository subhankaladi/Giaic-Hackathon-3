"use client"

import { Button } from "@/components/ui/button"
import { InputUnderline } from "@/components/ui/input-underline"
import Image from "next/image"
import Link from "next/link"
import { inter } from '@/app/ui/font'

export default function CreateAccount() {
    return (
        <div className={`${inter.className} min-h-screen grid lg:grid-cols-2 my-10`}>
            {/* Left Side - Image */}
            <div className="hidden lg:block relative bg-[#CBE4E8]">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <Image
                        src="/images/signup-image.png"
                        alt="Shopping Cart with Phone"
                        width={600}
                        height={600}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-[370px] space-y-8">
                    <div className="space-y-3">
                        <h1 className="text-[34px] font-medium tracking-tight">Create an account</h1>
                        <p className="text-base text-gray-600">Enter your details below</p>
                    </div>

                    <form className="space-y-6">
                        <InputUnderline 
                            label="Name"
                        />
                        <InputUnderline 
                            label="Email or Phone Number"
                        />
                        <InputUnderline 
                            type="password"
                            label="Password"
                        />
                        <Button 
                            type="submit" 
                            className="w-full h-[56px] bg-[#DB4444] hover:bg-[#DB4444]/90 rounded font-medium text-base"
                        >
                            Create Account
                        </Button>
                        <Button 
                            type="button"
                            variant="outline" 
                            className="w-full h-[56px] rounded font-medium border-gray-300 hover:bg-gray-50"
                        >
                            <Image
                                src="/images/logos/google.svg"
                                alt="Google"
                                width={24}
                                height={24}
                                className="mr-2"
                            />
                            Sign up with Google
                        </Button>
                    </form>

                    <div className="text-center text-base">
                        Already have account?{" "}
                        <Link href="/login" className="text-[#DB4444] hover:text-[#DB4444]/90 font-medium underline">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

