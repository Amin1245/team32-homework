"use client";

import { useState, useEffect } from 'react';

const API_KEY = "e7p87rpboHbyoHTcQQKKCaYA1iXtIdNrghisZlcO"; 
const MARS_ROVER_API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

export default function MarsRoverPhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarsPhotos = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${MARS_ROVER_API_URL}?sol=1000&api_key=${API_KEY}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch Mars Rover photos: ${res.statusText}`);
        }

        const data = await res.json();
        setPhotos(data.photos || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarsPhotos();

  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading Mars Rover Photos...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error loading Mars Rover Photos</h1>
        <p>There was an issue: {error}.</p>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div>
        <h1>No Mars Rover Photos Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>NASA Mars Rover Photos (Curiosity - Sol 1000)</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <img
              src={photo.img_src}
              alt={`Mars Rover Photo ${photo.id}`}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <p><strong>Rover:</strong> {photo.rover.name}</p>
            <p><strong>Camera:</strong> {photo.camera.full_name}</p>
            <p><strong>Earth Date:</strong> {photo.earth_date}</p>
            <p><strong>Sol:</strong> {photo.sol}</p>
          </div>
        ))}
      </div>
    </div>
  );
}