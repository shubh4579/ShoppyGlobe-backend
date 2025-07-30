import {
  createProduct,
  fetchProducts,
  fetchProductsById,
} from "../Controller/products.controller.js";

export function routes(app) {
  app.post("/products", createProduct);
  app.get("/products", fetchProducts);
  app.get("/products/:id", fetchProductsById);
}
