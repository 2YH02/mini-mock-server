const express = require("express");
const router = express.Router();
const wishData = require("../database/wish");

router.post("/:id", (_, res) => {
  const resData = {
    message: "좋아요 성공",
    data: null,
  };
  res.send(resData);
});

router.delete("/:id", (_, res) => {
  const resData = {
    message: "좋아요 취소",
    data: null,
  };
  res.send(resData);
});

router.get("/", (_, res) => {
  res.send(wishData.wishList);
});

module.exports = router;
