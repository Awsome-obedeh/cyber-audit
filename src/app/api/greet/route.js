import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  if (username === "admin" && password === "password") {
    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET || "mysecret",
      { expiresIn: "1h" }
    );

    const cookie = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true in prod
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    res.setHeader("Set-Cookie", cookie);

    return res.status(200).json({ message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
}