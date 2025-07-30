import {
  addToCart,
  updateCartItem,
  deleteCartItem,
} from "../Controller/cart.controller.js";
import { authenticateToken } from "../Middleware/auth.middleware.js";

export function cartRoutes(app) {
  app.post("/cart", authenticateToken, addToCart);
  app.put("/cart/:id", authenticateToken, updateCartItem);
  app.delete("/cart/:id", authenticateToken, deleteCartItem);
}
