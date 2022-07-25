import express from "express";
import homeController from "../Controllers/homeController";

const home = new homeController();
const route = express.Router();

route.get("/", home.index);

export {route};