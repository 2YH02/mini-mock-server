const express = require("express");
const router = express.Router();
const accommodationData = require("../database/accommodation");

router.get("/", (_, res) => {
  res.send(accommodationData.accommodationList);
});

router.get("/:id", (_, res) => {
  res.send(accommodationData.accommodation);
});

router.get("/:id/rooms", (_, res) => {
  res.send(accommodationData.roomList);
});

module.exports = router;
