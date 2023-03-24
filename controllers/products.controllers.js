//!esta es la base de datos

const Product = require('../models/products.model');

exports.findAllProducts = (req, res) => {
  const { requesTime } = req;

  res.status(200).json({
    requesTime,
  });
};
//201
exports.createProduct = async (req, res) => {
  const {
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  } = req.body;

  const product = await Product.create({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  res.status(201).json({
    message: 'hello create new product',
    product,
  });
};
//200
exports.updateProduct = (req, res) => {
  res.json({
    message: 'hello update the product',
  });
};
//200
exports.deleteProduct = (req, res) => {
  res.json({
    message: 'hello delete the product',
  });
};
//200
exports.findOneProducts = (req, res) => {
  console.log(req.params.id);
  res.json({
    message: 'hello find product',
  });
};
