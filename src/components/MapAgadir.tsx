
import { useEffect, useRef } from 'react';

const MapAgadir = () => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Create a simple map representation
    const renderMap = () => {
      const mapContainer = mapRef.current;
      if (!mapContainer) return;
      
      // This is a placeholder map implementation
      // In a real implementation, you would use a mapping library like Leaflet or Google Maps
      const canvas = document.createElement('canvas');
      canvas.width = mapContainer.clientWidth;
      canvas.height = mapContainer.clientHeight;
      mapContainer.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      
      // Draw map background
      ctx.fillStyle = '#1a1d2b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw some ocean
      ctx.fillStyle = '#2b3d6b';
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.5);
      
      // Draw land
      ctx.fillStyle = '#2b3d33';
      ctx.fillRect(0, canvas.height * 0.5, canvas.width, canvas.height * 0.5);
      
      // Draw Agadir marker
      ctx.fillStyle = '#9b87f5';
      ctx.beginPath();
      ctx.arc(canvas.width * 0.5, canvas.height * 0.5, 10, 0, 2 * Math.PI);
      ctx.fill();
      
      // Draw marker pulse effect
      ctx.strokeStyle = '#9b87f5';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.5, canvas.height * 0.5, 15, 0, 2 * Math.PI);
      ctx.stroke();
      
      // Draw text
      ctx.fillStyle = '#ffffff';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Agadir, Morocco', canvas.width * 0.5, canvas.height * 0.5 + 30);
    };
    
    renderMap();
    
    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild);
        }
      }
    };
  }, []);
  
  return (
    <div 
      ref={mapRef} 
      className="w-full h-full flex items-center justify-center text-gray-500"
    >
      <div className="text-center">
        <MapPin size={24} className="mx-auto mb-2" />
        <p>Agadir, Morocco</p>
      </div>
    </div>
  );
};

// This is just for TypeScript to recognize the MapPin component
function MapPin({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export default MapAgadir;
