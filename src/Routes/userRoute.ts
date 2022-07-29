import express from "express";
import userController from "../Controllers/userController";
import { jwtToken } from "../middleware/jwt";

const user = new userController();
const middleware = new jwtToken();

const route = express.Router();

route.get("/user/:id", middleware.verificaToken, user.show);
route.post("/criar-conta", user.create);
route.post("/login", user.login);
route.post("/add-saldo", middleware.verificaToken, user.addSaldo);

export {route};