require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(helmet());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const appRoutes = require("./src/routes/app-routes");
app.use("/", appRoutes);

const utilRoutes = require("./src/routes/util-routes");
app.use("/api", utilRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {});
