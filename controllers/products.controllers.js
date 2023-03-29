//!esta es la base de datos

const Product = require('./../models/products.model');

exports.findAllProducts = async (req, res) => {
  const products = await Product.findAll({
    where: {
      status: true,
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'The query has been done successfully',
    //esto es para que cuando haga mi peticion en postman
    //salga ej=results:3 (y asi en el front veo cuantos productos hay)
    results: products.length,
    products,
  });
};

exports.createProduct = async (req, res) => {
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

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
    status: 'success',
    message: 'The product has been created!',
    product,
  });
};
//en update enviamos un id por cada producto
exports.updateProduct = async (req, res) => {
  const { product } = req;
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  //aqui en ves de colocar id:id solo ponemos id, ya que el valor de la propiedad
  //y del valor es igual

  //despues hacemos un if para validar la informacion y dar respuesta
  //en caso de que no haya nada

  //la informacion que ponemos en postman en req.body es la que nos da el cliente y la
  //colocamos aca en el update para saber que es lo que actualizaremos o crearemos
  //le colocamos un await para que el codigo espere a que llegue la informacion de la bd
  await product.update({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  res.status(200).json({
    status: 'success',
    message: 'The product has been updated',
  });
};

exports.deleteProduct = async (req, res) => {
  //traer id de req.params
  const { id } = req.params;
  //buscar el producto a actualizar
  const product = await Product.finOne({
    where: {
      id,
      status: true,
    },
  });
  //validar si el producto existe y si no enviar error
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'The product not found',
    });
  }
  //utilizar product.update y actualizar solo el estado a false
  // await product.update({
  //   status: false,
  // });
  //enviar la respuesta
  res.status(200).json({
    status: 'success',
    message: ' The product has been delete',
  });
  exports.findOneProduct = async (req, res) => {
    const { product } = req;
    //debemos colocar un return antes de las respuestas para que se muestren
    return res.status(200).json({
      status: 'success',
      message: 'The query has been done successfully',
      product,
    });
  };
};
