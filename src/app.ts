import express from "express";
import path from "path";
// import { indexRouter } from "../routes/index";
import { config } from "../config";

const app = express();
const DEFAULT_PORT = config.server.DEFAULT_PORT;

// ejs config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Route handler
// app.use("/", indexRouter);

// Start Express Server
app.listen(DEFAULT_PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started on port: ${ DEFAULT_PORT }` );
});