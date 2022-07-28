import { Request, Response } from "express";
import { historicoService } from "../Services/historicoService";

export default class historicoController {
  public service;

  constructor(){
    this.service = new historicoService();

    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
  }

  async index(req:Request, res:Response){
    try{
      // const token = req.headers.authorization;
      // pega o email e senha do token e descobrir o usuario e depois pega o id dele
      // pega o id baseado no usuario logado
      // const historico = await this.show();
      // res.status(200).send(historico);
    }catch(err:any){
      res.status(500).send(err.message);
    }
  }

  async show(req:Request, res:Response){
    try{
      const {id} = req.params;
      const historico:any = await this.service.show(id as string);
      if(!historico){
        throw new Error("Historico de Inexistente");
      }
      res.status(200).send(historico);
    }catch(err:any){
      res.status(500).send(err.message);
    }
  }
}