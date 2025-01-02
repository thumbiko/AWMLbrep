// dummyData.js

// Assets
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import image4 from "../image4.jpg";
import image5 from "../image5.jpg";
import image6 from "../image6.jpg";
import image7 from "../image7.jpg";
import image8 from "../image8.jpg";
import image9 from "../image9.jpg";
import image10 from "../image10.jpg";
import image11 from "../image11.jpg";
import image12 from "../image12.jpg";
import image13 from "../image13.jpg";
import image14 from "../image14.jpg";
import image15 from "../image15.jpg";
import image16 from "../image16.jpg";

const myListings = [
  {
    _id: "1",
    title: "Luxury Home in Ballsbridge",
    description:
      "A spacious, modern home located in the prestigious Ballsbridge area. Features a large garden and proximity to top amenities.",
    price: 1200000,
    propertyStatus: "Sale",          // or "Rent"
    rental_frequency: "",            // if propertyStatus is "Sale", you can leave this empty
    _type: "House",
    location: {
      coordinates: [53.326, -6.231]  // Approx. Ballsbridge lat/long
    },
    picture1: image1,
  },
  {
    _id: "2",
    title: "Dalkey Mansion by the Coast",
    description:
      "Overlooking Dublin Bay, this stunning mansion offers panoramic sea views, high-end finishes, and unrivaled exclusivity.",
    price: 2500000,
    propertyStatus: "Sale",
    rental_frequency: "",
    _type: "House",
    location: {
      coordinates: [53.274, -6.102]  // Approx. Dalkey lat/long
    },
    picture1: image1,
  },
  {
    _id: "3",
    title: "Charming Apartment in Malahide",
    description:
      "A stylish apartment located within walking distance of Malahide village, offering convenience and coastal living.",
    price: 2200,
    propertyStatus: "Rent",          // For a rental property
    rental_frequency: "month",       // e.g., €2200/month
    _type: "Apartment",
    location: {
      coordinates: [53.451, -6.154]  // Approx. Malahide lat/long
    },
    picture1: image10,
  },
  {
    _id: "4",
    title: "Modern Office in Castleknock",
    description:
      "Ideal for a small business, this sleek office space in Castleknock features great transport links and modern facilities.",
    price: 3500,
    propertyStatus: "Rent",
    rental_frequency: "month",
    _type: "Office",
    location: {
      coordinates: [53.385, -6.377]  // Approx. Castleknock lat/long
    },
    picture1: image2,
  },
  {
    _id: "5",
    title: "Foxrock Family House",
    description:
      "A beautiful family home situated in Foxrock with generous living areas, a large backyard, and easy access to top schools.",
    price: 1850000,
    propertyStatus: "Sale",
    rental_frequency: "",
    _type: "House",
    location: {
      coordinates: [53.274, -6.173]  // Approx. Foxrock lat/long
    },
    picture1: image1,
  },
];

export default myListings;
