import { Icreate } from "../interfaces/historico";
import { Evento } from "../Models/Eventos";
import { Historico } from "../Models/Historicos";
import { User } from "../Models/Users";

export class historicoRepository{
  public model;

  constructor(){
    this.model = Historico;
  }

  async index(){
    try{
      const historico = await this.model.findAll({include:Evento});
      return historico;
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async show(id:string){
    try{
      const historico = await this.model.findAll({
        where:{ id:id }
      });
      return historico;
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async create(data:Icreate){
    try{
      const historico = await this.model.create({
        user_id: data.user_id,
        evento_id: data.evento_id,
        valor: data.valor
      });
      return historico;
    } catch(err:any){
      throw new Error(err.message);
    }
  }

}