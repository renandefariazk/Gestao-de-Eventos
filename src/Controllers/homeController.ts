import { Request, Response } from "express";

export default class homeController {
  index(req:Request, res:Response){
    try{
      res.send("Projeto Funcionando");
    }catch(err:any){
      res.status(500).send(err.message);
    }
  }
}