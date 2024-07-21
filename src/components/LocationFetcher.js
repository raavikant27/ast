import React, { useEffect, useState } from 'react';

const Spinner = () => (
  <div className="flex items-center justify-center h-full">
    <div className="loading-spinner"></div>
  </div>
);

const LocationFetcher = ({ onLocationFetched }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationFetched({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          console.error('Error fetching location', error);
          setError('Failed to fetch location. Please try again.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, [onLocationFetched]);

  return (
    <div className="location-fetcher bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto mt-8 flex flex-col items-center">
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-600 font-semibold text-lg">{error}</p>
      ) : (
        <p className="text-gray-800 text-lg font-semibold">Location fetched successfully! You can now view nearby hospitals.</p>
      )}
    </div>
  );
};

export default LocationFetcher;
