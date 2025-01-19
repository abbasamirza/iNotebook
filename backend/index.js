require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

// Dynamically include routes from routes folder in the format /api/<file_name>/<route>
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
  if (file.endsWith(".js")) {
    const routeName = file.replace(".js", "");
    const route = require(`./routes/${file}`);
    app.use(`/api/${routeName}`, route);
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
