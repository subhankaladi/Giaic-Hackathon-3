import Link from "next/link";
import React from "react";
import {FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">FIND A STORE</li>
              <li>
                <Link href="/sign-up">
                  BECOME A MEMBER
                </Link>
              </li>
              <li>
                <Link href="/sign-up">
                SIGN UP FOR EMAIL
                </Link>
              </li>
              <li>
                <Link href="/">
                US FEEDBACK
                </Link>
              </li>
              <li>
                <Link href="/">
                STUDENT DISCOUNTS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">GET HELP</li>
              <li>
                <Link href="/">
                Order Status
                </Link>
              </li>
              <li>
                <Link href="/">
                Delivery
                </Link>
              </li>
              <li>
                <Link href="/">
                Returns
                </Link>
              </li>
              <li>
                <Link href="/">
                Payment Options
                </Link>
              </li>
              <li>
                <Link href="/">
                Contact Us On Nike.com Inquiries
                </Link>
              </li>
              <li>
                <Link href="/">
                  Contact Us On All Other Inquiries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">ABOUT NIKE</li>
              <li>
                <Link href="/help">
                News
                </Link>
              </li>
              <li>
                <Link href="/help">
                Careers
                </Link>
              </li>
              <li>
                <Link href="/help">
                Investors
                </Link>
              </li>
              <li>
                <Link href="/help">
                Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4 text-xl">
            <Link href="https://www.linkedin.com/in/subhan-kaladi-6242bb31b/" target="_blank">
              <FaLinkedin className="hover:text-white cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com/subhanallahkaladi" target="_blank">
              <FaFacebookF className="hover:text-white cursor-pointer" />
            </Link>
            <Link href="https://www.youtube.com/@subhankaladi" target="_blank">
              <FaYoutube className="hover:text-white cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/subhan_kaladi/" target="_blank">
              <FaInstagram className="hover:text-white cursor-pointer" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">
            &copy; 2023 Nike, Inc. All Rights Reserved
          </p>
          <div className="hidden sm:flex text-sm space-x-6">
            <Link href="/" className="hover:text-white">
              Guides
            </Link>
            <Link href="/" className="hover:text-white">
              Terms of Sale
            </Link>
            <Link href="/" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/" className="hover:text-white">
              Nike Privacy Policy
            </Link>
          </div>
          <p className="text-sm mt-4 sm:mt-0">Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
