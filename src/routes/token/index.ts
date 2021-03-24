import express from "express";
import tokenController from "./token.controller";

const tokenRouter = express.Router();

tokenRouter.get("/", tokenController.get);
tokenRouter.get("/update", tokenController.set);

export default tokenRouter;
