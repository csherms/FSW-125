const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.use("/inventoryItems", require("./routes/thingFinder.js"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({
    errMsg: err.message,
  });
});

app.listen(8000, () => {
  console.log("Server launched on Port 9000.");
});
