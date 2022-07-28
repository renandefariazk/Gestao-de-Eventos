import { Historico } from "../Models/Historicos";

export class historicoRepository{
  public model;

  constructor(){
    this.model = Historico;
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

}