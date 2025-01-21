import Image from "next/image";
import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          {/* Delivery Section */}
          <h3 className="text-lg font-medium mb-4">How would you like to get your order?</h3>
          <div className="mb-6">
            <button className="w-full p-4 border border-gray-300 rounded-lg text-left text-sm hover:bg-gray-100">
              Deliver It
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Contactless delivery will be available in some areas of the recipients PIN code. For more details on this
              service, including the limitations and options available, click{" "}
              <span className="underline cursor-pointer text-black">here</span>.
            </p>
          </div>

          {/* Address Section */}
          <h3 className="text-lg font-medium mb-4">Enter your name and address:</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="">State/Province</option>
              <option value="india">India</option>
            </select>
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Save this address to my profile
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Make this my preferred address
              </label>
            </div>

            {/* Contact Information */}
            <h3 className="text-lg font-medium mt-6 mb-4">Whats your contact information?</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />

            {/* PAN Section */}
            <h3 className="text-lg font-medium mt-6 mb-4">Whats your PAN?</h3>
            <input
              type="text"
              placeholder="PAN"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                I have read and agree to the Terms & Conditions
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                I agree to receive marketing updates
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg mt-4 hover:bg-gray-800"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Order Summary</h3>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹20,890.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery/Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-medium text-black">
              <span>Total</span>
              <span>₹20,890.00</span>
            </div>
          </div>

          {/* Product Items */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <Image width={200} height={200}
                src="/gr1.png"
                alt="Item 1"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4">
                <h4 className="text-sm font-medium">Nike Dri-FIT ADV TechKnit Ultra</h4>
                <p className="text-sm text-gray-500">
                  Mens Short-Sleeve Running Top
                </p>
                <p className="text-sm text-gray-500">₹3,895.00</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image width={200} height={200}
                src="/sh3.png"
                alt="Item 2"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4">
                <h4 className="text-sm font-medium">Nike Air Max 97 SE</h4>
                <p className="text-sm text-gray-500">Mens Shoes</p>
                <p className="text-sm text-gray-500">₹16,995.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
