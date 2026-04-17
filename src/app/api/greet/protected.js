import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const { authToken } = req.cookies;

  if (!authToken) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(
      authToken,
      process.env.JWT_SECRET || "mysecret"
    );

    return res.status(200).json({
      message: "Access granted",
      user: decoded,
    });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}