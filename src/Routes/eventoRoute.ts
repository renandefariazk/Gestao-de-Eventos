import express from "express";
import eventoController from "../Controllers/eventoController";

const evento = new eventoController();
const route = express.Router();

route.get("/evento", evento.index);

export {route};