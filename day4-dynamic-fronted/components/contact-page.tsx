"use client"

import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { inter, poppins } from "@/app/ui/font"

export default function ContactPage() {
    return (
        <div className={`${inter.className} min-h-screen bg-white`}>
            {/* Breadcrumb */}
            <div className="my-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 py-3.5">
                        <Link 
                            href="/" 
                            className="text-[#666666] hover:text-black transition-colors text-sm"
                        >
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-[#666666]" />
                        <span className="text-sm">Contact</span>
                    </nav>
                </div>
            </div>

            {/* Contact Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-[400px,1fr] gap-16 lg:gap-32">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-16 mb-14">
                        {/* Call To Us Section */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    </svg>
                                </div>
                                <h2 className={`${poppins.className} text-xl font-medium`}>Call To Us</h2>
                            </div>
                            <div className="space-y-4 text-base">
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p>
                            </div>
                        </div>

                        {/* Write To Us Section */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h2 className={`${poppins.className} text-xl font-medium`}>Write To Us</h2>
                            </div>
                            <div className="space-y-4 text-base">
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Input 
                                type="text" 
                                placeholder="Your Name *" 
                                className="h-12 bg-[#F5F5F5] border-none rounded-sm placeholder:text-[#666666]"
                            />
                            <Input 
                                type="email" 
                                placeholder="Your Email *" 
                                className="h-12 bg-[#F5F5F5] border-none rounded-sm placeholder:text-[#666666]"
                            />
                            <Input 
                                type="tel" 
                                placeholder="Your Phone *" 
                                className="h-12 bg-[#F5F5F5] border-none rounded-sm placeholder:text-[#666666]"
                            />
                        </div>
                        <Textarea 
                            placeholder="Your Message" 
                            className="min-h-[218px] bg-[#F5F5F5] border-none rounded-sm placeholder:text-[#666666] resize-none p-4"
                        />
                        <div className="flex justify-end">
                            <Button 
                                className="bg-blue-500 hover:bg-blue-800 h-14 px-12 rounded-sm text-base"
                            >
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

    