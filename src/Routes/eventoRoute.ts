import express from "express";
import eventoController from "../Controllers/eventoController";
import { jwtToken } from "../middleware/jwt";

const evento = new eventoController();
const middleware = new jwtToken();

const route = express.Router();

route.get("/evento", middleware.verificaToken, evento.index);
route.post("/criar-evento", middleware.verificaToken, evento.create);

export {route};