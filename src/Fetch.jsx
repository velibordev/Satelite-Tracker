import React, { useState, useEffect } from "react";

function FetchListting() {
  const [Listing, setListing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      const json = await response.json();
      setListing(json);
    };
    fetchData();
  }, []);

  // Provjerite da li je Listing prazan prije nego što pokušate pristupiti svojstvima
  if (!Listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="return_data">
      <p>Latitude: {Listing.latitude}</p>
      <p>Longitude: {Listing.longitude}</p>
      <p>Altitude: {Listing.altitude}</p>
      <p>Velocity: {Listing.velocity}</p>
      <p>Visibility: {Listing.visibility}</p>
      <p>Units: {Listing.units}</p>
    </div>
  );
}

export default FetchListting;
