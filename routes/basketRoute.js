const express = require("express");
const router = express.Router();
const basketData = require("../database/basket");

router.get("/baskets", (_, res) => {
  res.send(basketData.basketList);
});

router.put("/baskets", (_, res) => {
  const resData = {
    message: "장바구니 내 객실 삭제 완료",
    data: null,
  };
  res.send(resData);
});

router.post("/rooms/:id/baskets", (_, res) => {
  const resData = {
    message: "장바구니에 객실이 담겼습니다.",
    data: null,
  };
  res.send(resData);
});

module.exports = router;
