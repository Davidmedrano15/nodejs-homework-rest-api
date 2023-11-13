const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");


const contactsRouter = require("./routes/api/contacts");


const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

mongoose.connect("mongodb+srv://dbContacts:Miramira15@atlascluster.pdz5vd2.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error de conexión a MongoDB:", error);
});

db.once("open", () => {
  console.log("Conexión a MongoDB establecida correctamente");
});

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
