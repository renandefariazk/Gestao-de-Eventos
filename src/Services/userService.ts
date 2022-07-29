import { Icreate, Ifind, Ilogin } from "../interfaces/user";
import { userRepository } from "../Repository/userRepository";
import { carteiraRepository } from "../Repository/carteiraRepository";
import { jwtToken } from "../middleware/jwt";

export class userService {
  public repository;
  public jwtToken;
  public carteiraRepository;

  constructor(){
    this.repository = new userRepository();
    this.jwtToken = new jwtToken();
    this.carteiraRepository = new carteiraRepository();
  }
  async create(data:Icreate){
    try{
      const user:any = await this.repository.create(data);
      await this.carteiraRepository.create(user.id, 0);
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
      const userStringify = JSON.stringify(user);
      const userJson = JSON.parse(userStringify);
      const token = this.jwtToken.createToken({
        id: userJson.id,
        name:userJson.name,
        email: userJson.email,
        role: userJson.role
      });
      return token;
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