import { Dialect } from "sequelize/types";

interface IdataBaseConfig {
  dialect: Dialect,
  host: string,
  database: string,
  username: string,
  password: string,
  port: number
}

export { IdataBaseConfig };