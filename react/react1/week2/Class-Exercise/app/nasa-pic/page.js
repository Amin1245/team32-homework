//'use client' 

const API_KEY = "e7p87rpboHbyoHTcQQKKCaYA1iXtIdNrghisZlcO"; 

export default async function NasaPicturePage() {
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch NASA picture: ${res.statusText}`);
    }

    const data = await res.json();

    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
        <p>{data.explanation}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching NASA data:", error);
    return (
      <div>
        <h1>Error loading NASA picture</h1>
        <p>There was an issue fetching the data. Please try again later.</p>
        <p>Details: {error.message}</p>
      </div>
    );
  }
}