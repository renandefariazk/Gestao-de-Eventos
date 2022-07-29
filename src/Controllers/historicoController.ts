import { Request, Response } from "express";
import { jwtToken } from "../middleware/jwt";
import { carteiraRepository } from "../Repository/carteiraRepository";
import { historicoService } from "../Services/historicoService";
import { eventoService } from "../Services/eventoService";

export default class historicoController {
  public service;
  public jwtToken;
  public carteriaRepository;
  public eventoService;

  constructor(){
    this.service = new historicoService();
    this.jwtToken = new jwtToken();
    this.carteriaRepository = new carteiraRepository();
    this.eventoService = new eventoService();

    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.create = this.create.bind(this);
  }

  async index(req:Request, res:Response){
    try{
      const token = req.headers.authorization;
      const user = this.jwtToken.decode(token as string);
      if(user.role == "admin"){
        const historico = await this.service.index();
        res.status(200).send(historico);
      } else{
        throw new Error("Sem permissão de Realizar essa ação");
      }
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

  async create(req:Request, res:Response){
    try{
      const token = req.headers.authorization;
      const user = this.jwtToken.decode(token as string);
      const { evento_id, valor } = req.body;
      const evento:any = await this.eventoService.show(evento_id);
      const carteiraUser:any = await this.carteriaRepository.show(user.id);
      if(carteiraUser.saldo >= evento.valor){
        const historico:any = await this.service.create({ user_id: user.id, evento_id, valor });
        res.status(200).send(historico);
      } else{
        throw new Error("Usuario não tem saldo para Realizar Compra");
      }
    }catch(err:any){
      res.status(500).send(err.message);
    }
  }
}