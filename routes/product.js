const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getAllProductsStatic,
} = require("../controllers/product");

router.route("/").get(getAllProduct);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
