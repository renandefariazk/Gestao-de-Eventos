import { Request, Response } from "express";
import { jwtToken } from "../middleware/jwt";
import { eventoService } from "../Services/eventoService";

export default class eventoController {
  public jwtToken;
  public service;

  constructor(){
    this.jwtToken = new jwtToken();
    this.service = new eventoService();

    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
  }
  async index(req:Request, res:Response){
    try{
      const eventos = await this.service.index();
      res.status(200).send(eventos);
    }catch(err:any){
      res.status(500).send(err.message);
    }
  }

  async create(req:Request, res:Response){
    try{
      const token = req.headers.authorization;
      const user = this.jwtToken.decode(token as string);
      const {name, valor, type, local, ingresso} = req.body;
      // verificar se o usuario tem a Role de Admin
      if(user.role = "admin"){
        await this.service.create({name, valor, type, local, ingresso});
        res.status(200).send("Evento Criado com Sucesso");
      } else{
        throw new Error("Não tem permissão para Realizar ação")
      }
    }catch(err:any){
      res.status(500).send(err.message);
    }
  }
}