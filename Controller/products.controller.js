import mongoose from "mongoose";
import productsModel from "../Model/products.model.js";

export function fetchProductsById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product Id" });
  }

  productsModel
    .findById(id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }
      res.json(product);
    })

    .catch((err) => {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: err.message });
    });
}

export function createProduct(req, res) {
  const {
    image,
    title,
    brand,
    price,
    discountPercentage,
    rating,
    category,
    description,
    shipping,
    returnPolicy,
  } = req.body;
  const newProduct = new productsModel({
    image: image,
    title: title,
    brand: brand,
    price: price,
    discountPercentage: discountPercentage,
    rating: rating,
    category: category,
    description: description,
    shipping: shipping,
    returnPolicy: returnPolicy,
  });
  newProduct.save().then((data) => {
    if (!data) {
      return res.status(400).json({ message: "something went wrong" });
    }

    res.send(data);
  });
}

export function fetchProducts(req, res) {
  productsModel
    .find()
    .then((data) => {
      if (!data) {
        return res.status(400).send("something went wrong");
      }
      console.log("Products fetched successfully");
      res.send(data);
    })
    .catch((err) =>
      res.status(500).json({ message: "Internal server error" || err.message })
    );
}
