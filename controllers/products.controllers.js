exports.findAllProducts = (req, res) => {
  const { requesTime } = req;

  res.status(200).json({
    requesTime,
  });
};
//201
exports.createProduct = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'hello create new product',
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
