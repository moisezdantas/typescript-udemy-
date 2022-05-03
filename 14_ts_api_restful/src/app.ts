// load variables
require("dotenv").config();
import express from "express";
import config from "config";
import router from "./router";
import db from "../config/bd";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();

//Json middleware
app.use(express.json());
//morgan middleware
app.use(morganMiddleware);

//routes
app.use("/api/", router);

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
