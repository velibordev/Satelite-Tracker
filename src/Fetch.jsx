import React, { useState, useEffect } from "react";

function FetchListing() {
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544"
        );
        const json = await response.json();
        setListing(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Pozivamo fetchData odmah kako bismo osigurali da će podaci biti prikazani odmah
    fetchData();

    // Zatim koristimo setInterval kako bismo svakih 5 sekundi osvježili podatke
    const interval = setInterval(fetchData, 5000);

    // Očistite interval prije nego što komponenta bude unmountirana
    return () => clearInterval(interval);
  }, []);

  // Provjerite da li je Listing null prije nego što pokušate pristupiti svojstvima
  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="return_data">
      <p>Latitude: {listing.latitude}</p>
      <p>Longitude: {listing.longitude}</p>
      <p>Altitude: {listing.altitude}</p>
      <p>Velocity: {listing.velocity}</p>
      <p>Visibility: {listing.visibility}</p>
      <p>Units: {listing.units}</p>
    </div>
  );
}

export default FetchListing;
