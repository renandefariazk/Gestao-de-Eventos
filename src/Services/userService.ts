import { Icreate, Ifind, Ilogin } from "../interfaces/user";
import { userRepository } from "../Repository/userRepository";

export class userService {
  public repository;
  constructor(){
    this.repository = new userRepository();
  }
  async create(data:Icreate){
    try{
      await this.repository.create(data);
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async login(data:Ilogin){
    try{
      const user:any = await this.repository.findOne(data);
      if(!user){
        throw new Error("Credenciais Invalidas");
      }
      // gerar Token e enviar
      return user;
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async findOne(data:Ifind){
    try{
      const user:any = await this.repository.findOne(data);
      if(!user){
        throw new Error("Usuario não Encontrado");
      }
      return user;
    } catch(err:any){
      throw new Error(err.message);
    }
  }

  async findbyId(data:string){
    try{
      const user:any = await this.repository.findbyId(data);
      if(!user){
        throw new Error("Usuario não Encontrado");
      }
      return user;
    } catch(err:any){
      throw new Error(err.message);
    }
  }
}