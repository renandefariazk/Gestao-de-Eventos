import { Request, Response } from "express";
import { userService } from "../Services/userService";

export default class userController {
  public service:any;

  constructor(){
    this.service = new userService();

    this.show = this.show.bind(this);
    this.create = this.create.bind(this);
    this.login = this.login.bind(this);
  }

  async show(req:Request, res:Response){
    try{
      const { id } = req.params;
      const user:any = await this.service.findbyId(id);
      if(!user){
        throw new Error("Usuario não Encontrado");
      }
      const userStringify = JSON.stringify(user);
      const userJson = JSON.parse(userStringify);
      res.send(userJson);
    }catch(err:any){
      res.status(500).send(err.message);
    }
  }

  async create(req:Request, res:Response){
    try{
      const {name, password, email, telefone} = req.body;
      const role = "user";
      await this.service.create({name, password, email, telefone, role});
      res.status(200).send("Conta criada com Sucesso");
    } catch (err:any) {
      res.status(500).send(err.message);
    }
  }

  async login(req:Request, res:Response){
    try{
      const { password, email} = req.body;
      const login = await this.service.login({email, password});
      res.status(200).send(login);
    } catch (err:any) {
      res.status(500).send(err.message);
    }
  }
}