const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const memberRoute = require("./routes/memberRoute");
const accommodationRoute = require("./routes/accommodationRoute");
const ordersRoute = require("./routes/ordersRoute");
const basketRoute = require("./routes/basketRoute");
const paymentRoute = require("./routes/paymentRoute");
const wishRoute = require("./routes/wishRoute");

app.get("/", (_, res) => {
  res.send("hi express");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/members", memberRoute);
app.use("/api/v1/accommodations", accommodationRoute);
app.use("/api/v1", ordersRoute);
app.use("/api/v1", basketRoute);
app.use("/api/v1", paymentRoute);
app.use("/api/v1/wish", wishRoute);

app.listen("8123", () => {
  console.log("Server running on port 8123");
});
