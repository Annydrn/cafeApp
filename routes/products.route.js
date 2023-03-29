const express = require('express');

const productsController = require('../controllers/products.controllers');
const productsMiddleware = require('../middlewares/products.middleware');

const router = express.Router();

router
  .route('/')
  .get(productsController.findAllProducts)
  .post(productsMiddleware.validProducts, productsController.createProduct);

router
  .route('/:id')
  //al get le agregamos el middleware de producto y la funcion que valida si existe o no el producto
  .get(productsMiddleware.validExistProduct, productsController.findOneProduct)
  .patch(
    productsMiddleware.validProducts,
    //al patch tambien le agregamos el middleware de producto y la funcion que valida si existe o no el producto
    productsMiddleware.validExistProduct,
    productsController.updateProduct
  )
  .delete(
    //al delete tambien le agregamos el middleware de producto y la funcion que valida si existe o no el producto
    productsMiddleware.validExistProduct,
    productsController.deleteProduct
  );
//agregando la funcion validExistProduct hacemos que el codigo valide el producto antes
// de actualizar o modificar sin tener la necesidad de validar con codigo cada una de
//las rutas si no que lo hacemos directamente reciclando codigo mediante una funcion
module.exports = router;
