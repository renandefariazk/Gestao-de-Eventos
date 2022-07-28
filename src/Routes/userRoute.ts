import express from "express";
import userController from "../Controllers/userController";

const user = new userController();
const route = express.Router();

route.get("/user/:id", user.show);
route.post("/criar-conta", user.create);
route.post("/login", user.login);

export {route};