const Product = require('../models/products.model');
exports.validProducts = (req, res, next) => {
  const { name, price, quantity } = req.body;

  if (!name) {
    return res.status(400).json({
      status: 'error',
      message: 'the name is required',
    });
  }

  if (!price) {
    return res.status(400).json({
      status: 'error',
      message: 'the price is required',
    });
  }

  if (!quantity) {
    return res.status(400).json({
      status: 'error',
      message: 'the quantity is required',
    });
  }
  next();
};

exports.validExistProduct = async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });

  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'The id this product not exist',
    });
  }
  //aca al req que es un objeto por lo tanto le agregaremos una propiedad
  //que se llama product y le colocaremos el objeto del producto que esta en
  //la constante declarada arriba(los objetos se llaman "obj." = "req."       )
  req.product = product;
  next();
};
