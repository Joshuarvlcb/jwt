// app.get("dashboard", (req, res) => {});

// app.post("login", (req, res) => {});

// app.listen(3000, () => {
//   console.log("hello world");
// });
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const routes = require("./routes/login");
const connectDB = require("./db/connect");

app
  .use(express.static("./public"))
  .use(express.urlencoded([{ extended: false }, express.json()]))
  .use("/api/v1", routes);
//   .use(errorHandlerMiddleWare);
//  .use(notFoundMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(port,() => {
        console.log(`server is listening at port ${port}`);
    })
  } catch (err) {
      console.error(err);
  }
};
