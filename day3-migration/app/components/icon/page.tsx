import React from 'react';

const ICON = () => {
  return (
    <div className="w-full flex justify-center py-8" >
      <div className="grid grid-cols-4 gap-8 w-10/12">

        <div>
          <h3 className="text-lg font-medium mb-4">Icons</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Shoes</h3>
          <ul className="space-y-2 text-gray-600">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Clothing</h3>
          <ul className="space-y-2 text-gray-600">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Kids</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Infant & Toddler Shoes</li>
            <li>Kids Shoes</li>
            <li>Kids Jordan Shoes</li>
            <li>Kids Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ICON;
