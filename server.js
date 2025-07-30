import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/products.routes.js";
import { cartRoutes } from "./Routes/cart.routes.js";
import { authRoutes } from "./Routes/auth.routes.js";

const app = express();

app.use(express.json());
routes(app);
cartRoutes(app);
authRoutes(app);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("open", () => {
  console.log("Mongodb connection is successful");
});

db.on("error", () => {
  console.log("Mongodb connection is failed");
});
