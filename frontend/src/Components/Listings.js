// Listings.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import myListings from "./Assets/Data/dummyData"; // Adjust path as necessary
import { Icon } from "leaflet";

// Import custom marker icons from ./Assets/MapIcons
import houseMarkerImg from "./Assets/MapIcons/house.png";
import apartmentMarkerImg from "./Assets/MapIcons/apartment.png";
import officeMarkerImg from "./Assets/MapIcons/office.png";

// Import the Header component
import Header from "./Header";

// Create custom Leaflet icons
const houseIcon = new Icon({
  iconUrl: houseMarkerImg,
  iconSize: [40, 40],
});

const apartmentIcon = new Icon({
  iconUrl: apartmentMarkerImg,
  iconSize: [40, 40],
});

const officeIcon = new Icon({
  iconUrl: officeMarkerImg,
  iconSize: [40, 40],
});

function Listings() {


  fetch("http://localhost:8000/api/listings/").then(response=> response.json()).then(data=>console.log(data))
  // Center around Dublin for Leinster view
  const mapCenter = [53.3498, -6.2603];
  const zoomLevel = 10;

  // Format price with thousand separators
  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Decide which icon to display
  const getMarkerIcon = (type) => {
    if (type === "House") return houseIcon;
    if (type === "Apartment") return apartmentIcon;
    if (type === "Office") return officeIcon;
    return houseIcon; // fallback
  };

  return (
    <>
      {/* Render the Header at the top */}
      <Header />

      <div style={{ display: "flex", width: "100%" }}>
        {/* Left side: property listings as MUI Cards */}
        <div style={{ width: "40%", padding: "1rem", overflowY: "auto" }}>
          <h2>Property Listings (Leinster)</h2>

          {myListings.map((listing) => {
            const formattedPrice = formatPrice(listing.price);

            const subheader =
              listing.propertyStatus === "Sale"
                ? `€${formattedPrice}`
                : `€${formattedPrice}/${listing.rental_frequency}`;

            return (
              <Card
                key={listing._id}
                style={{
                  margin: "0.5rem",
                  border: "1px solid black",
                  position: "relative",
                }}
              >
                <CardHeader title={listing.title} subheader={subheader} />
                <div style={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={listing.picture1}
                    alt={listing.title}
                    style={{
                      height: "20rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {listing.description.substring(0, 200)}...
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Right side: Leaflet Map with custom marker icons */}
        <div style={{ width: "60%", height: "80vh", marginTop: "0.5rem" }}>
          <MapContainer
            center={mapCenter}
            zoom={zoomLevel}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">
                OpenStreetMap
              </a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {myListings.map((listing) => {
              const [lat, lng] = listing.location.coordinates;
              return (
                <Marker
                  key={listing._id}
                  position={[lat, lng]}
                  icon={getMarkerIcon(listing._type)}
                >
                  <Popup>
                    <strong>{listing.title}</strong>
                    <br />
                    {listing.description.substring(0, 100)}...
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Listings;
