const express = require('express');

const productsController = require('../controllers/products.controllers');

const router = express.Router();

router
  .route('/')
  .get(productsController.findAllProducts)
  .post(productsController.createProduct);

router
  .route('/:id')
  .get(productsController.findOneProducts)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = router;
