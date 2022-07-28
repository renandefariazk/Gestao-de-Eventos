import { historicoRepository } from "../Repository/historicoRepository";

export class historicoService{
  public repository;
  
  constructor(){
    this.repository = new historicoRepository();
  }

  async show(id:string){
    try{
      return this.repository.show(id);
    }catch(err:any){
      throw new Error (err.message);
    }
  }

}