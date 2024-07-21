import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Mock hospital data
const hospitals = [
  { id: 1, name: 'Hospital A', latitude: 37.7749, longitude: -122.4194, url: 'https://example.com/hospital-a' },
  { id: 2, name: 'Hospital B', latitude: 37.7849, longitude: -122.4094, url: 'https://example.com/hospital-b' },
  { id: 3, name: 'Hospital C', latitude: 37.7649, longitude: -122.4294, url: 'https://example.com/hospital-c' },
  { id: 4, name: 'Hospital D', latitude: 37.7549, longitude: -122.4494, url: 'https://example.com/hospital-d' },
  { id: 5, name: 'Hospital E', latitude: 37.7449, longitude: -122.4594, url: 'https://example.com/hospital-e' },
  { id: 6, name: 'Hospital F', latitude: 37.7349, longitude: -122.4694, url: 'https://example.com/hospital-f' },
  { id: 7, name: 'Hospital G', latitude: 37.7249, longitude: -122.4794, url: 'https://example.com/hospital-g' },
];

const MapComponent = ({ userLocation }) => {
  return (
    <div className="map-container w-full max-w-4xl h-[600px] mx-auto mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        center={[userLocation.latitude, userLocation.longitude]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            position={[hospital.latitude, hospital.longitude]}
            icon={L.icon({
              iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
              iconSize: [30, 45],
              iconAnchor: [15, 45],
            })}
          >
            <Popup>
              <strong className="text-lg">{hospital.name}</strong><br />
              <a href={hospital.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                More Info
              </a><br />
              Coordinates: ({hospital.latitude}, {hospital.longitude})
            </Popup>
          </Marker>
        ))}
        <Marker
          position={[userLocation.latitude, userLocation.longitude]}
          icon={L.icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconSize: [30, 45],
            iconAnchor: [15, 45],
            className: 'user-location-marker',
          })}
        >
          <Popup className="text-gray-800">Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
