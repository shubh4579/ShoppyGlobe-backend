import { registerUser, loginUser } from "../Controller/auth.controller.js";

export function authRoutes(app) {
  app.post("/register", registerUser);
  app.post("/login", loginUser);
}
