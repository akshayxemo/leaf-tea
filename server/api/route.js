const router = require("express").Router();

const productController = require("../controller/productController");

// Product Routes
router.get("/products", productController.GET.AllProducts);
router.get("/product/:id", productController.GET.ByID);

module.exports = router;
