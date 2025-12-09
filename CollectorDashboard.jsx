import React, { useState } from 'react';

const CollectorDashboard = () => {
  // These are "dummy" pickups to show what the app will look like
  const [pickups] = useState([
    { id: 1, address: "House 12, Road 5, Banani", type: "Plastic", weight: "5kg", status: "Pending" },
    { id: 2, address: "Flat 4B, Dhanmondi 27", type: "Paper", weight: "2kg", status: "Assigned" },
    { id: 3, address: "Shop 10, Gulshan 1", type: "E-Waste", weight: "1kg", status: "Pending" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-700">Collector Dashboard</h1>
        <p className="text-gray-600">Welcome back, Tashdid (Collector)</p>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">3</h3>
          <p className="text-gray-500">Active Pickups</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">12kg</h3>
          <p className="text-gray-500">Collected Today</p>
        </div>
      </div>

      {/* Pickup Queue List */}
      <h2 className="text-xl font-semibold mb-4">Pickup Queue</h2>
      <div className="space-y-4">
        {pickups.map((pickup) => (
          <div key={pickup.id} className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-gray-800">{pickup.address}</h3>
              <p className="text-sm text-gray-600">{pickup.type} • {pickup.weight}</p>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm">
              Accept
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectorDashboard;
