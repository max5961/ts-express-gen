import express from "express";
import HttpStatusCodes from "./common/HttpStatusCodes";

const app = express();

app.get("/", (req, res) => {
    res.status(HttpStatusCodes.OK).send("Hello World");
});

export default app;
