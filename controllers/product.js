const Product = require("../models/product");

//get all static products

const getAllProductsStatic = (req, res) => {
  const product = Product.find({ price: { $gt: 30 } })
    .sort("price")
    .select("name price");
  res.status(200).json({ product, nbHits: product.length });
};

//get all product

const getAllProduct = () => {};

//export the controllers

module.exports = {
  getAllProduct,
  getAllProductsStatic,
};
