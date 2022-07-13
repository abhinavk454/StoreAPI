require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const productRouter = require("./routes/product");

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/", (req, res) => {
//   res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
// });

app.use(productRouter);

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
