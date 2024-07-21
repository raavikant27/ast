import React from 'react';

// Mock hospital data with more entries
const hospitals = [
  { id: 1, name: 'Hospital A', latitude: 37.7749, longitude: -122.4194, url: 'https://example.com/hospital-a' },
  { id: 2, name: 'Hospital B', latitude: 37.7849, longitude: -122.4094, url: 'https://example.com/hospital-b' },
  { id: 3, name: 'Hospital C', latitude: 37.7649, longitude: -122.4294, url: 'https://example.com/hospital-c' },
  { id: 4, name: 'Hospital D', latitude: 37.7549, longitude: -122.4494, url: 'https://example.com/hospital-d' },
  { id: 5, name: 'Hospital E', latitude: 37.7449, longitude: -122.4594, url: 'https://example.com/hospital-e' },
  { id: 6, name: 'Hospital F', latitude: 37.7349, longitude: -122.4694, url: 'https://example.com/hospital-f' },
  { id: 7, name: 'Hospital G', latitude: 37.7249, longitude: -122.4794, url: 'https://example.com/hospital-g' },
];

const HospitalList = ({ userLocation }) => {
  return (
    <div className="hospital-list bg-white p-8 rounded-2xl shadow-lg mt-8 w-full max-w-4xl mx-auto transition-transform transform hover:scale-105 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Nearby Hospitals</h2>
      <ul className="list-disc pl-5 space-y-3">
        {hospitals.map(hospital => (
          <li key={hospital.id} className="text-gray-700">
            <a href={hospital.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              <strong>{hospital.name}</strong>
            </a> - Coordinates: ({hospital.latitude}, {hospital.longitude})
          </li>
        ))}
      </ul>
      <p className="mt-6 text-gray-800 text-lg font-semibold">Your Location: ({userLocation.latitude}, {userLocation.longitude})</p>
    </div>
  );
};

export default HospitalList;
