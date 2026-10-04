const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
