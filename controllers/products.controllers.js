exports.findAllProducts = (req, res) => {
  const { requesTime } = req;

  res.status().json({
    requesTime,
  });
};

exports.createProduct = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'hello create new product',
  });
};

exports.updateProduct = (req, res) => {
  res.json({
    message: 'hello update the product',
  });
};

exports.deleteProduct = (req, res) => {
  res.json({
    message: 'hello delete the product',
  });
};

exports.findOneProducts = (req, res) => {
  console.log(req.params.id);
  res.json({
    message: 'hello find product',
  });
};
