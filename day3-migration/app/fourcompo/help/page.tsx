import Link from "next/link";
import React from "react";
import { FiPhone, FiMessageCircle, FiMail } from "react-icons/fi";
import { SiNike } from "react-icons/si";

const HELP = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 sm:px-8 lg:px-16 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full max-w-md mx-auto border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-gray-400 outline-none"
        />
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
            <li>Visa Electron, Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-gray-600 mb-4">
            If you enter your PAN information at checkout, youll be able to pay
            for your order with PayTM or a local credit or debit card.
          </p>
          <p className="text-gray-600 mb-6">
            Nike Members can store multiple debit or credit cards in their
            profile for faster checkout. If youre not already a Member,{" "}
            <a href="/fourcompo/joinus" className="text-blue-500 underline">
              join us
            </a>{" "}
            today.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800">
             <Link href="/fourcompo/joinus"> JOIN US </Link>
            </button>
            <button className="border border-black py-2 px-6 rounded-full hover:bg-gray-100">
              <Link href="/seccompo/first">SHOP NIKE</Link>
            </button>
          </div>

          {/* FAQs */}
          <h3 className="text-lg font-semibold mb-4">FAQs</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">
                Does my card need international purchases enabled?
              </h4>
              <p className="text-gray-600">
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
            </div>
            <div>
              <h4 className="font-medium">
                Can I pay for my order with multiple methods?
              </h4>
              <p className="text-gray-600">
                No, payment for Nike orders cant be split between multiple
                payment methods.
              </p>
            </div>
            <div>
              <h4 className="font-medium">
                What payment method is accepted for SNKRS orders?
              </h4>
              <p className="text-gray-600">
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div>
              <h4 className="font-medium">
                Why dont I see Apple Pay as an option?
              </h4>
              <p className="text-gray-600">
                To see Apple Pay as an option in the Nike App or on Nike.com,
                youll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account, and have a supported
                card in your Wallet. Additionally, youll need to use Safari to
                use Apple Pay on Nike.com.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-6">CONTACT US</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FiPhone size={24} className="text-gray-500" />
              <div>
                <p className="font-medium">000 800 919 0566</p>
                <p className="text-sm text-gray-600">
                  Products & Orders: 24 hours a day, 7 days a week
                </p>
                <p className="text-sm text-gray-600">
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiMessageCircle size={24} className="text-gray-500" />
              <p className="text-sm text-gray-600">
                24 hours a day, 7 days a week
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FiMail size={24} className="text-gray-500" />
              <p className="text-sm text-gray-600">
                Well reply within five business days
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SiNike size={24} className="text-gray-500" />
              <p className="text-sm text-gray-600">
                STORE LOCATOR Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HELP;
