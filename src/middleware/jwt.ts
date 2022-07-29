const jwt = require("jsonwebtoken"); 
require("dotenv").config();
import { Request, Response } from "express";
import { IuserToken } from "../interfaces/token";

export class jwtToken{
  public jwt;
  constructor(){
    this.jwt = jwt;
  }
  createToken = (user:IuserToken) =>{
    const {id, name, email, role} = user;
    return this.jwt.sign({
      id: id,
      name: name,
      email: email,
      role: role
    }, process.env.PRIVATEKEYTOKEN, {expiresIn: '10h'});
  }
  
  verificaToken = (req:Request, res:Response, next:any) =>{
    try{
      const tokenAuth = req.headers.authorization as string;
      if(!tokenAuth){
        throw new Error("Token deve ser Fornecido");
      }
      const tokenFinal = tokenAuth.replace("Bearer", "").trim();
      const token = this.jwt.verify(tokenFinal, process.env.PRIVATEKEYTOKEN);
      if(token){
        req.headers.user = token;
        next();
      } else{
        throw new Error("Error de Authentificação");
      }
    }catch(err:any){
      res.status(401).send(err.message);
    }
  }

  decode = (data:string) =>{
    try{
      const tokenFinal = data.replace("Bearer", "").trim();
      const token = this.jwt.decode(tokenFinal, process.env.PRIVATEKEYTOKEN);
      return token;
    }catch(err:any){
      throw new Error("Token invalido");
    }
  }

}
