const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const movieRoute = require("./routes/movie");
const listRoute = require("./routes/list");
const app = express();

app.use(express.json());

dotenv.config({ path: "./config/config.env" });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected.");
  })
  .catch((error) => console.log(error));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(5000, () => {
  console.log("Server is running.");
});
