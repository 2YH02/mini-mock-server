const express = require("express");
const router = express.Router();
const paymentData = require("../database/payment");

router.get("/payment", (_, res) => {
  res.send(paymentData.paymentList);
});

router.get("/payment/:id", (_, res) => {
  res.send(paymentData.paymentDetail);
});

router.post("/orders/:id/payments", (req, res) => {
  const resData = {
    message: "결제 완료",
    data: req.params.id,
  };
  res.send(resData);
});

module.exports = router;
