
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
  return (
    <LoadScript googleMapsApiKey="AIzaSyCjLfERzEh-3CXVkihPddeMkk-38jr5N6Q">
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
