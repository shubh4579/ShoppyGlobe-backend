import jwt from "jsonwebtoken";

const accessToken = "shoppyglobe";

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, accessToken);
    req.user = decoded;
    console.log("Authenticated user:", decoded.userId);
    next();
  } catch (err) {
    console.error("Invalid token:", err.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}
