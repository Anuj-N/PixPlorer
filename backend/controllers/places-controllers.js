const HttpError = require("../models/http-error");

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

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }

  res.json({ place });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
