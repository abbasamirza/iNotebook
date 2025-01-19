const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./backend/.env" });

connectToMongo();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening on http://localhost:${port}`);
});
