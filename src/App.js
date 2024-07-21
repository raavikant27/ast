import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import LocationFetcher from './components/LocationFetcher';
import MapComponent from './components/MapComponent';
import HospitalList from './components/HospitalList';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    setUser(credentialResponse);
    setIsLoading(true); // Start loading after login
  };

  const handleLocationFetched = (location) => {
    setLocation(location);
  };

  useEffect(() => {
    if (isLoading) {
      // Simulate loading time of 2-3 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500); // 2.5 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [isLoading]);

  return (
    <div className="App min-h-screen bg-gray-900 flex items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-lg bg-gray-800 shadow-2xl rounded-2xl p-8 flex flex-col items-center text-center space-y-8">
        {!user ? (
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-4xl font-extrabold text-gray-100 mb-4">Welcome to Health Finder</h1>
            <p className="text-xl text-gray-400 mb-8">Please log in with Google to get started</p>
            <div className="flex justify-center w-full">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log('Login Failed')}
                className="google-login-button"
              />
            </div>
          </div>
        ) : isLoading ? (
          <div className="loading-spinner"></div> // Show loading spinner
        ) : !location ? (
          <LocationFetcher onLocationFetched={handleLocationFetched} />
        ) : (
          <>
            <MapComponent userLocation={location} />
            <HospitalList userLocation={location} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
