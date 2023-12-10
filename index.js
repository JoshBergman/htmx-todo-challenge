require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.static(__dirname));
app.use(bodyParser.json());

const appRoutes = require("./src/routes/app-routes");
app.use("/", appRoutes);

const utilRoutes = require("./src/routes/util-routes");
app.use("/test", utilRoutes);

const port = process.env.PORT || 3000;
console.log(`Hosted on port: ${port}`);
app.listen(port, () => {});
