import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Victoria Memorial",
    description:
      "Elegant, domed, white marble museum, opened in 1921, housing displays on the history of Kolkata.",
    imageUrl:
      "https://cdn.britannica.com/74/127174-050-4E634E93/Victoria-Memorial-Hall-Kolkata-India-West-Bengal.jpg",
    address:
      "Victoria Memorial Hall, 1, Queens Way, Maidan, Kolkata, West Bengal 700071",
    location: {
      lat: 22.5450315,
      lng: 88.3406948,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Baga Beach",
    description:
      "Famous beach & recreation area with water sports, eateries, bars, nightspots & a festive atmosphere",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=800&h=-1&s=1",
    address: "Calangute, Goa 403519",
    location: {
      lat: 15.5567185,
      lng: 73.7507686,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces}></PlaceList>;
};

export default UserPlaces;
