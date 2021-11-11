const express = require("express");
const helmet = require("helmet");

const server = express();
const usersRouter = require("./users/users_router");

server.use(helmet());
server.use(express.json());
server.use("/api/users", usersRouter);

// server.get("/", (req, res) => {
//   res.send("hello! Im alive!");
// });

module.exports = server;
