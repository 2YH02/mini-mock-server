const express = require("express");
const router = express.Router();
const ordersData = require("../database/orders");

router.post("/rooms/:id/orders", (req, res) => {
  const resData = {
    message: "객실 구매가 진행됩니다.",
    data: req.params.id,
  };
  res.send(resData);
});

router.post("/baskets/orders", (_, res) => {
  const resData = {
    message: "장바구니에서 주문 생성",
    data: 4,
  };
  res.send(resData);
});

router.get("/orders/:id", (_, res) => {
  res.send(ordersData.odersData);
});

router.delete("/orders/:id", (_, res) => {
  const resData = {
    message: "주문 취소",
    data: null,
  };
  res.send(resData);
});

module.exports = router;
