"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const API_KEY = "e7p87rpboHbyoHTcQQKKCaYA1iXtIdNrghisZlcO"; 

export default function NasaEpicPage() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || "2025-06-25";
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function fetchEpicImage() {
      try {
        const metadataRes = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${API_KEY}`
        );
        const metadata = await metadataRes.json();
        if (metadata.length > 0) {
          const img = metadata[0].image;
          const formattedDate = date.replaceAll("-", "/");
          const url = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${img}.png`;
          setImageUrl(url);
        }
      } catch (err) {
        console.error("Failed to fetch EPIC image:", err);
      }
    }

    fetchEpicImage();
  }, [date]);

  return (
    <div>
      <h1>NASA EPIC Image for {date}</h1>
      {imageUrl ? <img src={imageUrl} alt="EPIC from NASA" /> : <p>Loading image...</p>}
    </div>
  );
}
