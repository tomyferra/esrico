const router = require("express").Router();
let Product = require("../models/productos.model");

router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const productname = req.body.productname;
  const company = req.body.company;
  const price = Number(req.body.price);
  const rating = Number(req.body.rating);

  const newProduct = new Product({ productname, company, price, rating });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      product.productname = req.body.productname;
      product.company = req.body.company;
      product.price = Number(req.body.price);
      product.rating = Number(req.body.rating);

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
