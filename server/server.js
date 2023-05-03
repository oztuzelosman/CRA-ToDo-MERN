const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./db/connect");
require("dotenv").config();

const todo_router = require("./routes/todo_router");

app.use(express.json());
app.use(cors());
app.use("/api/v1/todos", todo_router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(8080, () => {
      console.log("listening for mongoDB");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
