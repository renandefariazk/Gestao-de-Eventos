import express, { Request, Response } from "express";
import dotenv from "dotenv";

// Route
import {route as homeRoute} from "./Routes/homeRoute";

dotenv.config();

const port = process.env.Port || 3000;

const app = express();


// app.use((req: Request, res: Response, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '');
//   res.setHeader('Access-Control-Allow-Methods', '');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });

app.use(express.json());

app.use("/", homeRoute);

app.listen(port, () =>{
  console.log(`Projeto Iniciado na Port: ${port}`);
});