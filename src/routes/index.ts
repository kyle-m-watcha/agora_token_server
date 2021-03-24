import express from "express";
import token from "./token";

const routes = express.Router();

routes.use("/token", token);

export default routes;
