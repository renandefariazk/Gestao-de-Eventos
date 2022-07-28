import express from "express";
import historicoController from "../Controllers/historicoController";

const historico = new historicoController();
const route = express.Router();

route.get("/historico/:id", historico.show);
route.get("/historico", historico.index);

export { route };