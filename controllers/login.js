// const CustomAPIError = require("../errors/custom-error");
const { BadRequestError } = require("../errors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
//login function
const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  // res.send("temp login ");

  //there are 3 big ways to verify username/password
  //mongoose validation
  //JOI
  //Controller checking
  if (!username || !password) {
    throw new BadRequestError("please provide email and password");
  }
  //this is just an example in the future this will come from MONGODB
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ status: 200, msg: "success - User Created", token });
};

//dashboard function returns a josn its sucess

const dashboard = (req, res) => {
  // throw new CustomAPIError("testing api error", 505);
  res.json({
    status: 200,
    msg: "success",
    secret: "secret number",
  });
};

module.exports = {
  dashboard,
  login,
};
