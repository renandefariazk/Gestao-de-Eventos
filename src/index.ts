import express, { Request, Response } from "express";
import * as database from "./database/index";
import dotenv from "dotenv";
dotenv.config();

// Route
import {route as homeRoute} from "./Routes/homeRoute";
import {route as userRoute} from "./Routes/userRoute";
import {route as eventoRoute} from "./Routes/eventoRoute";
import {route as historicoRoute} from "./Routes/historicoRoute";

try{
  database;

  const port = process.env.PORT;

  const app = express();

  // app.use((req: Request, res: Response, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '');
  //   res.setHeader('Access-Control-Allow-Methods', '');
  //   res.setHeader('Access-Control-Allow-Headers', '*');
  //   res.setHeader('Access-Control-Allow-Credentials', 'true');
  //   next();
  // });

  app.use(express.json());

  app.use("/", homeRoute, userRoute, eventoRoute, historicoRoute);

  app.listen(port, () =>{
    console.log(`Projeto Iniciado na Port: ${port}`);
  });
} catch(err:any){
  throw new Error(err.message);
}