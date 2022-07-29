import { Icreate } from "../interfaces/evento";
import { Evento } from "../Models/Eventos";

export class eventoRepository{
  public model;
  constructor(){
    this.model = Evento; 
  }

  async index(){
    try{
      const eventos = await this.model.findAll();
      return eventos;
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async show(id:string | number){
    try{
      return await this.model.findOne({
        where:{
          id: id
        }
      });
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async create(data:Icreate){
    try {
      return await this.model.create({
        name: data.name,
        type: data.type,
        local: data.local,
        valor: data.valor,
        ingresso: data.ingresso
      });
    } catch (err:any){
      throw new Error(err.message);
    }
  }

  async buy(id:number){
    try{
      const evento:any = await this.model.findOne({
        where:{
          id: id
        }
      });
      if(evento.ingresso <= 0){
        return "ingresso Esgotado";
      }else{
        return await evento.decrement('ingresso',{by: 1});
      }
    } catch(err:any){
      throw new Error(err.message);
    }
  }
}