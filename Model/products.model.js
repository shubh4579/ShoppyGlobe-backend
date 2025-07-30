import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  image: String,
  title: String,
  brand: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  category: String,
  description: String,
  shipping: String,
  returnPolicy: String,
});

const productsModel = mongoose.model("products", productsSchema);

export default productsModel;
