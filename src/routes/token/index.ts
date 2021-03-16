import express from "express";
import tokenController from "./token.controller";

const test = express.Router();

test.get("/", tokenController.get);

export default test;
