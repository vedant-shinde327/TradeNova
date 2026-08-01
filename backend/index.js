const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { HoldingModel } = require("./models/HoldingsModel");
const {PositionModel} = require("./models/PositionModel")

const app = express();

//temporary route
// app.get("/addPositions", (req, res) =>{
//   let tempPositions = 
//     [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPositions.forEach((item) => {
//   let newPositions = new PositionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//   });

//   newPositions.save();
// });

//   res.send("positions saved to db");
// });


const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection failed");
    console.error(err);
  });
