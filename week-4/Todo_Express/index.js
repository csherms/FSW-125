const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.use("/todoItems", require("./todos/todoList.js"));

app.listen(3000, () => {
     console.log("Server launched on port 3000.");
});
