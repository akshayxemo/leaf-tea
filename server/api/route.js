const router = require("express").Router();

const productController = require("../controller/productController");

// Product Routes
router.get("/products", productController.GET.AllProducts);
router.get("/product/:id", productController.GET.ByID);
router.get("/top-products", productController.GET.TopProducts);

module.exports = router;
