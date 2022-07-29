import express from "express";
import historicoController from "../Controllers/historicoController";
import { jwtToken } from "../middleware/jwt";

const historico = new historicoController();
const middleware = new jwtToken();

const route = express.Router();

route.get("/historico/:id", middleware.verificaToken, historico.show);
route.get("/historico", middleware.verificaToken, historico.index);
route.post("/comprar", middleware.verificaToken, historico.create);

export { route };