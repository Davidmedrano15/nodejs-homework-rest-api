<<<<<<< HEAD
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");

=======
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();

global.basedir = __dirname;

const authRouter = require('./routes/api/auth');
const avatarsRouter = require('./routes/api/avatars');
const contactsRouter = require('./routes/api/contacts');

>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

<<<<<<< HEAD
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
=======
app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/auth', authRouter);
app.use('/users/avatars', avatarsRouter);
app.use('/api/contacts', contactsRouter);
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;
>>>>>>> 9f70099502c4cbf74521f71176743784492794f4
