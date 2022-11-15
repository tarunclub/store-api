require("dotenv").config();

const express = require("express");
const app = express();

// imports
const products = require("./routes/products");

// middlewares
app.use(express.json());

// routes
app.use("/api/v1/products", products);

module.exports = app;
