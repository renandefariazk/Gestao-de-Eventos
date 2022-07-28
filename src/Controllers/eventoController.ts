import { Request, Response } from "express";
// import { Evento } from "../Models/Eventos";

export default class eventoController {
  constructor(){
    this.index = this.index.bind(this);
  }
  async index(req:Request, res:Response){
    try{
      // const testeEvento = await Evento.findAll();
      // console.log("testeEvento", testeEvento);
      res.send("Projeto Evento Funcionando");
    }catch(err:any){
      res.status(200).send(err.message);
    }
  }
}