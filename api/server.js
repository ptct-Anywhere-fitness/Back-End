const express = require("express");
const helmet = require("helmet");

const server = express();
const usersRouter = require("./users/users_router");
const classesRouter = require("./classes/classes_router");

server.use(helmet());
server.use(express.json());
server.use("/api/users", usersRouter);
server.use("/api/classes", classesRouter);

// server.get("/", (req, res) => {
//   res.send("hello! Im alive!");
// });

module.exports = server;
