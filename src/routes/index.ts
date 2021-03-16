import express from "express";
import test from "./token";

const routes = express.Router();

routes.use("/token", test);

export default routes;
