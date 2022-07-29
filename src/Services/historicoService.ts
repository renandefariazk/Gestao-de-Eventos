import { historicoRepository } from "../Repository/historicoRepository";
import { Icreate } from "../interfaces/historico";
import { eventoRepository } from "../Repository/eventoRepository";
import { carteiraRepository } from "../Repository/carteiraRepository";

export class historicoService{
  public repository;
  public eventoRepository;
  public carteriaRepository;
  
  constructor(){
    this.repository = new historicoRepository();
    this.eventoRepository = new eventoRepository();
    this.carteriaRepository = new carteiraRepository();
  }

  async index(){
    try{
      return await this.repository.index();
    }catch(err:any){
      throw new Error(err.message);
    }
  }

  async show(id:string){
    try{
      return await this.repository.show(id);
    }catch(err:any){
      throw new Error(err.message);
    }
  }

  async create(data:Icreate){
    try{
      const evento:any = await this.eventoRepository.show(data.evento_id);
      if(evento.ingresso <= 0){
        return "ingresso Esgotado";
      }else{
      await this.repository.create(data);
      const carteiraUser:any = await this.carteriaRepository.show(data.user_id);
      carteiraUser.decrement("saldo", {by: data.valor});
      return await this.eventoRepository.buy(data.evento_id);
      }
    }catch(err:any){
      throw new Error(err.message);
    }
  }

}