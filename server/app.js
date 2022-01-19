const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config();

app.use(cors()); //to be able to use the frontend incoming calls
app.use(express.json()); //to be able send it in json format
app.use(express.urlencoded({ extended: false })); // not gonna send any form data

//create
app.post("/insert", (request, response) => {});

//read
app.get("/getAll", (request, response) => {
  console.log("test");
});

//update
app.put("/update", (request, response) => {});

//delete
app.delete("/delete", (request, response) => {});

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on port: ${process.env.PORT}`);
});
