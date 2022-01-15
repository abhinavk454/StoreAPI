require("dotenv").config();
const Product = require("./models/product");
const connectDB = require("./db/connect");
const dataProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    // await Product.insertMany(dataProducts);
    await Product.create(dataProducts);
    console.log("success...");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
