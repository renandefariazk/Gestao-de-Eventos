import { User } from "../Models/Users";
import { Icreate, Ifind } from "../interfaces/user";
import { Carteira } from "../Models/Carteiras";

export class userRepository{
  public model;
  
  constructor(){
    this.model = User; 
  }

  async create(data:Icreate){
    try{
      return await this.model.create(data);
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async findOne(data:Ifind){
    try{
      const user = await this.model.findOne({
        where:{
          email: data.email,
          password: data.password
        }
      });
      return user;
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async findbyId(data:string){
    try{
      const user = await this.model.findOne({
        where:{
          id: data
        },
        include:{model: Carteira}
      });
      return user;
    } catch(err:any){
      throw new Error(err.message);
    }
  }
}