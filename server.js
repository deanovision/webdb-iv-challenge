const express = require("express");
const helmet = require("helmet");
const server = express();
const dishesRouter = require("./dishes/dishes-router.js");
const recipesRouter = require("./recipes/recipe-router");
server.use(express.json());
server.use(helmet());

server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

module.exports = server;
