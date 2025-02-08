
import { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 46.16690444946289,
  lng: 5.568050861358643
};

const locations = [
  {
    name: "Lespinat Pauget Façades",
    position: {
      lat: 46.16690444946289,
      lng: 5.568050861358643
    }
  },
  {
    name: "Joël Pauget Et ses Fils",
    position: {
      lat: 46.16680444946289,
      lng: 5.567950861358643
    }
  }
];

const Map = () => {
  const [googleMapsKey, setGoogleMapsKey] = useState('');

  useEffect(() => {
    // For security, we'll ask users to input their API key in a form
    const storedKey = localStorage.getItem('googleMapsKey');
    if (storedKey) {
      setGoogleMapsKey(storedKey);
    } else {
      const key = prompt('Please enter your Google Maps API key (it will be stored locally):');
      if (key) {
        localStorage.setItem('googleMapsKey', key);
        setGoogleMapsKey(key);
      }
    }
  }, []);

  if (!googleMapsKey) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded-xl">
        <p className="text-gray-600">Veuillez entrer votre clé API Google Maps</p>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          styles: [
            {
              featureType: "all",
              elementType: "all",
              stylers: [
                { saturation: -100 }
              ]
            }
          ]
        }}
      >
        {locations.map((location, index) => (
          <MarkerF
            key={index}
            position={location.position}
            title={location.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
