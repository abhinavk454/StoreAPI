const res = require("express/lib/response");
const Product = require("../models/product");

//get all static products

const getAllProductsStatic = async (req, res) => {
  // res.send(200).json({ message: "Hello in the static method" });
  const product = await Product.find({ price: { $gt: 30 } })
    .sort("price")
    .select("name price");
  console.log(product);
  res.status(200).json({ product });
  res.end();
};

//get all product

const getAllProduct = (req, res) => {
  res.send("Hello from product route");
  res.end();
};

//export the controllers

module.exports = {
  getAllProduct,
  getAllProductsStatic,
};
