const jwt = require("jsonwebtoken");
const UnathError = require("../errors/unauth");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("hi");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnathError("no token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    console.log(decoded);
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnathError(err);
  }
};

module.exports = authMiddleware;
