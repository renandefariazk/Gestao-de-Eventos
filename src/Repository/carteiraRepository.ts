import { Carteira } from "../Models/Carteiras";


export class carteiraRepository{
  public model;

  constructor(){
    this.model = Carteira;
  }

  async create(user_id:number, saldo:number){
    return await this.model.create({
      user_id: user_id,
      saldo: saldo
    })
  }

  async show(user_id:number){
    return await this.model.findOne({
      where:{user_id: user_id}
    })
  }
}