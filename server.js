const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
app.use(cors());
const axios = require("axios");

const id = process.env.REACT_APP_ID;
const key = process.env.REACT_APP_API_KEY;

app.get("/testapi", async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${id}&app_key=${key}`
  );
  console.log("hits: ", response.data.hits);
  res.send("Express server is running!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
