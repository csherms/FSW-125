const express = require("express");
const trackEvents = express.Router();
const { v4: uuidv4 } = require("uuid");

const events = [
  {
    event: "Greyson's Soccer Game",
    description: "Playing soccer at the MEC",
    completed: true,
    date: 04042021,
    itemsNeeded: ["Water Bottle,", "Bag,"],
    _id: uuidv4(),
  },
  {
    event: "Birthday Party",
    description: "Ashton's 12th birthday party.",
    completed: false,
    date: 05282021,
    itemsNeeded: ["pizza, ", "cake, ", "presents"],
    _id: uuidv4(),
  },
  {
    event: "Going to Dave Matthews Concert!",
    description: "Going to see DMB at the Gorge! Whoop!",
    completed: false,
    date: 09032021,
    itemsNeeded: ["Tickets,", "Canopy", "Grill", "Beer"],
    _id: uuidv4(),
  },
  {
    event: "Fishing Trip with Kelley",
    description: "Going to Coffee Pot Rapids in Island Park to fish.",
    completed: false,
    date: 09132021,
    itemsNeeded: ["License,", "Pole,", "Tackle Box"],
    _id: uuidv4(),
  },
];

//Get & Post
trackEvents
  .route("/")
  .get((req, res) => {
    res.status(200);
    res.send(events);
  })
  .post((req, res) => {
    const newEvent = req.body;
    newEvent._id = uuidv4();
    events.push(newEvent);
    res.status(201).send(newEvent);
  });

//Get One
trackEvents.get("/:eventId", (req, res, next) => {
  const eventId = req.params.eventId;
  const foundEvent = events.find((event) => event._id === eventId);
  if (!foundEvent) {
    const error = new Error(`Item: ${eventId} not found.`);
    res.status(500);
    return next(error);
  }
  res.status(200).send(foundEvent);
});

//Delete
trackEvents.delete("/:eventId", (req, res) => {
  const eventId = req.params.eventId;
  const event = req.body;
  event._id = uuidv4();
  const eventIndex = events.findIndex((event) => event._id === eventId);
  events.splice(eventIndex, 1);
  res.status(201).send("Event deleted!");
});

//Update - Put
trackEvents.put("/:eventId", (req, res) => {
  const eventId = req.params.eventId;
  const event = req.body;
  event._id = uuidv4();
  const eventIndex = events.findIndex((event) => event._id === eventId);
  const updatedEvent = Object.assign(events[eventIndex], req.body);
  res.status(201).send(updatedEvent);
});

module.exports = trackEvents;
