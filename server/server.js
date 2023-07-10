const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const router = require("./routes/router")

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use("/user",router);


app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running");
});
