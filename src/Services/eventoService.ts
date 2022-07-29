import { eventoRepository } from "../Repository/eventoRepository";
import { Icreate } from "../interfaces/evento";

export class eventoService{
  public repository;
  
  constructor(){
    this.repository = new eventoRepository();
  }

  async index(){
    try{
      return this.repository.index();
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async show(id:string){
    try{
      return this.repository.show(id);
    }catch(err:any){
      throw new Error(err.message);
    }
  }

  async create(data:Icreate){
    try{
      return this.repository.create(data);
    }catch(err:any){
      throw new Error(err.message);
    }
  }

}