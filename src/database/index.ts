import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbHost = process.env.DB_HOST as string;
const dbDialect = process.env.DB_DIALECT as Dialect;

const connection = new Sequelize(dbName, dbUser, dbPassword, {host: dbHost, dialect: dbDialect});
connection.authenticate();

export { connection };