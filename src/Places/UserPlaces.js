import React from "react";
import PlacesList from "./Components/PlacesList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Azrieli buildings",
    description: "3 buildings in the center of tel aviv",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Azriely_Center.jpg",
    adress: "menachem begin 125 tel aviv",
    location: { lat: 32.0740814, lng: 34.7947777 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Azrieli buildings",
    description: "3 buildings in the center of tel aviv",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Azriely_Center.jpg",
    adress: "menachem begin 125 tel aviv",
    location: { lat: 32.0740814, lng: 34.7947777 },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlacesList items={loadedPlaces} />;
};

export default UserPlaces;
