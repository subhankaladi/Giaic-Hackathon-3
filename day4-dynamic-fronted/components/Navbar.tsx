"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { Jordan } from "./Jordan";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="w-full bg-white shadow">
      {/* Top Bar */}
      <div className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          {/* Help and Find Store */}
          <div>
            <Jordan/>
          </div>
          <div className="hidden md:flex space-x-4 text-center font-semibold">
            <Link
              href="/help"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Find Store
            </Link>
            <p className="text-sm">|</p>
            <Link
              href="/"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Help
            </Link>
            <p className="text-sm">|</p>

            <Link
              href="/sign-up"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Join us
            </Link>
            <p className="text-sm">|</p>

            <Link
              href="/login"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Sign in
            </Link>
          </div>
        
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Wishlist, Cart, and Nike (Mobile Hidden) */}
          {/* <div className="flex items-center space-x-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100"
              onClick={() => router.push("/wishlist")}
            >
              <Heart className="w-5 h-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100"
              onClick={() => router.push("/cart")}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/new"
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-600",
                pathname === "/new" && " text-red-600 underline font-semibold"
              )}
            >
              New
            </Link>
            <Link
              href="/men"
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-600",
                pathname === "/men" && "text-red-600 underline font-semibold"
              )}
            >
              Men
            </Link>
            <Link
              href="/women"
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-600",
                pathname === "/women" && "text-red-600 underline font-semibold"
              )}
            >
              Women
            </Link>
            <Link
              href="/kids"
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-600",
                pathname === "/kids" && "text-red-600 underline font-semibold"
              )}
            >
              Kids
            </Link>
            <Link
              href="/jordan"
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-600",
                pathname === "/jordan" && "text-red-600 underline font-semibold"
              )}
            >
              Jordan
            </Link>
           
          </div>

          {/* Help and Find Store for Desktop */}
          <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100"
                onClick={() => router.push("/wishlist")}
              >
                <Heart className="w-5 h-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100"
                onClick={() => router.push("/cart")}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute inset-x-0 top-16 bg-white shadow-md z-50 md:hidden">
          <nav className="px-4 py-6 space-y-4">
            <Link href="/new" className="block text-lg font-medium">
              New
            </Link>
            <Link href="/men" className="block text-lg font-medium">
              Men
            </Link>
            <Link href="/women" className="block text-lg font-medium">
              Women
            </Link>
            <Link href="/kids" className="block text-lg font-medium">
              Kids
            </Link>
            <Link href="/jordan" className="block text-lg font-medium">
              Jordan
            </Link>
           
            <Link href="/help" className="block text-lg font-medium">
              Help
            </Link>
            <Link href="/findstore" className="block text-lg font-medium">
              Find Store
            </Link>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100"
                onClick={() => router.push("/wishlist")}
              >
                <Heart className="w-5 h-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100"
                onClick={() => router.push("/cart")}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
