import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with a public token (vous devrez remplacer ce token par le vôtre)
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXRpaHVnbyIsImEiOiJjbTZtY3kxaWIwaWR3Mm1zOGQ3b3NrZHM2In0.xUHWE1dwHF3aXfywnST-jg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [5.568050861358643, 46.16690444946289], // Port coordinates
      zoom: 13,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for the business location
    new mapboxgl.Marker()
      .setLngLat([5.568050861358643, 46.16690444946289]) // Update with actual coordinates
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
