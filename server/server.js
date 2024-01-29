const express = require("express");
const app = express();
const cors = require("cors");
const { readdirSync } = require("fs");
const { PORT } = require("./common");
const mongo = require("./mongo");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

mongo
  .connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  });
