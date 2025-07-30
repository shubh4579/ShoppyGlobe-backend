import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../Model/user.model.js";

const accessToken = "shoppyglobe";

export async function registerUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log("User registered:", savedUser.email);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log("Registration failed:", err.message);
    res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, accessToken, {
      expiresIn: "1h",
    });
    console.log("Login successful:", user.email);

    res.json({ token });
  } catch (err) {
    console.error("Login failed:", err.message);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
}
