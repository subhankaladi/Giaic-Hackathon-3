// "use client"
// import React, { useEffect } from 'react';
// import L from 'leaflet'; // Import Leaflet library
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Map = () => {
  // useEffect(() => {
  //   // Initialize the map and set view to Gulshan-e-Hadeed
  //   const map = L.map('map').setView([24.8700, 67.3600], 15); // Correct coordinates for Gulshan-e-Hadeed

  //   // Add OpenStreetMap tiles
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   }).addTo(map);

  //   // Add a marker for Gulshan-e-Hadeed
  //   L.marker([24.8700, 67.3600])
  //     .addTo(map)
  //     .bindPopup('<b>Gulshan-e-Hadeed</b><br>Karachi, Pakistan.<br>PH2 Near Kaladi Mobile Shop')
  //     .openPopup();
  // }, []);

  return (
    <div className="flex h-full text-center justify-center flex-col items-center bg-gray-100 py-10">
      <h2 className="text-2xl font-bold items-center text-center justify-center text-gray-800 mb-6">
        Gulshan-e-Hadeed Location
      </h2>
   
    </div>
  );
};

export default Map;
