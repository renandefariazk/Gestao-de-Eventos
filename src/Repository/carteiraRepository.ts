import { Icarteira } from "../interfaces/carteira";
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

  async addSaldo(data:Icarteira){
    try{
      console.log(data.user_id)
      console.log(data.saldo)
      const carteira = await this.model.findOne({
        where:{user_id: data.user_id}
      });
      if(carteira){
        return carteira?.increment("saldo",{by:data.saldo});
      }else{
        throw new Error("Error ao adicionar saldo, tente novamente");
      }
    }catch(err:any){
      throw new Error(err.message);
    }
  }
}