require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  } catch (errors) {
    console.log(errors);
  }
};

start();
