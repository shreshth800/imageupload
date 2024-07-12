import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (user, res) => {
  const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // No XSS
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // No CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
