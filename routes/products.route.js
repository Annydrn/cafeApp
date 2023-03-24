const express = require('express');

const productsController = require('../controllers/products.controllers');
const productsMiddleware = require('../middlewares/products.middleware');

const router = express.Router();

router
  .route('/')
  .get(productsController.findAllProducts)
  .post(
    productsMiddleware.validProducts,
    productsController.createProduct
  );

router
  .route('/:id')
  .get(productsController.findOneProducts)
  .patch(
    productsMiddleware.validProducts,
    productsController.updateProduct
  )
  .delete(productsController.deleteProduct);

module.exports = router;
